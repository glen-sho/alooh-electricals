import { cn } from "@/lib/utils";
import React from "react";

export default function CategoryTab({
   categories,
   setActiveFilter,
   activeFilter,
}: {
   categories: Record<string, string>;
   setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
   activeFilter: string;
}) {
   const categoriesFilter = { All: "All", ...categories };
   return (
      <div className="flex flex-wrap gap-2 mb-4 px-4 md:px-0">
         {Object.entries(categoriesFilter).map(([key, value]) => (
            <button
               key={key}
               onClick={() => setActiveFilter(value)}
               className={cn(
                  activeFilter === value ? "bg-navy_blue text-white " : "border-[#e8e8e8] hover:bg-neutral-100",
                  "px-4 py-1.5 font-medium border transition-colors rounded-sm cursor-pointer",
               )}
            >
               {value}
            </button>
         ))}
      </div>
   );
}
