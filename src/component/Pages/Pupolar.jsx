import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useProducts } from "./productsContext";

export default function Pupolar() {
  const { products } = useProducts();

  // مرتب کردن محصولات بر اساس تعداد فروش (نزولی) و گرفتن ۵ محصول برتر
  const bestSellingProducts = products
    ?.slice() // ایجاد کپی از آرایه اصلی (برای جلوگیری از تغییر مستقیم)
    .sort((a, b) => b.sales - a.sales) // مرتب‌سازی بر اساس تعداد فروش
    .slice(0, 10); // فقط ۵ تا رو نگه می‌داریم

  return (
    <div className="">
      <div className="w-full h-[40em] bg-[#2c284dde] ">
        <p className="absolute z-[2] mt-32 px-4 bg-yellow-500 inline-block rounded-e-full text-black font-semibold">
          <strong>
            <Link to={"/Pupolar"}>Pupolar</Link>
          </strong>
        </p>
        <Swiper
          centeredSlides={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // تغییر زمان اسلاید به 5 ثانیه
          modules={[Autoplay]}
          loop
          className="w-full h-full"
        >
          {bestSellingProducts?.map((producte) => {
            return (
              <SwiperSlide key={producte.id}>
                <div className="w-full h-full ">
                  <div
                    className="relative w-full h-full bg-no-repeat bg-contain bg-right z-2 shadow-[inset_400px_90px_525px_rgba(0,0,0,1.8)]"
                    style={{
                      backgroundImage: `url(${producte.backdropimage})`,
                      backgroundSize: "100%",
                    }}
                  >
                    <div className="absolute w-[500px] ml-10 mt-40 p-4 font-medium rounded-3xl">
                      <p className="pb-2 font-semibold text-3xl block">
                        {producte.name}
                      </p>
                      <p className="font-normal text-sm border-2 inline rounded-2xl p-1 mt-2 w-40">
                        CatGory :
                        {producte?.Category?.map((ganer, index) => (
                          <span
                            key={index}
                            className="transition-all duration-200 hover:text-yellow-500 inline-block"
                          >
                            <Link to={""}>{ganer.name}</Link>{" , "}
                          </span>
                        ))}
                      </p>
                      <p className="pb-2 font-sans text-md mt-2">
                        document : {producte.Description}
                      </p>
                      <p className="mt-2 font-bold text-3xl italic">
                        {producte.off ? (
                          <div>
                            <p className="line-through">${producte.price}</p>
                            <p>${producte.off}</p>
                          </div>
                        ) : (
                          <p>${producte.price}</p>
                        )}
                      </p>
                      <div className="flex gap-2">
                        <Link to={"/"}>
                          <button className="bg-yellow-500 p-2 rounded-full inline-flex justify-center items-center w-52 mt-4 transition-all duration-200 hover:backdrop-blur-xl text-black hover:bg-white">
                            Details
                          </button>
                        </Link>
                        <button className="bg-yellow-500 p-2 rounded-full inline-flex justify-center items-center w-52 mt-4 transition-all duration-200 hover:backdrop-blur-xl text-black hover:bg-white">
                          Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
