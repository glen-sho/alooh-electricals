import React from "react";
import productsData from "@/productData.json";
import { ProductCard } from "../ProductCard";

export default function Products() {
  return (
    <div className="">
      <div className="max-w-7xl p-4 mx-auto">
        <h1>Products</h1>{" "}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              images={product.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
