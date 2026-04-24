import productsData from "@/productData.json";
import { toSlug } from "@/lib/utils";
import ProductDetailsContent from "@/components/ProductDetailsContent";

export function generateStaticParams() {
   return productsData.map((product) => ({ slug: toSlug(product.title) }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;

   return <ProductDetailsContent slug={slug} />;
}
