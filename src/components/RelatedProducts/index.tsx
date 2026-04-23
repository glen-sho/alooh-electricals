import { ProductCard } from "../ProductCard";

interface Product {
   id: string;
   title: string;
   description: string;
   category: string;
   images: string[];
}

interface Props {
   products: Product[];
   currentProductId: string;
   currentCategory: string;
}

function shuffleArray<T>(array: T[]): T[] {
   const shuffled = [...array];

   for (let i = shuffled.length - 1; i > 0; i--) {
      //Generate a random index from 0 to 1;
      const j = Math.floor(Math.random() * (i + 1));

      //Swap elements at index i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }

   return shuffled;
}

const RelatedProducts = ({ products, currentProductId, currentCategory }: Props) => {
   const otherProducts = products.filter((p) => p.id !== currentProductId);

   const sameCategory = otherProducts.filter((p) => p.category === currentCategory);
   const differentCategories = otherProducts.filter((p) => p.category !== currentCategory);

   const shuffledSame = shuffleArray(sameCategory);
   const shuffledDifferent = shuffleArray(differentCategories);

   const relatedProducts = [...shuffledSame, ...shuffledDifferent].slice(0, 4);

   return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
         {relatedProducts.map((product) => (
            <ProductCard
               key={product.id}
               title={product.title}
               description={product.description}
               images={product.images}
            />
         ))}
      </div>
   );
};

export default RelatedProducts;
