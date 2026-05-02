import React from "react";

const pillars = [
   {
      title: "The New Horizon",
      body: "We were the first company in Ghana to manufacture conduit boxes domestically and we are just getting started. Our factory now produces 3x3 and 3x6 conduit boxes, with PVC Pipes and Trunking in development. Our goal is to manufacture every essential electrical product locally and end Ghana's dependence on imports.",
   },
   {
      title: "Building a Community",
      body: "Alooh Electricals was built by a family. Alfred Kofi Gyan and his wife built this business together and that spirit is in everything we do. We create local jobs, invest in our team in Tema, and contribute directly to Ghana's economic growth and future.",
   },
   {
      title: "Educating the Industry",
      body: "We partner with technical schools and industry bodies to raise the standard of electrical installation across Ghana. Great products need skilled hands to install them right.",
   },
];
export default function Banner() {
   return (
      <section style={{ backgroundColor: "#f5f5f3" }} className="py-20">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What We Stand For</h2>
               <p className="text-gray-500 max-w-xl mx-auto">
                  Three commitments that guide every product we make and every relationship we build.
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {pillars.map((p) => (
                  <div
                     key={p.title}
                     className="bg-white rounded-lg border border-gray-100 p-7 shadow-sm shadow-stone-200"
                  >
                     <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-2 h-2 rounded-full shrink-0 bg-primary" />
                        <h3 className="font-bold text-gray-900">{p.title}</h3>
                     </div>
                     <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
