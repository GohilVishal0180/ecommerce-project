"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Search, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold hover:text-blue-600">
                  Home
                </Link>
                <Link href="/shop" className="text-lg font-semibold hover:text-blue-600">
                  Shop
                </Link>
                <Link href="/categories" className="text-lg font-semibold hover:text-blue-600">
                  Categories
                </Link>
                <Link href="/deals" className="text-lg font-semibold hover:text-blue-600">
                  Deals
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-blue-600">Digital Market</h1>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px] rounded-r-none border-r-0">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="computers">Computers</SelectItem>
                <SelectItem value="smart-home">Smart Home</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex-1 flex">
              <Input placeholder="I'm shopping for ..." className="rounded-none border-r-0" />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Search Toggle - Mobile */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </Button>

            {/* Customer Support - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Support</div>
                <div className="font-bold">1-900-66-88</div>
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm">0 Items</div>
                <div className="font-bold">$0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="flex">
              <Input placeholder="Search products..." className="rounded-r-none" />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

