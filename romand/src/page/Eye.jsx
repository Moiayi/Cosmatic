import React from "react";
import { useNavigate } from "react-router-dom";

export default function Eye() {
  const navigate = useNavigate();
  const handleBuyNow = (productName) => {
    navigate(`/checkout?product=${encodeURIComponent(productName)}`);
  };
  return (
    <div className="w-full h-full shadow-md px-2 py-2">
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 rounded-md">
        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://m.media-amazon.com/images/I/61TBvPKoEcL._UF350,350_QL80_.jpg" 
              alt="Better Than Palette" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Palette</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.90</span>
              <span className="line-through text-gray-400">$25.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://s2.konvy.com/static/team/2022/1212/2022121209251236096.jpg" 
              alt="Better Than Palette 7.4g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Palette 7.4g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.90</span>
              <span className="line-through text-gray-400">$25.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette 7.4g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://d1flfk77wl2xk4.cloudfront.net/Assets/romand-better-than-eyes-milk-series-3-types-w03-dry-strawberry-w02-dry-peach-blossom-w01-dry-lavender/91/333/XL_p0125733391.jpg" 
              alt="Better Than Eyes Milk Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Eyes Milk Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.90</span>
              <span className="line-through text-gray-400">$25.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Eyes Milk Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://kiokii.com/cdn/shop/files/romand-han-all-fix-mascara-3-stylesromndkiokii-and-3327944.png?v=1758303480" 
              alt="Hand All Mascara" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Hand All Mascara</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$8.90</span>
              <span className="line-through text-gray-400">$15.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Hand All Mascara")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/2_a7a4a7e7-e7b2-4e8a-906c-348d32946393.jpg?v=1693979633&width=900" 
              alt="Twinkle Pen Liner" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Twinkle Pen Liner</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$7.00</span>
              <span className="line-through text-gray-400">$10.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Twinkle Pen Liner")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

         <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/palette_5f4e9cf9-c138-4ab7-a543-802cd6b323e6.jpg?v=1663004637&width=900" 
              alt="Better Than Palette Energetic Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
              Better Than Palette Energetic Series
            </h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.20</span>
              <span className="line-through text-gray-400">$26.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette Energetic Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/M01-dry-apple-blossom_3.jpg?v=1663005803&width=900" 
              alt="Glasting Color Gloss" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Glasting Color Gloss</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$11.90</span>
              <span className="line-through text-gray-400">$17.00</span>
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
              src="https://romand.us/cdn/shop/products/palette.jpg?v=1638992069&width=900" 
              alt="Better Than Palette Secret Garden" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Palette Secret Garden</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.29</span>
              <span className="line-through text-gray-400">$26.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette Secret Garden")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/files/1_fda8bce8-1a02-4788-be96-4edc7fba4f74.jpg?v=1689575964&width=900" 
              alt="Bare Layer Palette" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Bare Layer Palette</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$17.50</span>
              <span className="line-through text-gray-400">$25.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Bare Layer Palette")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://uk.lewkin.com/cdn/shop/files/L01-long-black_98c99d79-687a-49ad-8028-1ec68d886049.webp?v=1749780009" 
              alt="Hand All Mascara" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Hand All Mascara</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$8.90</span>
              <span className="line-through text-gray-400">$15.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Hand All Mascara")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/us_3cdacee2-b65b-44c9-807c-73bd0d406a20.jpg?v=1663004775&width=900" 
              alt="Better Than Palette Light and Glitter Garden" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Palette Light and Glitter Garden</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.90</span>
              <span className="line-through text-gray-400">$27.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette Light and Glitter Garden")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romadoma.ru/upload/iblock/d15/ppqz9y20je9pgrjglrq5ymjscoj7hwze.jpg" 
              alt="Han All Lash Serum" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Han All Lash Serum</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(109)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$7.50</span>
              <span className="line-through text-gray-400">$11.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Han All Lash Serum")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://m.media-amazon.com/images/I/71wEZMZdE5L._UF1000,1000_QL80_.jpg" 
              alt="Hand All Mascara" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Hand All Mascara</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$8.90</span>
              <span className="line-through text-gray-400">$15.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Hand All Mascara")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/hanall_mascara.jpg?v=1639002390&width=900" 
              alt="Han All Fix Mascara 7g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Han All Fix Mascara 7g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$10.49</span>
              <span className="line-through text-gray-400">$14.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Han All Fix Mascara 7g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/product.jpg?v=1679882391&width=900" 
              alt="Han All Brow Cara 9g" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Han All Brow Cara 9g</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$5.79</span>
              <span className="line-through text-gray-400">$16.99</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Han All Brow Cara 9g")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>

        <div className="bg-pink-100 rounded-md shadow-sm overflow-hidden flex flex-col w-full h-[320px] md:h-[480px] group hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden">
            <img 
              src="https://romand.us/cdn/shop/products/palette_5f4e9cf9-c138-4ab7-a543-802cd6b323e6.jpg?v=1663004637&width=900" 
              alt="Better Than Palette Energetic Series" 
              className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-2 flex-grow">
            <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Palette Energetic Series</h3>
            <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
            <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
              <span className="text-gray-600">From</span>
              <span className="text-red-500 font-bold">$18.20</span>
              <span className="line-through text-gray-400">$26.00</span>
            </div>
          </div>
          <button 
            onClick={() => handleBuyNow("Better Than Palette Energetic Series")}
            className="mx-2 mb-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1.5 text-xs sm:text-sm rounded-md transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
