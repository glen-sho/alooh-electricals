import React from "react";

const heroStats = [
   { number: "40+", label: "Years in Business" },
   { number: "2010", label: "New Orient Est." },
   { number: "2022", label: "Factory Est." },
   { number: "1st", label: "Conduit Manufacturer in Ghana" },
];
export default function Stats() {
   return (
      <div
         className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6"
         style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
         {heroStats.map((s) => (
            <div key={s.label}>
               <p className="text-2xl font-bold text-red-400">{s.number}</p>
               <p className="text-sm text-white mt-0.5 leading-snug">{s.label}</p>
            </div>
         ))}
      </div>
   );
}
