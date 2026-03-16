export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-4xl font-semibold text-county-green">About This Project</h1>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Project Overview</h2>
          <p className="mt-2 text-county-text">
            This concept demonstrates how QR-coded signs can connect visitors to a county-style educational website during a
            park trail walk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">How QR Signs Work</h2>
          <p className="mt-2 text-county-text">
            Visitors scan posted trail markers and open location-aware educational pages with species highlights,
            conservation tips, and optional photo-based identification.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Educational Goals</h2>
          <p className="mt-2 text-county-text">
            Improve outdoor learning access, support family-friendly interpretation, and connect local ecology to everyday
            trail use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Conservation Goals</h2>
          <p className="mt-2 text-county-text">
            Promote native species awareness, responsible trail behavior, and practical stewardship actions for local habitats.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Technology Concept</h2>
          <p className="mt-2 text-county-text">
            The prototype uses local mock data and modular helper files where future plant, wildlife, and biodiversity
            integrations can be introduced.
          </p>
        </section>

        <section className="rounded-xl bg-county-panel p-4">
          <h2 className="text-xl font-semibold text-county-text">Prototype Note</h2>
          <p className="mt-2 text-county-text">
            This site is a concept demonstration for a proposed educational trail system and plant/wildlife identification
            experience. Final county implementation, data sources, and accessibility standards would be determined during a
            future official development process.
          </p>
        </section>
      </section>
    </main>
  );
}
