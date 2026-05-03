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
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.entries(categoriesFilter).map(([key, value]) => (
        <button
          key={key}
          onClick={() => setActiveFilter(value)}
          className={cn(
            activeFilter === value
              ? "bg-primary text-white border-primary"
              : "bg-[#f5f5f3] text-[#555] border-[#e8e8e8]",
            "px-4 py-1.5 text-sm font-medium border transition-colors cursor-pointer",
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
