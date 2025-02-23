import React from "react";
import { useProducts } from "./productsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function NewProduct() {
  const { products } = useProducts();

  // مرتب‌سازی محصولات بر اساس تاریخ ایجاد و گرفتن ۲۰ تای جدید
  const newProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 20);

  return (
    <div className="absolute w-full h-[40em] bg-black -mt-10 z-[2] rounded-t-3xl p-6">
      <h3 className="text-4xl text-black bg-yellow-500 p-3 inline-block rounded-full font-semibold ">
        New Product
      </h3>
      <Swiper
        centeredSlides={false}
        spaceBetween={20}
        slidesPerView={7}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
        className="w-full"
      >
        {newProducts.map((producte) => (
          <SwiperSlide key={producte.ID}>
            <div className="my-10 border-[1px] rounded-2xl h-[25em] p-2">
              <img
                src={producte.imageall[0].image}
                alt={producte.name}
                className="rounded-xl w-full h-40"
              />
              <p className="text-xl font-semibold">{producte.name}</p>
              <p className="mt-2">{producte.Description.substring(0, 90) + "..."}</p>
              <p className="mt-2">
                <strong>
                  {producte.off ? (
                    <div className="flex gap-2">
                      <p className="line-through">${producte.price}</p>
                      <p>${producte.off}</p>
                    </div>
                  ) : (
                    <p>${producte.price}</p>
                  )}
                </strong>
              </p>
              <button className="w-full mt-7 bg-yellow-500 p-2 rounded-lg text-black font-semibold transition-all delay-200 hover:bg-white ">
                Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
