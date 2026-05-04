import React from "react";

const heroStats = [
   { number: "40+", label: "Years in Business" },
   { number: "2010", label: "New Orient Est." },
   { number: "2022", label: "Factory Est." },
   { number: "1st", label: "Conduit Manufacturer in Ghana" },
];
export default function Stats({ position, color }: { position?: "center"; color?: string }) {
   return (
      <div className={`flex justify-${position} items-center`}>
         <div className="flex gap-4 sm:grid-cols-4">
            {heroStats.map((s) => (
               <div key={s.label} className={`text-${color}`}>
                  <p className="text-3xl font-bold">{s.number}</p>
                  <p className="mt-0.5 leading-snug text-sm">{s.label}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
