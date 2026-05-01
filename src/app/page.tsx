import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
   return (
      <div className="">
         <Hero />
         <Products />
         <Banner />
         <CTASection />
      </div>
   );
}
