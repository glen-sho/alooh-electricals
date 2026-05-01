import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const PHONE = "+233 24 408 1474";
export const EMAIL = "glen@aloohelectricals.com";
export const WA_GENERAL = `https://wa.me/233244081474?text=${encodeURIComponent("Hello Alooh Electricals, I'd like to make an enquiry.")}`;
export default function ActionButton({ dr = "row" }: { dr?: "col" | "row" }) {
   return (
      <div className={cn(dr === "col" ? "flex-col" : "flex-row", "flex items-center gap-3 flex-1 justify-end")}>
         <Link
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-white px-4 py-2 rounded-[7px] text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap bg-whatsapp w-full text-center"
         >
            <div className="flex items-center gap-2">
               <FaWhatsapp size={14} />
               <p>WhatsApp Us</p>
            </div>
         </Link>
         <Link
            href={`mailto:${EMAIL}`}
            className="block ring-1 hover:bg-neutral-100 font-semibold text-sm px-4 py-2 rounded-[7px] transition-colors whitespace-nowrap border-primary text-primary w-full bg-white text-center"
         >
            Get a Quote
         </Link>
      </div>
   );
}
