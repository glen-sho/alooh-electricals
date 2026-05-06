import Stats from "@/components/Stats";
import { ArrowRight, CheckCircle, Mail, MessageCircle, Package, Search, Settings, Truck, Zap } from "lucide-react";
import { EMAIL } from "@/data/products";
import WhatsAppButton from "@/components/whatsappButton";

const machineBullets = [
   "Industrial punch press, commissioned 2022",
   "Operated by our trained Ghanaian team",
   "Supervised by specialist technical engineers",
   "Quality checked at every production run",
   "Raw material: galvanised steel coil, fed directly into the press",
];

const bridgingBullets = [
   "No import delays. Stock is already in Ghana.",
   "Lower costs. No shipping, no customs, no middlemen.",
   "Faster delivery to Ghanaian contractors and retailers",
   "Quality controlled at every stage of production",
   "Eco-friendly. Reduced carbon footprint vs imported goods.",
];

const teamStatItems = [
   "Ghanaian workforce trained on-site",
   "Technical engineers from specialist partners",
   "Every box quality checked before leaving",
];

const processSteps = [
   {
      icon: Package,
      title: "Raw Material",
      desc: "Galvanised steel coil arrives at our Tema factory, sourced to New Orient quality specifications.",
   },
   {
      icon: Settings,
      title: "Feeding",
      desc: "The steel coil is loaded onto our feeding machine and fed precisely into the punch press.",
   },
   {
      icon: Zap,
      title: "Stamping & Forming",
      desc: "Our industrial punch press stamps, cuts and forms the flat steel into conduit box shape in one operation.",
   },
   {
      icon: Search,
      title: "Quality Check",
      desc: "Every batch is inspected by our team. Dimensions, finish and strength all checked against New Orient standards.",
   },
   {
      icon: Truck,
      title: "Packaging & Dispatch",
      desc: "Approved boxes are packed into New Orient branded cartons and prepared for distribution across Ghana and beyond.",
   },
];

