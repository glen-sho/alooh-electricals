// ── Constants ────────────────────────────────────────────────────
export const WA_NUMBER = "233244081474";
export const EMAIL = "glen@aloohelectricals.com";
export const PHONE = "+233 24 408 1474";
export const ADDRESS = "4870 Sparrow Close, Tema Industrial Area, Ghana";
export const HOURS = "Mon\u2013Fri 8am\u20136pm";
export const SLOGAN = "Built on 40 Years. Building Ghana\u2019s Future.";
export const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Alooh Electricals, I'd like to make an enquiry.")}`;

export type DisplayProductsType = {
  id: string;
  name: string;
  category: Category;
  description: string;
  brand: Brand;
  images: string[];
};

export function getWALink({ productName }: { productName: string }) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in ${productName}, please send me a quote.`,
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export function getEmailLink(productName: { productName: string }) {
  const subject = encodeURIComponent(`Quote Enquiry: ${productName}`);
  const body = encodeURIComponent(
    `Hello,\n\nI am interested in the ${productName} and would like a quote.\n\nThank you.`,
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export const categories = {
  trunkingConduits: "Trunking & Conduits",
  fans: "Fans",
  lighting: "Lighting",
  switchesSockets: "Switches & Sockets",
  electricalAccessories: "Electrical Accessories",
  cablesWiring: "Cables & Wiring",
  circuitProtectionDistribution: "Circuit Protection & Distribution",
} as const;

export const brands = {
  generic: "Generic",
  interplast: "Interplast",
  neworient: "Neworient",
  crompton: "Crompton",
  turkey: "Turkey",
  rr: "RR",
  havells: "Havells",
  etechin: "Etechin",
} as const;

export const products: DisplayProductsType[] = [
  {
    id: "f9362f39-8bd6-4c56-a0bb-4d9e2ec01ee6",
    name: "16X16 TRUNKING (STICKER)",
    images: ["16-x-16-trunking-sticker.jpg"],
    brand: brands.generic,
    description:
      "Durable 16x16mm PVC mini trunking with adhesive backing for easy, clean surface-mounted cable management. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "28e59bc7-3283-4e21-866b-2bfbe592bf91",
    name: "16X16 TRUNKING",
    images: ["16-x-16-trunking.jpg"],
    brand: brands.generic,
    description:
      "Standard 16x16mm PVC mini trunking for organized and protected surface wiring. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "f3b20811-15da-45da-bcc3-24c60577d104",
    name: "16X25 TRUNKING (STICKER)",
    images: ["16-x-25-trunking-sticker.jpg"],
    brand: brands.generic,
    description:
      "High-quality PVC trunking with self-adhesive sticker for quick installation and tidy cable routing. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "886123bf-0537-4cb1-8829-1f3f547be5b0",
    name: "16X25 TRUNKING",
    images: ["16x25-trunking.webp"],
    brand: brands.generic,
    description:
      "Professional grade 16x25mm PVC trunking designed for secure and aesthetic cable management. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "8b036232-37d2-4693-9bfe-a62934c392d8",
    name: "25X40 TRUNKING",
    images: ["25X40-trunking-pipe.png"],
    brand: brands.generic,
    description:
      "Medium-sized 25x40mm PVC cable trunking, perfect for housing multiple wires. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "c01f80f4-9422-4c50-96dd-11afedd0e8a5",
    name: "50X75 TRUNKING",
    images: ["50-x-75-trunking.jpg"],
    brand: brands.generic,
    description:
      "Large 50x75mm PVC cable ducting for heavy-duty wiring management. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "666b4365-6b41-4cf0-8bb6-cb3302096d6c",
    name: "50X100 TRUNKING",
    images: ["50-x-100-trunking.webp"],
    brand: brands.generic,
    description:
      "Extra-large 50x100mm PVC trunking for organized routing of high-volume cabling systems. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "028f18a7-9c8f-476c-ba1c-53a578beb627",
    name: "INTERPLAST PVC PIPE",
    images: ["interplast-pvc-pipe.jpg"],
    brand: brands.interplast,
    description:
      "High-grade Interplast PVC electrical conduit pipe for superior protection of wiring. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "6f5ca523-5e63-4e53-83c5-a9de40285aae",
    name: "NEWORIENT PVC PIPE",
    images: ["neworient-pvc-pipe.png"],
    brand: brands.neworient,
    description:
      "Reliable Neworient PVC conduit pipe designed for durable electrical insulation. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "6c97057d-fc8c-48dd-abd4-563f44519f80",
    name: "NEWORIENT STANDING FAN",
    images: ["neworient-standing-fan.png"],
    brand: brands.neworient,
    description:
      "Professional Neworient standing fan, 5-blade high-velocity design with 4-speed push-button control. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.fans,
  },
  {
    id: "21de5e87-ba85-4af0-82d2-0faafb82993a",
    name: "NEWORIENT CEILING FAN LONG BLADE",
    images: ["neworient-ceiling-fan.jpg"],
    brand: brands.neworient,
    description:
      "Energy-efficient Neworient ceiling fan featuring long blades for wide-area air circulation. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.fans,
  },
  {
    id: "d7b2f00a-6396-4cfe-8a87-fd2d771796eb",
    name: "NEWORIENT CEILING FAN MEDIUM BLADE",
    images: ["neworient-ceiling-fan.jpg"],
    brand: brands.neworient,
    description:
      "Sleek Neworient ceiling fan with medium-sized blades, ideal for standard-sized rooms. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.fans,
  },
  {
    id: "69230839-aa8c-4514-9722-9a851f91b1ca",
    name: "30WATT BULB",
    images: ["30-w-led-bulb.jpg"],
    brand: brands.neworient,
    description:
      "Neworient 30W high-power LED bulb, AC90-265V wide voltage range, 6500K bright White light. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "d4cba3ae-c43f-4ac8-a629-7d06919855cc",
    name: "50 WATT BULB",
    images: ["50-watt-led-bulb.jpg"],
    brand: brands.generic,
    description:
      "Powerful 50W LED bulb for industrial-scale brightness, AC90-265V wide voltage support. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "bbeb9e54-57bc-416a-8963-ee2a70f63cd6",
    name: "20 WATT BULB",
    images: ["20-w-led-bulb.jpg"],
    brand: brands.neworient,
    description:
      "Efficient Neworient 20W LED bulb, AC90-265V, Cool White illumination. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "581dde3d-3e72-435a-917e-bd2716bdefd9",
    name: "12 WATT BULB",
    images: ["12-watt-led-bulb.jpg"],
    brand: brands.generic,
    description:
      "Standard 12W LED bulb, energy-saving design with long lifespan. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "5bb3c624-859e-4673-9fe8-2f3b0589c198",
    name: "LED 6 WATT BULB",
    images: ["6-watt-led-bulb.png"],
    brand: brands.generic,
    description:
      "Eco-friendly 6W LED bulb providing crisp light while significantly reducing costs. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "8d8b233f-8cda-4b90-9f49-596ac3da322c",
    name: "40 WATT BULB",
    images: ["40-watt-led-bulb.png"],
    brand: brands.generic,
    description:
      "High-output 40W bulb suitable for commercial settings or large rooms. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "b6994e0d-ce07-4203-bb78-8098ab650597",
    name: "15 WATT BULB (SCREW)",
    images: ["15-watt-screw-bulb.png"],
    brand: brands.generic,
    description:
      "15W screw-type (E27) energy-saving bulb for easy installation. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "85c90aac-3577-49dd-b319-2d8380cdd831",
    name: "10 WATT BULB (SCREW)",
    images: ["10-watt-screw-bulb.png"],
    brand: brands.generic,
    description:
      "10W screw-type (E27) LED bulb, ideal for lamps and smaller fixtures. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "6d4ce85f-b531-452a-afb2-5a143daa4b95",
    name: "LED 18 WATT PANEL",
    images: ["18-watt-led-panel.jpg"],
    brand: brands.generic,
    description:
      "Slim and modern 18W LED recessed ceiling panel offering uniform illumination. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "b2ae61a1-e96d-4642-9e72-4d8a9ca68f99",
    name: "LED 18 WATT PANEL MULTI B/W",
    images: ["18-watt-led-panel-multi.jpg"],
    brand: brands.generic,
    description:
      "Versatile 18W LED panel with multi-color (Black/White) trim options. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "7c389aa0-fee5-4042-95bf-0d16421fc62e",
    name: "LED 12 WATT PANEL",
    images: ["12w-led-panel.jpg"],
    brand: brands.generic,
    description:
      "Compact 12W LED ceiling panel, perfect for hallways and kitchens. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "04565437-2c68-483d-b08f-c0556df51e73",
    name: "LED 24 WATT PANEL",
    images: ["24w-led-panel.jpg"],
    brand: brands.generic,
    description:
      "High-performance 24W LED panel for large rooms, providing even light distribution. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "79a1a4a5-c116-4a26-979b-24357a186549",
    name: "NEWORIENT DOUBLE SOCKET",
    images: [
      "neworient-double-socket-white.jpg",
      "neworient-double-socket-ash.jpg",
    ],
    brand: brands.neworient,
    description:
      "Neworient double 13A socket with dual red power indicators. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "2d0464b1-8950-475d-ae20-0615cfb002c8",
    name: "NEWORIENT SINGLE SOCKET ASH",
    images: ["single-socket-white.jpg", "single-socket-ash.jpg"],
    brand: brands.neworient,
    description:
      "Sleek single 13A socket with red power indicator. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "bbc8066d-cd16-4da4-917d-09b0bf25f3af",
    name: "NEWORIENT 1 GANG 1 WAY",
    images: ["1-gang-switch-ash.jpg", "1-gang-switch-white.jpg"],
    brand: brands.neworient,
    description:
      "Modern Neworient 1-gang light switch with a horizontal green LED status indicator. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "aeb11383-6e39-4248-81c6-c6dcd507db60",
    name: "NEWORIENT 1 GANG 2 WAY",
    images: ["1-gang-switch-white.jpg", "1-gang-switch-ash.jpg"],
    brand: brands.neworient,
    description:
      "1-gang 2-way switch with LED indicator. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "cd3309b9-7796-4e0d-901a-f0c6faa8d6ce",
    name: "NEWORIENT 2 GANG 2 WAY",
    images: ["2-gang-switch-ash.jpg", "2-gang-switch-white.jpg"],
    brand: brands.neworient,
    description:
      "Double-gang 2-way light switch with LED indicators. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "b087b15f-2baf-4a03-8369-782df27da9a9",
    name: "NEWORIENT 3 GANG 2 WAY",
    images: ["3-gang-switch-white.jpg", "3-gang-switch-ash.jpg"],
    brand: brands.neworient,
    description:
      "Triple-gang 2-way switch with triple LED indicators. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "9d1ffd7d-8150-4c46-a5ab-a12813451464",
    name: "NEWORIENT HEATER",
    images: ["heater.jpg", "heater-silver.jpg"],
    brand: brands.neworient,
    description:
      "High-current Neworient heater switch for sophisticated, high-power control. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "de9cb3d0-3d2e-4bb8-901f-2b669fae9528",
    name: "NEWORIENT COOKER UNIT",
    images: ["cooker-unit.jpg"],
    brand: brands.neworient,
    description:
      "Neworient 45A heavy-duty Cooker Unit, includes a high-capacity switch and 13A socket. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "95e25fb2-006e-45e7-9016-2c5e272a93a7",
    name: "NEWORIENT TV SOCKET",
    images: ["tv-switch-white.jpg", "tv-switch-ash.jpg"],
    brand: brands.neworient,
    description:
      "TV coaxial socket for professional media connectivity. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "31a0ce93-b440-471c-9807-2b78c4bcc0a3",
    name: "EARTHROD COPPER",
    images: ["earth-rod-copper.webp"],
    brand: brands.generic,
    description:
      "Solid copper earth rod for superior grounding and lightning protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "031fc73c-5ca2-44c5-b66b-9d528fc16880",
    name: "EARTHROD NORMAL",
    images: ["earth-rod.jpg"],
    brand: brands.generic,
    description:
      "Standard galvanized earth rod providing essential electrical grounding and safety. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "1f65e623-9a9c-4dff-a083-3c9d3fb002f0",
    name: "CROMPTON FAN",
    images: ["crompton-fan.webp"],
    brand: brands.crompton,
    description:
      "High-performance Crompton fan known for its durability and powerful airflow. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.fans,
  },
  {
    id: "77898490-3d29-4d04-aeeb-8ef1c74048fa",
    name: "LAMPHOLDER",
    images: ["lamp-holder.jpg"],
    brand: brands.generic,
    description:
      "Durable white plastic batten lampholder, heat-resistant design. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "b3f6868b-8a7a-4ccc-8dc3-eeb648aff4b7",
    name: "13A PLUG",
    images: ["13a-plug.webp"],
    brand: brands.generic,
    description:
      "Standard 13A fused electrical plug top, essential for powering appliances safely. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.switchesSockets,
  },
  {
    id: "831c76aa-d5eb-42e6-a42a-fb4ca2a74992",
    name: "COAXIAL CABLE",
    images: ["coaxial-cable.jpg"],
    brand: brands.neworient,
    description:
      "Neworient RG6U White Coaxial Cable, 75 Ohms, 80 Yards, ideal for satellite. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "e512835c-65c1-460e-80e0-1dfe4af2108d",
    name: "COAXIAL CABLE (HD COPPER)",
    images: ["coaxial-cable-hd.jpg"],
    brand: brands.neworient,
    description:
      "Premium Neworient RG-6 HD Black Coaxial Cable, 100 Yards, 96% coverage. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "35d712ec-fa5d-4bd8-8255-8b76dacddf1c",
    name: "1.5 MM CABLE TURKEY",
    images: [],
    brand: brands.turkey,
    description:
      "High-conductivity 1.5mm copper cable (Turkey standard) for lighting circuits. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "90553eba-bfc1-4d5e-8f5d-4fd90811496b",
    name: "2.5 MM CABLE TURKEY",
    images: ["2.5-mm-cable.jpg"],
    brand: brands.turkey,
    description:
      "Premium 2.5mm electrical cable (Turkey standard), ideal for power sockets. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "90e4f72a-2bb6-4473-a1e8-dd0f77b9e500",
    name: "4MM CABLE TURKEY",
    images: ["4mm-cable.jpg"],
    brand: brands.turkey,
    description:
      "Heavy-duty 4mm copper cable (Turkey standard) designed for high-power appliances. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "510194d3-861f-4006-a79f-a567d6c445fa",
    name: "10MM CABLE TURKEY",
    images: ["10mm-cable.jpg"],
    brand: brands.turkey,
    description:
      "Thick 10mm Turkey standard copper cable for main power feeds. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "75709947-348a-4d14-90a4-e973557e57df",
    name: "16MM CABLE TURKEY",
    images: ["16-mm-cable.jpg"],
    brand: brands.turkey,
    description:
      "Extra-thick 16mm Turkey standard cable for primary electrical distribution. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "421ab49b-f462-44eb-b47d-cebf46430735",
    name: "1.5MM CABLE RR",
    images: ["1.5mm-cable-rr.jpg"],
    brand: brands.rr,
    description:
      "Top-quality 1.5mm RR brand copper cable, engineered for safety. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "2e415347-e58f-47b0-afaf-3cd84a2a2aec",
    name: "2.5 MM CABLE RR",
    images: ["2.5mm-cable-rr.jpg"],
    brand: brands.rr,
    description:
      "Durable 2.5mm RR brand electrical cable, perfect for residential power. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "095ae269-196e-462d-b4df-ba5c32fbf953",
    name: "4MM CABLE RR",
    images: ["4mm-cable-rr.jpg"],
    brand: brands.rr,
    description:
      "High-capacity 4mm RR brand copper cable for demanding electrical circuits. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "104ec013-07e6-44b8-9521-c7242d0cffb3",
    name: "10 MM CABLE RR",
    images: ["10mm-cable-rr.jpg"],
    brand: brands.rr,
    description:
      "Heavy-duty 10mm RR brand cable for main service entries. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "54477838-6e72-46c3-a6a7-cf324a570482",
    name: "16 MM RR",
    images: ["16mm-cable-rr.jpg"],
    brand: brands.rr,
    description:
      "Industrial grade 16mm RR brand copper cable for heavy-duty power systems. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "eab36ea1-9af5-4da0-95b4-4c4ae0b99576",
    name: "CHANGE OVER 100A HAVELLS",
    images: ["havells-change-over-100a.jpg"],
    brand: brands.havells,
    description:
      "Reliable 100A Havells changeover switch for seamless switching between sources. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "90417bef-bb09-4e33-bd26-cb7452dc3985",
    name: "CHANGE OVER 63A HAVELLS",
    images: ["havells-change-over-63a.webp"],
    brand: brands.havells,
    description:
      "High-quality 63A Havells changeover switch for managing dual power supplies. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "44878abe-6c18-479f-912a-962764b2b5b1",
    name: "CHANGE OVER 32A HAVELLS",
    images: ["havells-change-over-32a.jpg"],
    brand: brands.havells,
    description:
      "Compact 32A Havells changeover switch, perfect for residential backup. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "45daa23f-f5bf-471a-bf31-1cca35f69c87",
    name: "12 WAY 3PHASE HAVELLS",
    images: ["12-way-tpn.jpg"],
    brand: brands.havells,
    description:
      "12-Way 3-Phase Havells distribution board for organized circuit management. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "a3cdc8eb-fabf-4d03-81a4-0d7acab7d724",
    name: "12 WAY SINGLE PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1aQaagqYV5f7jFmjuJQ9Jl9zbSNeqw_q7/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "2-Way single-phase Havells consumer unit, ideal for small shops. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "ad8a617a-43df-42b8-a73b-5fad70ba1c63",
    name: "4 WAY 3 PHASE HAVELLS",
    images: ["4-way-tpn.webp"],
    brand: brands.havells,
    description:
      "4-Way 3-Phase Havells distribution box for balanced industrial distribution. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "c6dd8c1b-2cdc-4f04-b31e-0146c1750e03",
    name: "4 WAYS SINGLE PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1biMYBUOP0BknPcwI2XK7naKDLYSDhl6y/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "Standard 4-way single-phase Havells consumer unit for household protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "8ae55dcb-51d2-4f75-834a-451ab857ed82",
    name: "6 WAYS 3 PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1ojyTm3vowwcvWcINpLiBifetumakFBSS/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "6-Way 3-Phase Havells DB board, offering robust circuit management. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "784734e4-cd44-4301-81df-8ab98d243b7f",
    name: "6 WAYS SINGLE PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1Jm40koU0MyXWMy_t5wwLR-fZarmIpzzF/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "Reliable 6-way single-phase Havells consumer unit for residential safety. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "71899854-9fcd-4f5f-b49f-27cde9487243",
    name: "8 WAYS 3 PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1ojyTm3vowwcvWcINpLiBifetumakFBSS/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "Large 8-Way 3-Phase Havells distribution board for complex infrastructure. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "bdce7d40-abbc-40fd-9cb9-bb1c8491ec2f",
    name: "8 WAYS SINGLE PHASE HAVELLS",
    images: [
      "https://drive.google.com/file/d/1Jm40koU0MyXWMy_t5wwLR-fZarmIpzzF/view?usp=drive_link",
    ],
    brand: brands.havells,
    description:
      "8-Way single-phase Havells consumer unit, perfect for larger homes. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "aadd0197-0b4d-42d5-a827-4719ecab0313",
    name: "2 WAY PLASTIC BREAKER BOX",
    images: ["2-way-plastic-breaker-box.jpg"],
    brand: brands.neworient,
    description:
      "Compact 2-way Neworient plastic breaker box, durable and easy to install. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "04f7dc77-a0a8-42b2-9530-f54a61b2d4d5",
    name: "4 WAY PLASTIC BREAKER",
    images: ["4-way-plastic-breaker-box.jpg"],
    brand: brands.neworient,
    description:
      "4-Way Neworient plastic consumer unit for tidy breaker installation. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "ebdc9d50-56c1-4997-a46d-6905bd707a8e",
    name: "6 WAY PLASTIC BREAKER",
    images: ["6-way-plastic-breaker-box.jpg"],
    brand: brands.neworient,
    description:
      "6-Way Neworient plastic breaker box, providing space for protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "44b67e50-643a-416b-8979-94c208d4a0ed",
    name: "2FT TUBE",
    images: ["2ft-tube.jpg"],
    brand: brands.generic,
    description:
      "Energy-efficient 2ft fluorescent/LED tube for bright indoor lighting. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "e13793eb-d9ed-48cb-8622-38b6c74751de",
    name: "4FT TUBE",
    images: ["4ft-tube.webp"],
    brand: brands.generic,
    description:
      "Standard 4ft light tube providing broad illumination for offices. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "df86f067-e56d-4b8e-a604-432f46ebe39e",
    name: "REEL EXTENSION (30 METRES)",
    images: ["reel-extension.jpg"],
    brand: brands.generic,
    description:
      "Heavy-duty 30-meter cable reel extension for long-reach power needs. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "eb6d5bd0-ff8f-4a4b-8939-fe992096e443",
    name: "EXTENSION BOARD (5 SLOTS)",
    images: ["extension-board-5-slots.jpg"],
    brand: brands.generic,
    description:
      "Versatile 5-slot extension board with surge protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "f0e7d1ff-700e-46c6-85a6-f73be0369c75",
    name: "EXTENSION SMALL (3 SLOTS)",
    images: ["extension-board-3-slots.jpg"],
    brand: brands.generic,
    description:
      "Compact 3-slot extension board, ideal for home offices. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "c96eb117-291e-428e-bd43-4da5a318ae9f",
    name: "RCCB ETECHIN 63A BREAKER",
    images: ["rccb-breaker-63a.jpg"],
    brand: brands.etechin,
    description:
      "High-sensitivity 63A Etechin RCCB for protection against leakage. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "582f448f-d28d-428b-aaeb-99454fe29401",
    name: "RCCB ETECHIN 100A BREAKER",
    images: ["rccb-breaker-100a.jpg"],
    brand: brands.etechin,
    description:
      "Heavy-duty 100A Etechin RCCB, essential for leakage protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "13fcd103-0ccc-4e25-8bc8-e1625330922d",
    name: "4 POLE RCCB ETECHIN 100A",
    images: ["4-pole-rccb-100a.jpg"],
    brand: brands.etechin,
    description:
      "4-Pole 100A Etechin RCCB for comprehensive 3-phase protection. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.circuitProtectionDistribution,
  },
  {
    id: "c02c8e87-c2fb-4530-b0ff-78e14865f39d",
    name: "2.5X3 FLEXIBLE CABLE TURKEY",
    images: ["2.5-x-3c-flexible-cable.jpg"],
    brand: brands.turkey,
    description:
      "Premium 2.5mm 3-core flexible copper cable for mobile appliances. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "586568e3-de83-43a2-a190-c9d8e4a689f9",
    name: "2.5X4 FLEXIBLE CABLE TURKEY",
    images: ["2.5-x-4c-flexible-cable.jpg"],
    brand: brands.turkey,
    description:
      "Durable 2.5mm 4-core flexible cable designed for industrial tools. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "50e5901d-6497-4130-8743-652f690aca48",
    name: "4X3 FLEXIBLE CABLE TURKEY",
    images: ["4-x-3c-flexible-cable.jpg"],
    brand: brands.turkey,
    description:
      "Heavy-duty 4mm 3-core flexible cable for high-power equipment. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "37082825-cd13-426e-88da-acfaf54ff25a",
    name: "4X4 FLEXIBLE CABLE TURKEY",
    images: ["4.0-x-4c-flexible-cable.jpg"],
    brand: brands.turkey,
    description:
      "Robust 4mm 4-core flexible cable for demanding connections. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "4ff8b2c6-5d3c-4e01-bd5f-2fc8ba254b58",
    name: "4X6 FLEXIBLE CABLE",
    images: ["6.0-x-4c-flexible-cable.jpg"],
    brand: brands.generic,
    description:
      "Extra heavy-duty 4x6 flexible cable for industrial power. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.cablesWiring,
  },
  {
    id: "df148df4-930f-4439-b2eb-1f37529f9679",
    name: "TOWER CLIPS SIZE 4MM",
    images: [
      "https://drive.google.com/file/d/1gG49qyOhbZk8C57RL-LyILoGQ7jzVj0L/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "4mm Tower cable clips for secure fastening of thin wires. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "8375a490-c80d-473d-bc3b-2421dca585fd",
    name: "TOWER CLIPS SIZE 6MM",
    images: [
      "https://drive.google.com/file/d/1gG49qyOhbZk8C57RL-LyILoGQ7jzVj0L/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "Standard 6mm Tower clips for organized routing of electrical wires. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "d39d0823-28e6-4cb1-9649-a243d64f4b56",
    name: "TOWER CLIPS SIZE 8MM",
    images: [
      "https://drive.google.com/file/d/1Ay00kD3CqrofzNgg9CfXkmEMWYAgI4QO/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "Durable 8mm Tower clips designed for secure mounting of cables. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "9e4f3fec-5e79-42c9-a1b6-c7c050dab815",
    name: "TOWER CLIPS SIZE 10MM",
    images: [
      "https://drive.google.com/file/d/12bGl5iKXQPSkxfQR1aVwwgbJMdM6fDS9/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "Heavy-duty 10mm Tower clips for fastening large conduits. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "2d0f8dbc-a548-4688-8cdd-bbbebf4d3aaf",
    name: "TOWER CLIPS SIZE 12MM",
    images: [
      "https://drive.google.com/file/d/12bGl5iKXQPSkxfQR1aVwwgbJMdM6fDS9/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "12mm Tower cable clips for professional management of wiring. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "5ea0a9d6-04e0-4b11-81be-63b6d467d4f9",
    name: "TOWER CLIPS SIZE 22MM",
    images: [
      "https://drive.google.com/file/d/1dFoaS5QnOgELiNEmv5Td2i1izi64rlQp/view?usp=drive_link",
    ],
    brand: brands.generic,
    description:
      "Extra-large 22mm Tower clips for mounting industrial cables. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.electricalAccessories,
  },
  {
    id: "7f0fcc74-7cc2-41ac-8476-fd1822800e74",
    name: "LED STREET LIGHT 150 WATT",
    images: ["led-street-light.jpg"],
    brand: brands.generic,
    description:
      "High-output 150W LED street light, waterproof for outdoor areas. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.lighting,
  },
  {
    id: "b8660135-b345-44eb-8728-2257d09ff780",
    name: "NEWORIENT 3X3 CONDUIT BOX",
    images: ["3x3-conduit-box.jpg"],
    brand: brands.neworient,
    description:
      "Galvanized 3x3 metal knockout conduit box for flush-mount. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "672323b7-304a-4e6f-a79e-045bdbeceb39",
    name: "NEWORIENT 3X6 CONDUIT BOX",
    images: ["3x6-conduit-box.jpg"],
    brand: brands.neworient,
    description:
      "Galvanized 3x6 metal double conduit box for switch mounting. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "2235b39d-1b89-4288-9aad-6cee0a03c0f2",
    name: "NEWORIENT 3X3 PLASTIC BOX",
    images: ["3x3-plastic-box.jpg"],
    brand: brands.neworient,
    description:
      "Neworient 3x3 white plastic pattress box for surface-mounting. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
  {
    id: "4ea3b7c1-18d6-48f4-91f7-9fec6be6afee",
    name: "NEWORIENT 3X6 PLASTIC BOX",
    images: ["3x6-plastic-box.jpg"],
    brand: brands.neworient,
    description:
      "Standard 3x6 Neworient surface plastic box for clean mounting. This product is designed to provide a neat, safe, and professional finish for electrical installations, helping to protect cables from damage, dust, and moisture. It is easy to install and suitable for both residential and commercial applications, ensuring long-lasting performance and reliability. Its sturdy construction and clean design make it ideal for maintaining organized wiring systems while enhancing overall aesthetics. It is also lightweight yet durable, making handling and installation convenient for technicians and DIY users alike.",
    category: categories.trunkingConduits,
  },
] as const;

export type Category = (typeof categories)[keyof typeof categories];
export type Brand = (typeof brands)[keyof typeof brands];
export type Product = (typeof products)[number];
