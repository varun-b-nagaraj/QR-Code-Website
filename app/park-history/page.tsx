export default function ParkHistoryPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-4xl font-semibold text-county-green">Park History</h1>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Origins</h2>
          <p className="mt-2 text-county-text">
            Local park development began as a long-term effort to preserve native habitat while expanding safe recreation and
            outdoor education access for nearby communities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Trail Expansion</h2>
          <p className="mt-2 text-county-text">
            Over time, connected trail segments were added to support family walks, school field visits, and interpretive
            programs focused on plants, wildlife, and ecosystem stewardship.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Conservation Milestones</h2>
          <p className="mt-2 text-county-text">
            Habitat restoration, native planting, and public education initiatives helped improve biodiversity awareness and
            strengthen community support for conservation practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-county-dark-green">Today</h2>
          <p className="mt-2 text-county-text">
            The current trail experience combines wayfinding, history, and environmental interpretation to encourage ongoing
            learning and responsible use of shared natural spaces.
          </p>
        </section>
      </section>
    </main>
  );
}
