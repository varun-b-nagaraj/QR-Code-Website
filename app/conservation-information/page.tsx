export default function ConservationInformationPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-county-text-secondary">Outdoor Ethics</p>
          <h1 className="text-4xl font-semibold text-county-green">Conservation Information</h1>
          <p className="max-w-3xl text-county-text">
            A practical field guide for enjoying parks safely while protecting wildlife, plants, water, and trails.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-county-bg p-5">
            <h2 className="text-2xl font-semibold text-county-dark-green">Do</h2>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-county-text">
              <li>Stay on marked trails to reduce erosion and avoid damaging native plants.</li>
              <li>Carry water, sunscreen, and weather-appropriate clothing.</li>
              <li>Observe wildlife from a respectful distance and use a zoom lens for photos.</li>
              <li>Pack out all trash, including food scraps and pet waste.</li>
              <li>Use refillable bottles and reusable containers when possible.</li>
              <li>Report hazards such as downed trees, damaged signs, or unsafe trail conditions.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-county-panel p-5">
            <h2 className="text-2xl font-semibold text-county-dark-green">Don&apos;t</h2>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-county-text">
              <li>Do not feed wildlife; human food disrupts health and behavior.</li>
              <li>Do not pick flowers, break branches, or remove rocks and plants.</li>
              <li>Do not disturb nests, dens, burrows, or animal resting areas.</li>
              <li>Do not cut switchbacks or create social trails.</li>
              <li>Do not leave food wrappers, fishing line, or plastic behind.</li>
              <li>Do not approach snakes or other wildlife for close photos.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-county-dark-green">Safety Basics</h2>
          <ul className="ml-5 list-disc space-y-2 text-county-text">
            <li>Check weather before you head out and avoid trails during lightning or flood risk.</li>
            <li>Tell someone your route and expected return time for longer walks.</li>
            <li>Wear closed-toe shoes and watch your footing on rocky or wet sections.</li>
            <li>Use insect protection in warm months and perform a tick check after hiking.</li>
            <li>Keep pets leashed where required and under control around wildlife.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-county-dark-green">How Visitors Help the Ecosystem</h2>
          <p className="text-county-text">
            Small choices from many visitors create major impact. Staying on-trail protects root systems and soils, proper
            waste handling protects creeks and wildlife, and respectful observation helps animals keep natural behavior.
            Conservation is strongest when recreation and stewardship happen together.
          </p>
        </section>

        <section className="rounded-xl bg-county-panel p-5">
          <h2 className="text-xl font-semibold text-county-dark-green">Leave No Trace Mindset</h2>
          <p className="mt-2 text-county-text">
            Plan ahead, tread lightly, dispose of waste properly, leave natural features where they are, and respect wildlife
            and other visitors. These habits keep parks healthy and welcoming for everyone.
          </p>
        </section>
      </article>
    </main>
  );
}
