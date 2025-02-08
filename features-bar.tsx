import { Truck, CreditCard, Headphones, RotateCcw } from "lucide-react"

export function FeaturesBar() {
  return (
    <div className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Delivery */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-blue-100">from 50$</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-blue-100">All cards accepted</p>
            </div>
          </div>

          {/* Help Center */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Help Center</h3>
              <p className="text-sm text-blue-100">24/7 Support System</p>
            </div>
          </div>

          {/* Trustpay */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <RotateCcw className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Trustpay</h3>
              <p className="text-sm text-blue-100">Easy Return Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

