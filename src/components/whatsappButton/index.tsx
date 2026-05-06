import { WA_GENERAL } from "@/data/products";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
   return (
      <a
         href={WA_GENERAL}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center justify-center gap-1.5 text-white px-4 py-2 rounded-[7px] text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap bg-whatsapp w-full text-center"
      >
         <div className="flex items-center gap-2">
            <FaWhatsapp size={14} />
            <p>WhatsApp Us</p>
         </div>
      </a>
   );
}
