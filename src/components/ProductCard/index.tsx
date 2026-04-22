import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  images: string[];
}

export function ProductCard({ title, images }: ProductCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm pt-0">
      <div className="relative h-60 overflow-hidden bg-mist-100 items-center flex justify-center">
        <Image
          src={`/${images[0]}`}
          alt={title}
          className="object-contain"
          width={200}
          height={200}
        />
      </div>
      <p className="font-heading pt-2"> {title}</p>
    </div>
  );
}
