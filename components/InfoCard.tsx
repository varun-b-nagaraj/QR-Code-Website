import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  href: string;
}

export function InfoCard({ title, description, image, href }: InfoCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-1 p-3">
        <h3 className="text-lg font-semibold leading-tight text-county-green">{title}</h3>
        <p className="text-xs leading-snug text-county-text-secondary">{description}</p>
      </div>
    </Link>
  );
}
