import React from "react";

export default function HeroCard() {
   const heroCards = [
      {
         badge: "NEW ARRIVAL",
         badgeBg: "#2563eb",
         name: "New Orient 3-Gang Switch",
         desc: "Quality-checked, ready to install",
         img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop",
      },
      {
         badge: "TOP RATED",
         badgeBg: "#7c3aed",
         name: "LED Panel Surface Lights",
         desc: "Energy efficient, long-life LED",
         img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=400&auto=format&fit=crop",
      },
      {
         badge: "MADE IN GHANA",
         badgeBg: "#16a34a",
         name: "3x3 Conduit Box",
         desc: "Manufactured at our Tema factory",
         img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=400&auto=format&fit=crop",
      },
   ];
   return (
      <div className="flex flex-col gap-3">
         {heroCards.map((item) => (
            <div
               key={item.name}
               className="flex items-center gap-4 p-3 border border-stone-300 rounded-md bg-stone-200/35"
            >
               <div className="w-14 h-14 rounded-md overflow-hidden bg-mist-300 shrink-0">
                  {/* <Image
                                 src={item.img}
                                 alt={item.name}
                                 width={200}
                                 height={200}
                                 className="w-full h-full object-cover"
                              /> */}
               </div>
               <div className="flex-1 min-w-0">
                  <span
                     className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[3px] text-white "
                     style={{ backgroundColor: item.badgeBg }}
                  >
                     {item.badge}
                  </span>
                  <p className=" text-md font-medium mt-1 leading-tight">{item.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
               </div>
            </div>
         ))}
         <p className="text-center text-md text-gray-500 mt-1">
            No prices displayed &middot; WhatsApp or email to enquire
         </p>
      </div>
   );
}
