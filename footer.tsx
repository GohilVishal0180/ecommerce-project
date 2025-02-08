import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Mail, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-4">
              <h1 className="text-2xl font-bold text-blue-600">Digital Market</h1>
            </Link>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Cecilia Chapman</p>
              <p>711-2880 Nulla St</p>
              <p className="font-semibold">(+01)-800-3456-88</p>
              <p>nasathemes@gmail.com</p>
              <p>www.digi.nasatheme.com</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/delivery" className="text-gray-600 hover:text-blue-600">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-blue-600">
                  Search Terms
                </Link>
              </li>
              <li>
                <Link href="/order-return" className="text-gray-600 hover:text-blue-600">
                  Order & Return
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Need Help</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/customer-service" className="text-gray-600 hover:text-blue-600">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/best-seller" className="text-gray-600 hover:text-blue-600">
                  Best Seller
                </Link>
              </li>
              <li>
                <Link href="/manufacturers" className="text-gray-600 hover:text-blue-600">
                  Manufactures
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-4">Get instant updates about our new products and special promos!</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email here" className="bg-gray-100 border-gray-200" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Product Tags */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-4">
            {[
              "Apple",
              "Beats",
              "Camera",
              "Galaxy",
              "HTC",
              "HTC One M8",
              "iMac",
              "Ipad",
              "Ipad 4 16Gb",
              "Ipad Mini",
              "Keyboard",
              "Mouse",
              "Olloclip",
              "Samsung",
              "Samsung Galaxy S5 - 64gb",
              "Samsung Galaxy S7",
              "Samsung Galaxy Tab 4",
              "Samsung Galaxy Tab S2",
            ].map((tag) => (
              <Link
                key={tag}
                href={`/products/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© Digi - All Right reserved!</p>
          <div className="flex gap-2">
            <Image src="/placeholder.svg?height=30&width=50" alt="Visa" width={50} height={30} className="h-8" />
            <Image src="/placeholder.svg?height=30&width=50" alt="Mastercard" width={50} height={30} className="h-8" />
            <Image src="/placeholder.svg?height=30&width=50" alt="Discover" width={50} height={30} className="h-8" />
            <Image src="/placeholder.svg?height=30&width=50" alt="PayPal" width={50} height={30} className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}

