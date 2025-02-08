import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700 px-6">
            <Menu className="h-5 w-5 mr-2" />
            CATEGORIES
          </Button>

          <div className="flex items-center gap-6 py-4">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-200">
              HOME
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/shop" className="flex items-center gap-1 hover:text-blue-200">
              SHOP
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/elements" className="flex items-center gap-1 hover:text-blue-200">
              ELEMENTS
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/blog" className="flex items-center gap-1 hover:text-blue-200">
              BLOG
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              CONTACT
            </Link>
            <Link href="/theme" className="hover:text-blue-200">
              LIKE THEME
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

