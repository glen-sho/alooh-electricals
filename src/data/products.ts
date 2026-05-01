// ── Constants ────────────────────────────────────────────────────
export const WA_NUMBER = "233244081474";
export const EMAIL = "glen@aloohelectricals.com";
export const PHONE = "+233 24 408 1474";
export const ADDRESS = "4870 Sparrow Close, Tema Industrial Area, Ghana";
export const HOURS = "Mon\u2013Fri 8am\u20136pm";
export const SLOGAN = "Built on 40 Years. Building Ghana\u2019s Future.";
export const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Alooh Electricals, I'd like to make an enquiry.")}`;

export type DisplayProductsType = {
   id: number;
   name: string;
   category: string;
   description: string;
   badge: string;
   madeInGhana: boolean;
   comingSoon: boolean;
   image: string;
};

export function getWALink({ productName }: { productName: string }) {
   const msg = encodeURIComponent(`Hi, I'm interested in ${productName}, please send me a quote.`);
   return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export function getEmailLink(productName: { productName: string }) {
   const subject = encodeURIComponent(`Quote Enquiry: ${productName}`);
   const body = encodeURIComponent(
      `Hello,\n\nI am interested in the ${productName} and would like a quote.\n\nThank you.`,
   );
   return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export const products: DisplayProductsType[] = [
   {
      id: 1,
      name: "1 Gang Switch",
      category: "Switches",
      description: "Single gang switch for standard wall installation",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 2,
      name: "2 Gang Switch",
      category: "Switches",
      description: "Double gang switch for multi-circuit control",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 3,
      name: "3 Gang Switch",
      category: "Switches",
      description: "Three gang switch — New Orient brand, quality guaranteed",
      badge: "New Arrival",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 4,
      name: "Air Conditioner Switch",
      category: "Switches",
      description: "Heavy duty switch rated for air conditioning units",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1590001158193-7903d8e70bf1?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 5,
      name: "20W LED Bulb",
      category: "Lighting",
      description: "Energy-saving 20W LED bulb, long life performance",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 6,
      name: "30W LED Bulb",
      category: "Lighting",
      description: "High output 30W LED bulb for commercial spaces",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 7,
      name: "LED Panel Surface Lights",
      category: "Lighting",
      description: "Slim surface-mounted LED panel for offices and homes",
      badge: "Top Rated",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 8,
      name: "Lampholder",
      category: "Lighting",
      description: "Standard lampholder for pendant and ceiling fittings",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
   },
   // ── MADE IN GHANA (only these two) ───────────────────────────
   {
      id: 9,
      name: "3x3 Conduit Box",
      category: "Conduit & PVC",
      description: "Manufactured at our Tema factory — Ghana's first locally made conduit box",
      badge: "Made in Ghana",
      madeInGhana: true,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 10,
      name: "3x6 Conduit Box",
      category: "Conduit & PVC",
      description: "Larger conduit box manufactured at our Tema facility",
      badge: "Made in Ghana",
      madeInGhana: true,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
   },
   // ── COMING SOON (not yet in production) ──────────────────────
   {
      id: 11,
      name: "PVC Pipe",
      category: "Conduit & PVC",
      description: "Coming soon — to be manufactured at our Tema factory",
      badge: "Coming Soon",
      madeInGhana: false,
      comingSoon: true,
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 12,
      name: "PVC Trunking",
      category: "Conduit & PVC",
      description: "Coming soon — locally manufactured cable management trunking",
      badge: "Coming Soon",
      madeInGhana: false,
      comingSoon: true,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
   },
   // ── Distribution Boards ───────────────────────────────────────
   {
      id: 13,
      name: "4 Way Single Phase",
      category: "Distribution Boards",
      description: "4-way single phase consumer unit for residential use",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 14,
      name: "4 Way TPN Board",
      category: "Distribution Boards",
      description: "Triple pole and neutral distribution board, 4-way",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 15,
      name: "6 Way TPN Board",
      category: "Distribution Boards",
      description: "6-way TPN board for commercial and industrial use",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 16,
      name: "8 Way TPN Board",
      category: "Distribution Boards",
      description: "8-way TPN distribution board for larger installations",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 17,
      name: "12 Way TPN Board",
      category: "Distribution Boards",
      description: "12-way TPN board for industrial and large commercial premises",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 18,
      name: "Breaker",
      category: "Distribution Boards",
      description: "Circuit breaker for overload and short circuit protection",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   // ── Conduit (distributed, not manufactured) ───────────────────
   {
      id: 19,
      name: "3-Way Circular Box",
      category: "Conduit & PVC",
      description: "3-way circular junction box for conduit installations",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 20,
      name: "Pattress Box",
      category: "Conduit & PVC",
      description: "Surface pattress box for switch and socket mounting",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?q=80&w=800&auto=format&fit=crop",
   },
   // ── Switches continued ────────────────────────────────────────
   {
      id: 21,
      name: "Double Socket",
      category: "Switches",
      description: "Double switched socket outlet for residential and office use",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
   },
   // ── Cable & Wire ──────────────────────────────────────────────
   {
      id: 22,
      name: "Coaxial Cable",
      category: "Cable & Wire",
      description: "High quality coaxial cable for TV and signal distribution",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 23,
      name: "Copper Wire",
      category: "Cable & Wire",
      description: "Pure copper electrical wire, available in multiple gauges",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
   },
   // ── Appliances ────────────────────────────────────────────────
   {
      id: 24,
      name: "Antenna",
      category: "Appliances",
      description: "Indoor/outdoor TV antenna for clear signal reception",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 25,
      name: "Bulb",
      category: "Lighting",
      description: "General purpose energy-efficient bulb for everyday use",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 26,
      name: "2 Burner Stove",
      category: "Appliances",
      description: "Electric 2-burner stove for household cooking",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 27,
      name: "Fan",
      category: "Appliances",
      description: "Energy-efficient ceiling and standing fans for home and office",
      badge: "Popular",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
   },
   {
      id: 28,
      name: "Multi-Socket",
      category: "Switches",
      description: "Multi-way extension socket for home and office use",
      badge: "Standard",
      madeInGhana: false,
      comingSoon: false,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
   },
];

export const categories = [
   "All",
   "Lighting",
   "Switches",
   "Conduit & PVC",
   "Distribution Boards",
   "Cable & Wire",
   "Appliances",
];