export default function OurFactory() {
   return (
      <div>
         <section className="py-16 bg-mist-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
               <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div className="space-y-7">
                     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-primary border p-1">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                        <span className="text-[11px] font-bold text-primary uppercase tracking-widest">
                           Home of the New Orient Brand &nbsp;&middot;&nbsp; Tema, Ghana
                        </span>
                     </div>

                     <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Where New Orient Is Made. <span className="">Built Right Here in Tema, Ghana.</span>
                     </h1>

                     <p className="text-sm md:text-base leading-relaxed max-w-xl">
                        Opened in 2022, our Tema facility is the home of the New Orient brand. Every conduit box that
                        carries the New Orient name was punched, formed and quality checked at this factory. By our
                        team. On our machine. In Ghana. We were the first. We will not be the last.
                     </p>
                     <Stats position="center" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div className=" overflow-hidden aspect-3/4">
                        <img
                           src="/fact1.png"
                           alt="Alooh Electricals factory — New Orient punch press in operation, Tema Ghana"
                           className="w-full h-full object-cover opacity-90"
                        />
                     </div>
                     <div className=" overflow-hidden aspect-3/4 mt-8">
                        <img
                           src="/fact2.png"
                           alt="New Orient production at Alooh Electricals Tema factory"
                           className="w-full h-full object-cover opacity-90"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="max-w-6xl mx-auto pt-14 pb-20 text-center space-y-20 px-4 md:px-0">
            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">About the New Orient Brand</p>
               <h1 className="text-3xl font-bold">Our Brand. Our Factory. Our Ghana.</h1>
               <p className="text-lg">
                  New Orient is not an imported brand. It is Alooh Electricals’ own. Created in 2010 to give Ghanaians a
                  quality guaranteed alternative to the counterfeit goods flooding the market, New Orient was built on
                  four decades of knowledge Alfred Kofi Gyan gained sourcing from the world’s best manufacturers.
               </p>
               <p className="text-lg">
                  In 2022, we took the next step. We built our own factory in Tema to manufacture New Orient products
                  right here in Ghana. What started as a brand became a production line. That production line is right
                  here.
               </p>
               <div className=" text-sm text-gray-500" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="font-medium">Alooh Electricals</span> &middot; the company &middot;{" "}
                  <span className="font-medium text-primary">New Orient</span> &middot; the brand made here
               </div>
            </div>
            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Our Production Machine</p>
               <h1 className="text-3xl font-bold">One Machine. Making History.</h1>
               <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <img
                     src="/machine2.png"
                     alt="Alooh Electricals factory — New Orient punch press in operation, Tema Ghana"
                     className="w-full h-110 object-cover opacity-85"
                  />
                  <div className="">
                     <p className="text-lg text-left">
                        Our factory runs on one industrial punch press machine. Cream bodied, blue framed, with the
                        yellow safety beam that has become part of our daily rhythm. It stamps, forms and punches every
                        New Orient conduit box that leaves this building.
                     </p>
                     <br />
                     <p className="text-lg text-left">
                        It is not the biggest machine in the world. But it is ours. And it is making something that has
                        never been made in Ghana before.
                     </p>
                     <ul className="mt-8 space-y-2">
                        {machineBullets.map((b) => (
                           <li key={b} className="flex items-start gap-3">
                              <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                              <span className="text-gray-500">{b}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Made in Ghana. Ready in Ghana.</p>
               <h1 className="text-3xl font-bold"> Bridging the Gap</h1>
               <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div className="">
                     <p className="text-lg text-left">
                        When you order a New Orient conduit box, it was made here in Tema. Not shipped from overseas. No
                        import delays. No inflated foreign prices. No waiting weeks at the port. Just quality made in
                        Ghana, ready when you need it.
                     </p>
                     <br />
                     <p className="text-lg text-left">
                        For over 40 years, Alfred Kofi Gyan watched Ghana pay more to import goods it could make itself.
                        This factory is the answer to that problem.
                     </p>
                     <ul className="mt-8 space-y-2">
                        {bridgingBullets.map((b) => (
                           <li key={b} className="flex items-start gap-3">
                              <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                              <span className="text-gray-500">{b}</span>
                           </li>
                        ))}
                     </ul>{" "}
                  </div>
                  <img
                     src="/gap.png"
                     alt="Alooh Electricals factory — New Orient punch press in operation, Tema Ghana"
                     className="w-full h-110 object-cover opacity-85"
                  />
               </div>
            </div>

            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Our People</p>
               <h1 className="text-3xl font-bold">Our People Make New Orient</h1>
               <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <img
                     src="/factory2.jpeg"
                     alt="Alooh Electricals factory — New Orient punch press in operation, Tema Ghana"
                     className="w-full h-110 object-cover opacity-85"
                  />
                  <div className="">
                     <p className="text-lg text-left">
                        Behind every New Orient conduit box is a team. Ghanaian workers learning, growing and building
                        skills that Ghana’s manufacturing industry has never had before.
                     </p>
                     <br />
                     <p className="text-lg text-left">
                        Alongside them, specialist Chinese technical engineers who brought the knowledge to set up,
                        calibrate and run the machine to the precision that New Orient quality demands. This is what
                        technology transfer looks like in practice. Skills coming to Ghana and staying here.
                     </p>
                     <ul className="mt-8 space-y-2">
                        {teamStatItems.map((b) => (
                           <li key={b} className="flex items-start gap-3">
                              <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                              <span className="text-gray-500">{b}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <h1 className="text-3xl font-bold">How a New Orient Conduit Box Is Made</h1>
               <p className="text-lg">
                  From raw steel coil to finished product. Every step happens at our Tema factory.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
                  {processSteps.map((step, i) => {
                     const Icon = step.icon;
                     return (
                        <div key={step.title} className="flex flex-col items-center text-center">
                           <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-primary">
                              <Icon size={18} className="text-white" />
                           </div>
                           <div className="bg-white p-5 flex flex-col gap-2 w-full">
                              <span className="text-xs font-bold uppercase tracking-widest">Step {i + 1}</span>
                              <h3 className="font-bold text-gray-900">{step.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className="h-px w-full bg-mist-300 my-12" />

            <section className="">
               <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="space-y-6">
                        <div>
                           <p className="text-sm font-bold uppercase tracking-widest mb-3 text-primary">
                              Distributors, Retailers &amp; Partners
                           </p>
                           <h2 className="text-2xl md:text-3xl font-bold leading-snug">Grow With New Orient</h2>
                        </div>
                        <p className="text-md leading-relaxed">
                           We are expanding the New Orient product range. PVC Pipes and Trunking are in development and
                           more products are planned. If you are a distributor, retailer or contractor interested in
                           stocking New Orient products, or a partner or investor who wants to be part of building
                           Ghana&rsquo;s manufacturing future, we want to hear from you.
                        </p>
                        <div className="flex  gap-3 pt-1 justify-center w-fit mx-auto">
                           <WhatsAppButton />
                           <a
                              href={`mailto:${EMAIL}?subject=${encodeURIComponent("New Orient Partnership / Distribution Enquiry")}`}
                              className="flex items-center gap-2 px-6 py-3.5 text-nowrap rounded-[7px] text-sm font-medium border border-primary text-primary"
                           >
                              <Mail size={15} /> Email Glen
                           </a>
                        </div>
                     </div>

                     <div className="overflow-hidden aspect-4/3 bg-gray-800">
                        <img
                           src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                           alt="Grow with New Orient — partner with Alooh Electricals"
                           className="w-full h-full object-cover opacity-85"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}
