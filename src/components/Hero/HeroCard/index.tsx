import { products } from "@/data/products";
import React from "react";

export default function HeroCard() {
   const heroCards = {
      id: "2235b39d-1b89-4288-9aad-6cee0a03c0f2",
      name: "NEWORIENT 3X3 PLASTIC BOX",
      images: ["3x3-plastic-box.png"],
      description:
         "Neworient 3x3 white plastic pattress box for surface-mounting. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
   };

   return (
      <div className="flex justify-end">
         <div className="relative">
            <div className="">
               <img
                  src={heroCards.images[0]}
                  alt={"heroImage"}
                  className="w-110 h-120 object-contain bg-mist-100 rounded-sm"
               />
               <div className="absolute top-0 flex flex-col gap-3 h-full justify-between">
                  <div className="left-5 relative flex flex-col">
                     <img src={"/flag.png"} alt={"flag"} className="w-20 h-20 object-contain" />
                     <span className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[3px] w-fit text-white bg-purple-700">
                        MADE IN GHANA
                     </span>
                  </div>
                  <div className="bg-navy_blue p-2 px-8 space-y-1 rounded-sm bottom-20 relative text-white md:-left-40 border-white border opacity-90">
                     <p className=" text-lg font-bold leading-tight">{heroCards.name}</p>
                     <p className="mt-0.5"> Manufactured at our Tema factory</p>
                  </div>
               </div>
            </div>
            <p className="text-center text-md text-gray-400 mt-1">
               No prices displayed &middot; WhatsApp or email to enquire
            </p>
         </div>
      </div>
   );
}
