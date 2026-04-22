import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  images: string[];
}

export function ProductCard({ title, description, images }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-2xl">
      <div className="relative h-60 overflow-hidden bg-mist-300">
        <Image
          src={`/${images[0]}`}
          alt={title}
          className="object-contain"
          fill
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      {/* <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter> */}
    </Card>
  );
}
