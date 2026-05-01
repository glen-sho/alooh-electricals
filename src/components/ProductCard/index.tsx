import { DisplayProductsType } from "@/data/products";
import Link from "next/link";

export default function ProductCard({ product }: { product: DisplayProductsType }) {
   const { name, category, badge, madeInGhana, comingSoon, image } = product;

   // Resolve badge label and colours
   let badgeLabel = badge.toUpperCase();
   let badgeBg = "#e5e7eb";
   let badgeColor = "#374151";

   if (madeInGhana) {
      badgeLabel = "MADE IN GHANA";
      badgeBg = "#16a34a";
      badgeColor = "#fff";
   }
   if (comingSoon) {
      badgeLabel = "COMING SOON";
      badgeBg = "#d97706";
      badgeColor = "#fff";
   }
   if (badge === "New Arrival") {
      badgeBg = "#2563eb";
      badgeColor = "#fff";
   }
   if (badge === "Top Rated") {
      badgeBg = "#7c3aed";
      badgeColor = "#fff";
   }
   if (badge === "Popular") {
      badgeBg = "#0369a1";
      badgeColor = "#fff";
   }

   return (
      <div
         className="flex flex-col overflow-hidden"
         style={{
            borderColor: "#e8e8e8",
            opacity: comingSoon ? 0.6 : 1,
            backgroundColor: "#fff",
         }}
      >
         <Link href={`/${name}`} className="relative bg-[#f5f5f3] aspect-4/3 overflow-hidden h-60">
            <img
               src={image}
               alt={name}
               className={`w-full h-full object-cover${comingSoon ? " grayscale" : ""}`}
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
            <Link href={`/${name}`} className="text-sm font-bold text-gray-900 leading-snug uppercase">
               {name}
            </Link>
            <span className="text-[10px] font-bold uppercase tracking-widest">{category}</span>
         </div>
      </div>
   );
}
