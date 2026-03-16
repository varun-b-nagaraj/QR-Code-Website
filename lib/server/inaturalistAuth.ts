interface OAuthTokenResponse {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
}

let cachedJwt: { token: string; expiresAt: number } | null = null;

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

async function fetchOAuthAccessToken(baseUrl: string): Promise<string> {
  const appId = process.env.INATURALIST_APP_ID;
  const appSecret = process.env.INATURALIST_APP_SECRET;
  const username = process.env.INATURALIST_USERNAME;
  const password = process.env.INATURALIST_PASSWORD;

  if (!appId || !appSecret || !username || !password) {
    throw new Error(
      "Missing iNaturalist OAuth credentials. Set INATURALIST_APP_ID, INATURALIST_APP_SECRET, INATURALIST_USERNAME, and INATURALIST_PASSWORD.",
    );
  }

  const body = new URLSearchParams({
    client_id: appId,
    client_secret: appSecret,
    grant_type: "password",
    username,
    password,
  });

  const response = await fetch(`${baseUrl}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`iNaturalist OAuth token request failed (${response.status}): ${text || "No response body"}`);
  }

  const data = (await response.json()) as OAuthTokenResponse;
  const accessToken = data.access_token?.trim();

  if (!accessToken) {
    throw new Error("iNaturalist OAuth response did not contain an access token.");
  }

  return accessToken;
}

async function fetchJwt(baseUrl: string, oauthAccessToken: string): Promise<string> {
  const response = await fetch(`${baseUrl}/users/api_token`, {
    headers: {
      Authorization: `Bearer ${oauthAccessToken}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`iNaturalist JWT request failed (${response.status}): ${text || "No response body"}`);
  }

  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = (await response.json()) as Record<string, unknown>;
    const jwt = (typeof data.api_token === "string" && data.api_token) || (typeof data.token === "string" && data.token) || (typeof data.jwt === "string" && data.jwt);
    if (!jwt) {
      throw new Error("iNaturalist JWT response did not include a token field.");
    }
    return jwt;
  }

  const raw = (await response.text()).trim();
  if (!raw) {
    throw new Error("iNaturalist JWT response was empty.");
  }

  return raw;
}

export async function getInaturalistJwt(): Promise<string> {
  const staticToken = process.env.INATURALIST_ACCESS_TOKEN?.trim();
  if (staticToken) {
    return staticToken;
  }

  const now = Date.now();
  if (cachedJwt && cachedJwt.expiresAt > now) {
    return cachedJwt.token;
  }

  const baseUrl = normalizeBaseUrl(process.env.INATURALIST_AUTH_BASE_URL || "https://www.inaturalist.org");
  const oauthAccessToken = await fetchOAuthAccessToken(baseUrl);
  const jwt = await fetchJwt(baseUrl, oauthAccessToken);

  cachedJwt = {
    token: jwt,
    expiresAt: now + 23 * 60 * 60 * 1000,
  };

  return jwt;
}

export function clearInaturalistJwtCache(): void {
  cachedJwt = null;
}
