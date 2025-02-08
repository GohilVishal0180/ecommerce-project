import { HeroSlider } from "@/components/hero-slider"
import { FeaturedCategories } from "@/components/featured-categories"
import { DealOfDay } from "@/components/deal-of-day"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Hot Sale",
      description: "Big Sale Up To",
      discount: "30% Off",
      image:
        "https://sjc.microlink.io/V-9G4BOtIqfuIEj9wQabvK3qUl0DHe2RujxzHRPQhXXlAAnNX8ss4rXPNcUvaMIZ6097QJ1LIxDFcmf9XAcb2w.jpeg",
    },
    {
      id: "2",
      name: "Gear 360",
      description: "Capture life in high definition",
      subtitle: "by Samsung",
      image:
        "https://sjc.microlink.io/V-9G4BOtIqfuIEj9wQabvK3qUl0DHe2RujxzHRPQhXXlAAnNX8ss4rXPNcUvaMIZ6097QJ1LIxDFcmf9XAcb2w.jpeg",
    },
    {
      id: "3",
      name: "Virtual Reality",
      description: "Glasses",
      discount: "20% Off",
      image:
        "https://sjc.microlink.io/V-9G4BOtIqfuIEj9wQabvK3qUl0DHe2RujxzHRPQhXXlAAnNX8ss4rXPNcUvaMIZ6097QJ1LIxDFcmf9XAcb2w.jpeg",
    },
  ]

  return (
    <div>
      <HeroSlider />
      <FeaturedCategories />
      <DealOfDay />
      <ProductGrid title="New Arrivals" products={products} />
      <ProductGrid title="Popular Products" products={products} />
      <Newsletter />
    </div>
  )
}

