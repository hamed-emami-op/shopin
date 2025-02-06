import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./component/firebase/Firebase";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pupolar, setPupolar] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "pupolar"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPupolar(productsData);
    };
    fetchProducts();
  }, []);
  return (
    <div className="text-gray-300 ">
      <div className="w-full h-[30em] bg-[#2c284dde]  ">
        <p className=" absolute z-10 mt-20 px-4 bg-white inline-block rounded-e-full text-indigo-950 font-semibold">
          <strong>
            <Link to={"/pupolar"}>Pupolar</Link>
          </strong>
        </p>

        <Swiper
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop
          className="w-full h-full"
        >
          {pupolar?.map((pupolare) => {
            return (
              <SwiperSlide key={pupolare.id}>
                <div className="w-full h-full">
                          <div
                            className="relative w-full h-full bg-no-repeat bg-contain bg-right"
                            style={{
                              backgroundImage: `url(${pupolare.imagehome})`,
                              backgroundSize: "100%",
                            }}
                          >
                            <div className="absolute ml-20 mt-32 p-4 border-2 border-white/70 font-medium backdrop-blur-2xl">
                              <p className="pb-2 font-semibold text-5xl">{pupolare.name}</p>
                              <p>{}</p>
                              <p className="pb-2 w-96 font-sans text-md">{pupolare.document}</p>
                            </div>
                          </div>
                </div>
                <div className="text-white absolute"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-black w-full h-[40em] absolute -mt-6 rounded-t-3xl z-10"></div>
    </div>
  );
}
