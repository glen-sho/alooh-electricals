import { DisplayProductsType } from "@/data/products";
import { toSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
}: {
  product: DisplayProductsType;
}) {
  const { name, category, images } = product;
  const slug = toSlug(name);

  //   // Resolve badge label and colours
  //   let badgeLabel = badge.toUpperCase();
  //   let badgeBg = "#e5e7eb";
  //   let badgeColor = "#374151";

  //   if (madeInGhana) {
  //     badgeLabel = "MADE IN GHANA";
  //     badgeBg = "#16a34a";
  //     badgeColor = "#fff";
  //   }
  //   if (comingSoon) {
  //     badgeLabel = "COMING SOON";
  //     badgeBg = "#d97706";
  //     badgeColor = "#fff";
  //   }
  //   if (badge === "New Arrival") {
  //     badgeBg = "#2563eb";
  //     badgeColor = "#fff";
  //   }
  //   if (badge === "Top Rated") {
  //     badgeBg = "#7c3aed";
  //     badgeColor = "#fff";
  //   }
  //   if (badge === "Popular") {
  //     badgeBg = "#0369a1";
  //     badgeColor = "#fff";
  //   }

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        borderColor: "#e8e8e8",
        opacity: 1,
        backgroundColor: "#fff",
      }}
    >
      <Link
        href={`/${slug}`}
        className="relative bg-[#f5f5f3] aspect-4/3 overflow-hidden h-60"
      >
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* <span
               className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-widest px-2 py-1"
               style={{ backgroundColor: badgeBg, color: badgeColor }}
            >
               {badgeLabel}
            </span> */}
      </Link>

      <div className="flex flex-col flex-1 py-4 gap-1">
        <Link
          href={`/${slug}`}
          className="text-sm font-bold text-gray-900 leading-snug uppercase"
        >
          {name}
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-widest">
          {category}
        </span>
      </div>
    </div>
  );
}
