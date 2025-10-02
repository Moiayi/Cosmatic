import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

export default function Slidebar() {
  return (
    <>
      <div className="hidden lg:block w-full h-[650px] py-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full w-full"
        >
          <SwiperSlide>
            <img
              className="h-[650px] w-full object-cover"
              src="https://romand.us/cdn/shop/files/1_PC_copy_3.png?v=1748842498&width=1728"
              alt="Rom&nd promotional banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[650px] w-full object-cover"
              src="https://romand.us/cdn/shop/files/1_PC_copy_5.png?v=1756280891&width=1728"
              alt="Rom&nd promotional banner"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="block lg:hidden w-full">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img
              className="h-[250px] w-full object-fill shadow-md bg-white"
              src="https://romand.us/cdn/shop/files/1_PC_copy_3.png?v=1748842498&width=1728"
              alt="Rom&nd promotional banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[250px] w-full object-fill shadow-md bg-white"
              src="https://romand.us/cdn/shop/files/1_PC_copy_5.png?v=1756280891&width=1728"
              alt="Rom&nd promotional banner"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
