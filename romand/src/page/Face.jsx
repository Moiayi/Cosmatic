import { useNavigate } from "react-router-dom";

export default function Face() {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/checkout?product=${productId}`);
  };
  return (
    <div className="w-full h-full shadow-md px-2 py-2">
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 rounded-md">
        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://korean-skincare.de/cdn/shop/files/db0afbf72e32e2324123eee6063c6be9_jpg_960x960q80_jpg_8e02bf6f-ea3c-4185-b41a-bc47280bbbda.webp?v=1751321169" 
              alt="Black Me Tone Up Cushion SPF50++ PA++++" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Black Me Tone Up Cushion SPF50++ PA++++
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$15.79</span>
              <span className="line-through text-gray-400">$24.99</span>
            </div>
          </div>
          <button 
      onClick={() => handleBuyNow(1)} 
      className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
    > Buy Now </button>
    
    </div>
        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/d242f13e39501e4ab6d255368a9a8cff.jpg?v=1664902875&width=900" 
              alt="Better Than Cheek - Renewal" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Better Than Cheek - Renewal
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$10.79</span>
              <span className="line-through text-gray-400">$12.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Cheek - Renewal")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://sokoskins.shop/cdn/shop/products/64iE7KCc66Gc7IKs7KeE_1200x1200.jpg?v=1663405613" 
              alt="Nu Zero Cushion SPF50++ PA++++" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Nu Zero Cushion SPF50++ PA++++
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$15.90</span>
              <span className="line-through text-gray-400">$26.79</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Nu Zero Cushion SPF50++ PA++++")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://cafe24img.poxo.com/beautyboxkorea/web/upload/NNEditor/20201102/ROMAND-See-Through-Melting-Cheek-3.5g-[2020-Hanbok-Project]_0_shop2_115409.jpg" 
              alt="Hanbok Blush" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Hanbok Blush
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$11.90</span>
              <span className="line-through text-gray-400">$17.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Hanbok Blush")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://mapetitecoree.com/cdn/shop/files/ROMAND-see-through-veil-lighter-Ma-Petite-Coree.jpg?crop=center&height=581&v=1747479024&width=581" 
              alt="See-Through Veil Lighter" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">See-Through Veil Lighter</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(59)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$8.79</span>
              <span className="line-through text-gray-400">$15.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("See-Through Veil Lighter")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/bear-water-cushion-1000x1500.jpg?v=1670976522&width=900" 
              alt="Bare Water Cushion" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Bare Water Cushion</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$12.79</span>
              <span className="line-through text-gray-400">$20.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Bare Water Cushion")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://product.hstatic.net/1000006063/product/606_5b00376f13414d139c95361ade561c60_1024x1024.jpg" 
              alt="Clear Cover Cushion SPF50++ 14g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Clear Cover Cushion SPF50++ 14g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$16.90</span>
              <span className="line-through text-gray-400">$24.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Clear Cover Cushion SPF50++ 14g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://freyabeautysecret.com/cdn/shop/files/IMG_6709.jpg?v=1693580296" 
              alt="Bloom in Coverfit Cushion 14g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Bloom in Coverfit Cushion 14g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Bloom in Coverfit Cushion 14g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
