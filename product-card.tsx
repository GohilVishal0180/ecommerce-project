import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  discount?: string
  subtitle?: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-[4/3] relative bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover p-4 group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            {product.subtitle && <p className="text-sm text-gray-500">{product.subtitle}</p>}
            {product.discount && <p className="text-blue-600 font-semibold">{product.discount}</p>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

