"use client";

import { useState } from "react";

const quickPrompts = [
  "What plants are easiest to identify near this stop?",
  "Which species here are native vs invasive?",
  "Give me a kid-friendly trail learning activity.",
];

export function AIAssistantClient() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onAsk() {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setLoading(true);

    // Placeholder integration point for future model/API call.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setResponse(
      "Prototype response: This AI section is ready for model integration. Next step is wiring a secure server endpoint that takes your prompt and returns context-aware trail guidance.",
    );

    setLoading(false);
  }

  return (
    <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <header>
        <h1 className="text-3xl font-semibold text-county-green">AI Trail Assistant</h1>
        <p className="mt-2 text-county-text-secondary">
          Early integration page for an educational assistant that can answer visitor questions about species, trail stops,
          and conservation.
        </p>
      </header>

      <div className="rounded-lg bg-county-bg p-4">
        <p className="mb-3 text-sm font-semibold text-county-text">Quick prompt ideas</p>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setPrompt(item)}
              className="rounded-full border border-county-panel bg-white px-3 py-2 text-sm text-county-text hover:border-county-green"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-prompt" className="text-sm font-semibold text-county-text">
          Ask a question
        </label>
        <textarea
          id="ai-prompt"
          rows={4}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Example: What should I look for at the Native Plants stop in spring?"
          className="w-full rounded-lg border border-county-panel px-4 py-3 outline-none focus:border-county-green"
        />
        <button
          type="button"
          onClick={onAsk}
          disabled={loading || !prompt.trim()}
          className="rounded-full bg-county-green px-6 py-2 font-semibold text-white hover:bg-county-dark-green disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Generating..." : "Ask AI"}
        </button>
      </div>

      <section className="rounded-lg border border-county-panel p-4" aria-live="polite">
        <h2 className="text-lg font-semibold text-county-text">AI Output</h2>
        <p className="mt-2 text-county-text-secondary">
          {response ?? "No response yet. Submit a question to preview the integration experience."}
        </p>
      </section>
    </section>
  );
}
