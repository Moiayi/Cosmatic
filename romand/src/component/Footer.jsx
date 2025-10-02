import { TbBrandYoutube } from "react-icons/tb"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="bg-pink-200 w-full h-[450px] flex justify-center items-center mb-3">
        <div className="w-full max-w-lg mx-auto text-center px-4  md:text-[20px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Subscribe to our newsletter</h2>
          <div className="mb-8">
            <span className="text-sm text-gray-700">Get a 20% Off Coupon on Your First Order!</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-[15px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:max-w-xs px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 whitespace-nowrap">
              Get 20% Off
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">✨ Exclusive offers & beauty tips delivered to your inbox</p>
        </div>
      </div>
      <div className="bg-pink-300 w-full h-auto  px-4 sm:px-6 py-6 sm:py-8 sm:h-[380px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 cursor-pointer">
          <div className="sm:text-left">
            <h3 className="font-semibold text-lg mb-3 hover:text-pink-500">Contact Us</h3>
            <p className="text-sm mb-3 break-all">romand202208@gmail.com</p>
            <div className="font-semibold text-base sm:text-xl">rom&nd Distributor</div>
          </div>
          <div className="sm:text-left">
            <h3 className="font-semibold text-lg mb-3 hover:text-pink-500">About us</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Wholesale Inquiry
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-left">
            <h3 className="font-semibold text-lg mb-3 hover:text-pink-500">Customer Service</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Return / Refund
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  California's Proposition 65
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  CCPA & US Privacy Laws
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-left">
            <h3 className="font-semibold text-lg mb-3 hover:text-pink-500">Newsletter</h3>
            <p className="text-sm">Sign up for exclusive offers, original stories, events, and more.</p>
            <div className=" sm:justify-start gap-2 text-sm mt-2">
              <span>💖</span>
              <span>Get an EXTRA 20% OFF coupon!</span>
            </div>
            <div className="flex mt-3 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-black text-white rounded-r-md px-4 text-sm hover:bg-gray-800 transition duration-200">
                Sign up
              </button>
            </div>
            <div className="flex sm:justify-start gap-4 text-xl mt-4">
              <TbBrandYoutube className="hover:text-red-600 cursor-pointer transition duration-200" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer transition duration-200" />
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-200 pt-5 text-sm gap-4">
          <p className="text-center text-xs sm:text-sm">© 2025 rom&nd US Distributor. Powered by Shopify</p>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <img
              src="https://i.pinimg.com/736x/54/80/23/548023534e09ce416d396fc8f2c73573.jpg"
              alt="Amex"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/59/ea/33/59ea334c261208fe3f1256838578aec4.jpg"
              alt="ApplePay"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/3f/6c/b9/3f6cb99dd6781e55ae57175b0eea39d8.jpg"
              alt="GooglePay"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/2b/fa/5f/2bfa5f4d02100b7b2c1d87ff55ce16dc.jpg"
              alt="Mastercard"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg"
              alt="Paypal"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/20/60/6b/20606bfa7d07921eb6986f9aa7c2ae82.jpg"
              alt="Shopify"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/b0/ba/45/b0ba45b204dac98e874febae77b76044.jpg"
              alt="Venmo"
              className="h-5 sm:h-6"
            />
            <img
              src="https://i.pinimg.com/736x/7a/ec/82/7aec8243adc2190d31a686388a1decb3.jpg"
              alt="Visa"
              className="h-5 sm:h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
