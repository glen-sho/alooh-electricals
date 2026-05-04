import { DisplayProductsType } from "@/data/products";
import { toSlug } from "@/lib/utils";
import Link from "next/link";

export default function ProductCard({ product }: { product: DisplayProductsType }) {
   const { name, category, images } = product;
   const slug = toSlug(name);

   return (
      <div className="flex flex-col overflow-hidden group space-y-4 ">
         <Link href={`/${slug}`} className="relative aspect-4/3 overflow-hidden h-60 relative">
            <div className="absolute bg-black hover:red-500 w-full h-full left-0 top-0 z-10 opacity-5"></div>
            <img
               src={images[0]}
               alt={name}
               className="w-full h-full object-contain hover:scale-105 duration-500"
               loading="lazy"
            />
         </Link>

         <div className="flex flex-col flex-1 gap-1">
            <Link href={`/${slug}`} className="font-bold text-gray-900 leading-snug uppercase">
               {name}
            </Link>
            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">{category}</span>
         </div>
      </div>
   );
}
