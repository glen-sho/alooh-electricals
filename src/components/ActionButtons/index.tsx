import { cn } from "@/lib/utils";
import Link from "next/link";
import WhatsAppButton from "../whatsappButton";

export default function ActionButton({ dr = "row" }: { dr?: "col" | "row" }) {
   return (
      <div className={cn(dr === "col" ? "flex-col" : "flex-row", "flex items-center gap-3 flex-1 justify-end")}>
         <WhatsAppButton />
         <Link
            href={`/contact`}
            className="block ring-1 hover:bg-neutral-100 font-semibold text-sm px-4 py-2 rounded-[7px] transition-colors whitespace-nowrap border-primary text-primary w-full bg-white text-center"
         >
            Get a Quote
         </Link>
      </div>
   );
}
