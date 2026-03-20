export function Footer() {
  return (
    <footer className="ai-chat-footer mt-12 border-t border-[#2f5a3a] bg-[#193322] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="text-base font-semibold tracking-wide">Williamson County Nature Library</p>
        <div className="h-px w-24 bg-white/25" />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90">
          <p>Educational Trail Project</p>
          <p className="hidden sm:block">•</p>
          <p>Eagle Scout Community Project</p>
          <p className="hidden sm:block">•</p>
          <p>County Parks and Conservation Education</p>
        </div>
        <p className="text-xs text-white/70">
          Explore local species, habitats, and stewardship guidance for Central Texas parks.
        </p>
      </div>
    </footer>
  );
}
