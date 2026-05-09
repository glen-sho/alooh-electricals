export default function HeroCard() {
   const heroCards = {
      id: "672323b7-304a-4e6f-a79e-045bdbeceb39",
      name: "NEWORIENT 3X6 CONDUIT BOX",
      images: ["3x6-conduit-box.png"],
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
