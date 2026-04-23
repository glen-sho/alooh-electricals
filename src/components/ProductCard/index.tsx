import Image from "next/image";

interface ProductCardProps {
   title: string;
   description: string;
   images: string[];
}

export function ProductCard({ title, images }: ProductCardProps) {
   return (
      <div className="relative mx-auto w-full max-w-sm pt-0">
         <div className="relative h-60 overflow-hidden bg-mist-100 items-center flex justify-center group">
            <div className="bg-black absolute right-0 left-0 w-full h-full opacity-0 group-hover:opacity-5 duration-400 transition-opacity"></div>
            <Image
               src={`/${images[0]}`}
               alt={title}
               className="object-contain group-hover:scale-105 duration-300 transition-all"
               width={200}
               height={200}
            />
         </div>
         <p className="font-Andada font-medium text-lg pt-2 hover:underline duration-400"> {title}</p>
      </div>
   );
}
