import { parksContact } from "@/data/parks";

export function ContactPanel() {
  return (
    <aside className="rounded-xl bg-county-panel p-5" aria-label="Contact information">
      <h2 className="mb-4 text-3xl font-semibold text-county-text">Contact Us</h2>
      <div className="space-y-4 text-county-text">
        <div>
          <p className="font-semibold">{parksContact.department}</p>
          <p>{parksContact.projectName}</p>
        </div>
        <div>
          <p>{parksContact.director}</p>
          <a className="underline hover:text-county-green" href={`mailto:${parksContact.email}`}>
            {parksContact.email}
          </a>
        </div>
        <div>
          <p>Physical Address</p>
          {parksContact.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <a href={`tel:${parksContact.phone}`} className="underline hover:text-county-green">
            {parksContact.phone}
          </a>
        </div>
      </div>
    </aside>
  );
}
