import Image from "next/image";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function InfoCard({ title, description, image, href }: InfoCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-xl font-semibold text-county-green">{title}</h3>
        <p className="text-sm text-county-text-secondary">{description}</p>
      </div>
    </Link>
  );
}
