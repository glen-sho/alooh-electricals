import CTASection from "@/components/CTASection";
import React from "react";

export default function About() {
   const timeline = [
      {
         date: "1980s",
         event: "Alfred Kofi Gyan begins trading, starting with car tyres in Ghana's local market during the country's most difficult economic era.",
      },
      {
         date: "Early 1990s",
         event: "A chance meeting on a business trip to Nigeria introduces Alfred to China. He pivots entirely into electrical goods.",
      },
      {
         date: "1990s\u20132000s",
         event: "Alooh Electricals builds global supply relationships across China, India, Turkey and Dubai, becoming one of Ghana's most trusted electrical suppliers.",
      },
      {
         date: "2010",
         event: "New Orient brand is created. Alfred's response to counterfeit goods flooding the Ghanaian market. A quality guaranteed brand built on decades of global knowledge.",
      },
      {
         date: "2022",
         event: "Ghana's first conduit box factory opens in Tema. 3x3 and 3x6 conduit boxes manufactured locally for the first time in the country's history.",
      },
      {
         date: "Now",
         event: "PVC Pipes and Trunking in development. The full local manufacturing vision is becoming reality, one product at a time.",
      },
   ];

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

   const founderStats = [
      { number: "40+", label: "Years in Business" },
      { number: "2010", label: "New Orient Brand Est." },
      { number: "2022", label: "Factory Est." },
      { number: "1st", label: "Conduit Box Manufacturer in Ghana" },
   ];

   return (
      <div>
         <div className="h-[25vh] lg:h-[60vh] relative bg-[url(/about2.avif)] bg-cover bg-no-repeat parallex">
            <div className="bg-black absolute w-full h-full opacity-60"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mx-auto my-auto text-center  text-white">
               <h1 className="text-white text-lg font-bold">
                  FROM TEMA TO THE WORLD · 40 YEARS OF ELECTRICAL EXCELLENCE
               </h1>
               <p className="text-lg">Built on 40 Years. Building Ghana's Future.</p>
            </div>
            <h1 className="text-6xl lg:text-8xl text-white absolute -bottom-3 lg:-bottom-5 uppercase font-bold">
               Our Story
            </h1>
         </div>
         <div className="">
            <div className="max-w-7xl mx-auto py-20 space-y-12 p-4">
               <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                  <div className="space-y-4">
                     <h1 className="text-lg uppercase font-semibold">Founder · Alfred Kofi Gyan & his wife</h1>
                     <h1 className="text-3xl font-bold">A Legacy Built Over Four Decades</h1>
                     <p className="text-xl lg:text-xl">
                        Alfred Kofi Gyan did not build Alooh Electricals overnight and he did not build it alone.
                        Together with his wife, he started in the 1980s trading car tyres in Ghana's most difficult
                        economic era.
                        <br />
                        <br />
                        A business trip to Nigeria in the early 1990s changed everything. A trader he met there told him
                        about China, its manufacturing capability and extraordinary pricing. Alfred flew to China, saw
                        the opportunity, and took it. He pivoted entirely into electrical goods, building supply
                        relationships across China, India, Turkey and Dubai. Alooh Electricals grew into one of Ghana's
                        most trusted names in electrical supply.
                        <br />
                        <br />
                        By 2010, Alfred saw a new problem: the Ghanaian market was being flooded with counterfeit
                        versions of well-known brands. His response was to create his own brand. New Orient was built on
                        the quality standards he had spent decades learning from the world's best manufacturers.
                        <br />
                        <br />
                        The plan was deliberate: launch the brand, test the market, then bring production home to Ghana.
                        In 2022, that vision became a factory. Alooh Electricals became the first company in Ghana to
                        manufacture conduit boxes locally. PVC Pipes and Trunking are in development. It is not just
                        business. It is a legacy in the making.
                     </p>
                  </div>
                  <div className="">
                     <div className="rounded-lg p-5 bg-[#061b1f]">
                        <span className="block font-serif leading-none select-none mb-2 text-white text-5xl">
                           &ldquo;
                        </span>
                        <p className="text-white italic leading-relaxed">
                           When I first travelled to China, I met ordinary people. Salesgirls, salesmen, regular workers
                           just like anyone you would find on the streets of Accra or Tema. But within 10 to 15 years,
                           those same people had built their own factories. They became manufacturers. I watched an
                           entire country transform before my own eyes and I asked myself, why not Ghana? We have the
                           workforce. We have the intelligence. We have the determination. Ghana is ready for that next
                           step. With everything I have learned over four decades in this industry, building this
                           factory is my way of saying the transformation starts here.
                        </p>
                        <span className="block font-serif leading-none select-none mb-2 text-white text-5xl rotate-180 relative">
                           &ldquo;
                        </span>
                        <div className="mt-5 mb-4 h-px bg-gray-700" />
                        <p className="font-bold text-lg text-white">Alfred Kofi Gyan</p>
                        <p className="mt-0.5 text-gray-400">Founder and Managing Director, Alooh Electricals</p>
                     </div>
                     <div className="grid grid-cols-2 gap-5 pt-5" style={{ borderTop: "1px solid #f0f0f0" }}>
                        {founderStats.map((s) => (
                           <div key={s.label}>
                              <p className="text-3xl font-bold text-primary">{s.number}</p>
                              <p className="mt-0.5">{s.label}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <section className="py-20 bg-stone-100">
               <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Our Journey</h2>
                  <div className="space-y-3 flex gap-2">
                     {timeline.map((item) => (
                        <div
                           key={item.date}
                           className="gap-5 bg-white rounded-lg border border-gray-100 p-5 space-y-4 shadow-xl shadow-stone-200/30 h-60"
                        >
                           <div className="shrink-0 pt-0.5">
                              <span className="font-bold text-sm px-2.5 py-1 rounded-sm text-white whitespace-nowrap bg-primary">
                                 {item.date}
                              </span>
                           </div>
                           <p className="leading-relaxed text-sm">{item.event}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* PILLARS */}
            <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="text-center mb-12">
                     <h2 className="text-2xl md:text-4xl font-bold mb-3">What We Stand For</h2>
                     <p className="text-xl">
                        Three commitments that guide every product we make and every relationship we build.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                     {pillars.map((p) => (
                        <div key={p.title} className="space-y-4 border border-gray-200 p-7">
                           <h3 className="font-bold text-xl">{p.title}</h3>
                           <p className="leading-relaxed">{p.body}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         </div>
         <CTASection />
      </div>
   );
}
