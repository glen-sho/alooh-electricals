import { cn } from "@/lib/utils";
import React from "react";

export default function CategoryTab({
   categories,
   setActiveFilter,
   activeFilter,
}: {
   categories: string[];
   setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
   activeFilter: string;
}) {
   return (
      <div className="flex flex-wrap gap-2 mb-4 ">
         {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setActiveFilter(cat)}
               className={cn(
                  activeFilter === cat
                     ? "bg-primary text-white border-primary"
                     : "border-[#e8e8e8] hover:bg-neutral-100",
                  "px-4 py-1.5 text-sm font-medium border transition-colors cursor-pointer",
               )}
            >
               {cat}
            </button>
         ))}
      </div>
   );
}
