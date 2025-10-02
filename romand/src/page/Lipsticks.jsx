import { useNavigate } from "react-router-dom";

export default function Lipsticks() {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/checkout?product=${productId}`);
  };
  return (
    <div className="w-full h-full shadow-md px-2 py-2">
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 rounded-md">
        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full sm:h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/glasting-meling-balm-1000x1500.jpg?v=1670976671&width=900" 
              alt="Glasting Melting Balm #Original Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Glasting Melting Balm #Original Series
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Glasting Melting Balm #Original Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full sm:h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/1_c2e76979-fe8b-4268-8580-0e86186b7e75.jpg?v=1682995856&width=900" 
              alt="Glasting Melting Balm New Bare Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Glasting Melting Balm New Bare Series
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Glasting Melting Balm New Bare Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/Artboard2.jpg?v=1717747596&width=900" 
              alt="Glasting Melting Balm #Dusty On The Nude" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Glasting Melting Balm #Dusty On The Nude
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Glasting Melting Balm #Dusty On The Nude")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/zeromattelipstick_nude.jpg?v=1634253548&width=900" 
              alt="Zero Matte Lipstick" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Zero Matte Lipstick</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(91)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$0.99</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Zero Matte Lipstick")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/dewyfull_water_tint.jpg?v=1641423292&width=900" 
              alt="Dewyful Water Tint" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Dewyful Water Tint</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(59)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Dewyful Water Tint")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/juicy.jpg?v=1634253225&width=900" 
              alt="Juicy Lasting Tint Original Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Original Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Original Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/89af1e2e1e578ecd01f7b2db69e6e0f3.jpg?v=1662777294&width=900" 
              alt="Juicy Lasting Tint Bare Juicy Series 5.5g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Bare Juicy Series 5.5g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Bare Juicy Series 5.5g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/2__us.jpg?v=1639105338&width=900" 
              alt="Juicy Lasting Tint Ripe Fruits Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Ripe Fruits Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Ripe Fruits Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/KakaoTalk_20230502_163801347_09.jpg?v=1683096240&width=900" 
              alt="Juicy Lasting Tint Ripe Fruits Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Ripe Fruits Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Ripe Fruits Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/200826__us.jpg?v=1639440760&width=900" 
              alt="Juicy Lasting Tint Ripe Fruits Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Ripe Fruits Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Ripe Fruits Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/7-2.png?v=1717747602&width=900" 
              alt="Glasting Color Gloss #Spring Fever" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Glasting Color Gloss #Spring Fever</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$12.53</span>
              <span className="line-through text-gray-400">$17.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Glasting Color Gloss #Spring Fever")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/9_6c7f0737-3d67-42ce-bdaf-8d70b5b70127.jpg?v=1717747607&width=900" 
              alt="Glasting Color Gloss" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Glasting Color Gloss</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.79</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Glasting Color Gloss")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/juicy_lasting_tint_summer_pink.jpg?v=1639525936&width=900" 
              alt="Juicy Lasting Tint Summer Pink Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Juicy Lasting Tint Summer Pink Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$12.90</span>
              <span className="line-through text-gray-400">$17.90</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Juicy Lasting Tint Summer Pink Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/dewyful.jpg?v=1663027743&width=900" 
              alt="Dewyful Water Tint Milk Grocery Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Dewyful Water Tint Milk Grocery Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.70</span>
              <span className="line-through text-gray-400">$13.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Dewyful Water Tint Milk Grocery Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/a9f3e36aa731d5a532df4044bdf443f1.jpg?v=1664902835&width=900" 
              alt="Dewyful Water Tint Muteral Nude Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Dewyful Water Tint Muteral Nude Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$9.70</span>
              <span className="line-through text-gray-400">$13.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Dewyful Water Tint Muteral Nude Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}