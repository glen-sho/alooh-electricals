import { DisplayProductsType } from "@/data/products";

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
         {/* Image area */}
         <div className="relative bg-[#f5f5f3] aspect-4/3 overflow-hidden h-60">
            <img
               src={image}
               alt={name}
               className={`w-full h-full object-cover${comingSoon ? " grayscale" : ""}`}
               loading="lazy"
            />
            <span
               className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-widest px-2 py-1"
               style={{ backgroundColor: badgeBg, color: badgeColor }}
            >
               {badgeLabel}
            </span>
         </div>

         {/* Body */}
         <div className="flex flex-col flex-1 py-4 gap-1">
            <h3 className="text-sm font-bold text-gray-900 leading-snug uppercase">{name}</h3>
            <span className="text-[10px] font-bold uppercase tracking-widest">{category}</span>
            {/* <p className="text-xs text-gray-500 leading-relaxed flex-1">{description}</p> */}

            {/* {!comingSoon && <p className="text-[10px] italic text-gray-400 mt-1">Contact us for pricing</p>} */}

            {/* Action buttons — only when not coming soon */}
            {/* {!comingSoon ? (
               <div className="flex gap-2 mt-3">
                  <a
                     // href={getWALink(name)}
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ backgroundColor: "#16a34a" }}
                     className="flex-1 flex items-center justify-center gap-1 text-white py-2 rounded-[6px] text-[11px] font-medium hover:opacity-90 transition-opacity"
                  >
                     <MessageCircle size={12} /> WhatsApp
                  </a>
                  <a
                     // href={getEmailLink(name)}
                     className="flex-1 flex items-center justify-center gap-1 py-2 rounded-[6px] text-[11px] font-medium border"
                     style={{ borderColor: "#16a34a", color: "#16a34a" }}
                  >
                     <Mail size={12} /> Email
                  </a>
               </div>
            ) : (
               <p
                  className="text-[10px] font-medium mt-3 text-center py-1.5 rounded-[5px]"
                  style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
               >
                  Coming soon — not yet available
               </p>
            )} */}
         </div>
      </div>
   );
}
