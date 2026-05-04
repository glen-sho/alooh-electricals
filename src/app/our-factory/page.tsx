import Stats from "@/components/Stats";
import { CheckCircle, Mail, MessageCircle, Package, Search, Settings, Truck, Zap } from "lucide-react";
import { EMAIL } from "@/data/products";

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
         <div className="relative parallex bg-mist-200 py-12 px-4 md:px-0">
            <div className="mx-auto text-center space-y-4">
               <span className="text-sm font-bold uppercase tracking-widest text-black">
                  Home of the New Orient Brand &nbsp;&middot;&nbsp; Tema, Ghana
               </span>
               <h1 className="text-3xl md:text-4xl leading-tight font-light">
                  Where New Orient Is Made.{" "}
                  <span className="text-primary font-bold">Built Right Here in Tema, Ghana.</span>
               </h1>
               <Stats position="center" />
            </div>
         </div>

         <div className="max-w-6xl mx-auto pt-14 pb-20 text-center space-y-20 px-4 md:px-0">
            <p className="text-xl font-medium">
               Opened in 2022, our Tema facility is the home of the New Orient brand. Every conduit box that carries the
               New Orient name was punched, formed and quality checked at this factory. By our team. On our machine. In
               Ghana. We were the first. We will not be the last.
            </p>

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
               <p className="text-3xl font-bold">What We Make Here</p>
               <p className="text-lg max-w-3xl mx-auto">
                  Every product below is manufactured at our Tema factory under the New Orient brand. More products are
                  in development.
               </p>
               <div className="bg-primary p-4 text-white max-w-4xl mx-auto">
                  <p>
                     All products in this section carry the New Orient brand and are manufactured by Alooh Electricals
                     in Tema, Ghana
                  </p>
               </div>
            </div>
            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Our Production Machine</p>
               <h1 className="text-3xl font-bold">One Machine. Making History.</h1>
               <p className="text-lg">
                  Our factory runs on one industrial punch press machine. Cream bodied, blue framed, with the yellow
                  safety beam that has become part of our daily rhythm. It stamps, forms and punches every New Orient
                  conduit box that leaves this building.
               </p>
               <p className="text-lg">
                  It is not the biggest machine in the world. But it is ours. And it is making something that has never
                  been made in Ghana before.
               </p>
               <ul className="flex flex-wrap justify-evenly gap-4 mt-8">
                  {machineBullets.map((b) => (
                     <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                        <span className="text-gray-500">{b}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Made in Ghana. Ready in Ghana.</p>
               <h1 className="text-3xl font-bold"> Bridging the Gap</h1>
               <p className="text-lg">
                  When you order a New Orient conduit box, it was made here in Tema. Not shipped from overseas. No
                  import delays. No inflated foreign prices. No waiting weeks at the port. Just quality made in Ghana,
                  ready when you need it.
               </p>
               <p className="text-lg">
                  For over 40 years, Alfred Kofi Gyan watched Ghana pay more to import goods it could make itself. This
                  factory is the answer to that problem.
               </p>
               <ul className="flex flex-wrap justify-evenly gap-4 mt-8">
                  {bridgingBullets.map((b) => (
                     <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                        <span className="text-gray-500">{b}</span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-px w-full bg-mist-300 my-12" />

            <div className="space-y-4">
               <p className="uppercase font-bold text-sm text-primary">Our People</p>
               <h1 className="text-3xl font-bold">Our People Make New Orient</h1>
               <p className="text-lg">
                  Behind every New Orient conduit box is a team. Ghanaian workers learning, growing and building skills
                  that Ghana’s manufacturing industry has never had before.
               </p>
               <p className="text-lg">
                  Alongside them, specialist Chinese technical engineers who brought the knowledge to set up, calibrate
                  and run the machine to the precision that New Orient quality demands. This is what technology transfer
                  looks like in practice. Skills coming to Ghana and staying here.
               </p>
               <ul className="flex flex-wrap justify-evenly gap-4 mt-8">
                  {teamStatItems.map((b) => (
                     <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={18} className="shrink-0 mt-0.5 text-primary" />
                        <span className="text-gray-500">{b}</span>
                     </li>
                  ))}
               </ul>
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

            <section className="py-20">
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
                        <div className="flex flex-wrap gap-3 pt-1">
                           <a
                              href={""}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ backgroundColor: "#16a34a" }}
                              className="flex items-center gap-2 text-white px-6 py-3.5 rounded-[7px] text-sm font-medium hover:opacity-90 transition-opacity"
                           >
                              <MessageCircle size={15} /> WhatsApp Us Now
                           </a>
                           <a
                              href={`mailto:${EMAIL}?subject=${encodeURIComponent("New Orient Partnership / Distribution Enquiry")}`}
                              className="flex items-center gap-2 px-6 py-3.5 rounded-[7px] text-sm font-medium border border-primary text-primary"
                           >
                              <Mail size={15} /> Email Glen
                           </a>
                        </div>
                     </div>

                     <div className="overflow-hidden aspect-4/3 bg-gray-800">
                        <img
                           src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                           alt="Grow with New Orient — partner with Alooh Electricals"
                           className="w-full h-full object-cover opacity-50"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}
