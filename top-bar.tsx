import Link from "next/link"
import { Heart, User } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-gray-100 py-2 text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span>ADD SOMETHING HERE...</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/compare" className="flex items-center gap-1 hover:text-blue-600">
            COMPARE (0)
          </Link>
          <Link href="/wishlist" className="flex items-center gap-1 hover:text-blue-600">
            <Heart className="h-4 w-4" />
            WISHLIST (0)
          </Link>
          <Link href="/auth/login" className="flex items-center gap-1 hover:text-blue-600">
            <User className="h-4 w-4" />
            REGISTER OR SIGN IN
          </Link>
        </div>
      </div>
    </div>
  )
}

