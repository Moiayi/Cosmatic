import React from "react";
import { useNavigate } from "react-router-dom";
import Slidebar from "../component/Slidebar";

export default function Home() {
  const navigate = useNavigate();
  
  const handleBuyNow = (productName) => {
    navigate(`/checkout?product=${encodeURIComponent(productName)}`);
  };

  return (
    <main className="min-h-screen">
      <Slidebar />
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
                <span className="text-red-500 font-bold">$9.79</span>
                <span className="line-through text-gray-400">$13.99</span>
              </div>
            </div>
            <button 
              onClick={() => handleBuyNow("Black Me Tone Up Cushion SPF50++ PA++++")}
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
                <span className="text-red-500 font-bold">$9.79</span>
                <span className="line-through text-gray-400">$13.99</span>
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
            src="https://sokoskins.shop/cdn/shop/products/64iE7KCc66Gc7IKs7KeE_1200x1200.jpg?v=1663405613" 
            alt="Nu Zero Cushion SPF50++ PA++++" 
            className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-2 flex-grow">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Nu Zero Cushion SPF50++ PA++++</h3>
          <div className="text-yellow-500 text-xs">★★★★★ <span className="text-gray-500">(39)</span></div>
          <div className="flex flex-wrap gap-1 items-center mt-1 text-xs sm:text-sm">
            <span className="text-gray-600">From</span>
            <span className="text-red-500 font-bold">$9.79</span>
            <span className="line-through text-gray-400">$13.99</span>
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
            src="https://cafe24img.poxo.com/beautyboxkorea/web/upload/NNEditor/20201102/ROMAND-See-Through-Melting-Cheek-3.5g-[2020-Hanbok-Project]_0_shop2_115409.jpg" 
            alt="Hanbok Blush" 
            className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-2 flex-grow">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Hanbok Blush</h3>
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
            src="https://romand.us/cdn/shop/products/d242f13e39501e4ab6d255368a9a8cff.jpg?v=1664902875&width=900" 
            alt="Better Than Cheek - Renewal" 
            className="w-full h-[200px] md:h-[350px] object-cover rounded-t-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-2 flex-grow">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">Better Than Cheek - Renewal</h3>
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
            <span className="text-red-500 font-bold">$9.79</span>
            <span className="line-through text-gray-400">$13.99</span>
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
    </main>
  );
}