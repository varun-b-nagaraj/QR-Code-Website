interface InsightCoverProps {
  category: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}

const paletteByCategory: Record<string, { shell: string; panel: string; accent: string; text: string; wash: string }> = {
  Plants: {
    shell: "from-[#e9f2e8] via-[#f5f8ef] to-[#dce8d9]",
    panel: "bg-[#fbfcf7]",
    accent: "bg-[#6f8f4f]",
    text: "text-[#21351a]",
    wash: "bg-[#c9dcab]",
  },
  Birds: {
    shell: "from-[#e5eff7] via-[#f6f9fc] to-[#d8e7f3]",
    panel: "bg-[#fbfdff]",
    accent: "bg-[#587ba8]",
    text: "text-[#16293e]",
    wash: "bg-[#bfd2e8]",
  },
  Mammals: {
    shell: "from-[#f3e8dd] via-[#fcf8f3] to-[#ead4bf]",
    panel: "bg-[#fffaf4]",
    accent: "bg-[#9a6846]",
    text: "text-[#372214]",
    wash: "bg-[#dbb89a]",
  },
  Reptiles: {
    shell: "from-[#e6ece2] via-[#fafbf8] to-[#dce4d6]",
    panel: "bg-[#fcfdf9]",
    accent: "bg-[#7b8560]",
    text: "text-[#2a2e1a]",
    wash: "bg-[#cdd7b7]",
  },
  Insects: {
    shell: "from-[#f4ead7] via-[#fcfaf3] to-[#eddcb4]",
    panel: "bg-[#fffdf7]",
    accent: "bg-[#a8822b]",
    text: "text-[#3a2f12]",
    wash: "bg-[#ead79f]",
  },
};

function splitTitle(title: string) {
  const words = title.split(" ");
  if (words.length <= 2) return [title];

  const midpoint = Math.ceil(words.length / 2);
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
}

export function InsightCover({ category, title, subtitle, compact = false }: InsightCoverProps) {
  const palette = paletteByCategory[category] ?? paletteByCategory.Plants;
  const lines = splitTitle(title);

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${palette.shell}`}>
      <div className={`absolute -right-10 -top-12 h-40 w-40 rounded-full ${palette.wash} opacity-80`} />
      <div className={`absolute -left-16 bottom-0 h-32 w-40 rounded-tr-[4rem] ${palette.accent} opacity-85`} />
      <div
        className={`absolute inset-[1rem] rounded-[1.4rem] border border-black/5 ${palette.panel} ${
          compact ? "p-4" : "p-6 sm:p-8"
        }`}
      >
        <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${palette.text} opacity-70 ${compact ? "" : "sm:text-xs"}`}>
          {category} Insight
        </p>
        <div className={`${compact ? "mt-5 space-y-1" : "mt-8 space-y-2 sm:mt-10"}`}>
          {lines.map((line) => (
            <div
              key={line}
              className={`font-serif font-bold uppercase leading-[0.95] ${palette.text} ${
                compact ? "text-[1.35rem]" : "text-4xl sm:text-5xl"
              }`}
            >
              {line}
            </div>
          ))}
        </div>
        {subtitle && (
          <p
            className={`absolute ${compact ? "bottom-6 max-w-[78%] text-[11px]" : "bottom-8 max-w-[80%] text-sm sm:text-base"} ${
              palette.text
            } opacity-72`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
