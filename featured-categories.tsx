import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Smartphones",
    image: "/placeholder.svg?height=200&width=200",
    count: 124,
    color: "blue",
  },
  {
    name: "Laptops",
    image: "/placeholder.svg?height=200&width=200",
    count: 98,
    color: "green",
  },
  {
    name: "Smart Watches",
    image: "/placeholder.svg?height=200&width=200",
    count: 67,
    color: "purple",
  },
  {
    name: "Cameras",
    image: "/placeholder.svg?height=200&width=200",
    count: 45,
    color: "orange",
  },
  {
    name: "Gaming",
    image: "/placeholder.svg?height=200&width=200",
    count: 89,
    color: "red",
  },
  {
    name: "Audio",
    image: "/placeholder.svg?height=200&width=200",
    count: 72,
    color: "teal",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="font-semibold text-center">{category.name}</h3>
                  <p className="text-sm text-gray-500 text-center">{category.count} Products</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

