export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-4xl font-semibold text-county-green">About This Project</h1>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Project Overview</h2>
          <p className="mt-2 text-county-text">
            This project presents a concept for enhancing park trails with QR-coded signage that connects visitors to a
            mobile-friendly educational website. The goal is to provide accessible, location-based information about park
            features during a typical trail walk.
          </p>
          <p className="mt-2 text-county-text">
            By combining physical signage with digital content, the system allows visitors to learn more about the environment
            around them without requiring additional staff or guided programs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">How QR Signs Work</h2>
          <p className="mt-2 text-county-text">
            QR-coded signs are placed at key points along park trails, such as trailheads or areas of interest.
          </p>
          <p className="mt-2 text-county-text">
            When scanned, each code directs visitors to a specific page on the website, which may include:
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-county-text">
            <li>Information about nearby plants and wildlife</li>
            <li>Historical context about the park or trail</li>
            <li>Conservation tips relevant to that location</li>
            <li>Optional photo-based species identification</li>
          </ul>
          <p className="mt-2 text-county-text">
            The system is designed to be simple and accessible, requiring only a smartphone camera to use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Educational Goals</h2>
          <p className="mt-2 text-county-text">
            The project is designed to support outdoor learning by making educational content readily available during park
            visits.
          </p>
          <p className="mt-2 text-county-text">Key goals include:</p>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-county-text">
            <li>Expanding access to informal, self-guided learning</li>
            <li>Supporting family-friendly and school-based outdoor education</li>
            <li>Helping visitors recognize and understand local ecosystems</li>
            <li>Connecting everyday trail use with environmental awareness</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Conservation Goals</h2>
          <p className="mt-2 text-county-text">
            In addition to education, the project promotes responsible use of park spaces and long-term environmental
            stewardship.
          </p>
          <p className="mt-2 text-county-text">Focus areas include:</p>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-county-text">
            <li>Increasing awareness of native plants and wildlife</li>
            <li>Encouraging responsible trail behavior (stay on paths, reduce litter)</li>
            <li>Highlighting the importance of protecting local habitats</li>
            <li>Supporting community understanding of conservation practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Technology Concept</h2>
          <p className="mt-2 text-county-text">
            The project is built as a modular, mobile-first web platform designed for flexibility and future expansion.
          </p>
          <p className="mt-2 text-county-text">Current implementation includes:</p>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-county-text">
            <li>A responsive website optimized for mobile use</li>
            <li>QR code integration linking physical signs to digital content</li>
            <li>Structured content for history, plants, wildlife, and conservation</li>
            <li>Mock/local data to simulate real-world deployment</li>
          </ul>
          <p className="mt-2 text-county-text">Future integrations may include:</p>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-county-text">
            <li>Expanded species databases</li>
            <li>AI-assisted plant and wildlife identification</li>
            <li>County-managed content systems and hosting</li>
          </ul>
          <p className="mt-2 text-county-text">
            The overall system is designed to integrate with existing park infrastructure while remaining scalable and
            maintainable over time.
          </p>
        </section>
      </section>
    </main>
  );
}
