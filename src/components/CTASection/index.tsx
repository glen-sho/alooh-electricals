import React from "react";
import ActionButton from "../ActionButtons";
import Link from "next/link";

const PHONE = "+233 24 408 1474";
const EMAIL = "glen@aloohelectricals.com";

export default function CTASection({ heading }: { heading?: string }) {
   const title = heading || "Need electrical supplies? Let\u2019s talk.";

   return (
      <section className="py-16 md:py-20 bg-[#4e4e4e]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
               <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                  <p className="leading-relaxed text-white">
                     WhatsApp or call: {PHONE} &middot; Email:{" "}
                     <Link href={`mailto:${EMAIL}`} className="underline underline-offset-2 hover:opacity-80">
                        {EMAIL}
                     </Link>
                  </p>
                  <p className="text-white">
                     4870 Sparrow Close, Tema Industrial Area &middot; Mon&ndash;Fri 8am&ndash;6pm
                  </p>
               </div>
               <div className="w-1/3">
                  <ActionButton />
               </div>
            </div>
         </div>
      </section>
   );
}
