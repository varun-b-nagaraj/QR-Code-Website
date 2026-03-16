import { InfoCard } from "@/components/InfoCard";
import { StaticImageData } from "next/image";

interface CardItem {
  title: string;
  description: string;
  image: string | StaticImageData;
  href: string;
}

interface CardGridProps {
  items: CardItem[];
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  );
}
