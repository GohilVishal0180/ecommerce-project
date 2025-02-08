"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { User, Settings, ShoppingBag, Heart, Clock, LogOut } from "lucide-react"

const menuItems = [
  {
    title: "प्रोफ़ाइल",
    href: "/dashboard",
    icon: User,
  },
  {
    title: "मेरे ऑर्डर",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "विशलिस्ट",
    href: "/dashboard/wishlist",
    icon: Heart,
  },
  {
    title: "ऑर्डर हिस्ट्री",
    href: "/dashboard/history",
    icon: Clock,
  },
  {
    title: "सेटिंग्स",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="text-lg font-semibold">मेरा अकाउंट</h2>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                pathname === item.href ? "bg-gray-100 text-gray-900" : "",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-all hover:text-red-600">
            <LogOut className="h-4 w-4" />
            लॉग आउट
          </button>
        </nav>
      </div>
    </div>
  )
}

