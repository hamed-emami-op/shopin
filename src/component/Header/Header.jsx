import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed z-10 flex justify-between p-3 pt-2 items-center text-center rounded-b-full  w-full ${
        isScrolled
          ? "bg-gradient-to-l from-black via-yellow-500 to-black"
          : "npm bg-opacity-40"
      }`}
    >
      <div className="">
        <Link to="/">
          <h2 className="ml-4 pb-1 p-1 text-2xl text-yellow-500 italic border-2 border-zin-600 rounded-2xl font-semibold">
            BireFooD
          </h2>
        </Link>
      </div>
      <div className=" relative ml-32 bg-black bg-opacity-50 rounded-2xl p-2 text-center">
        <ul className=" relative flex gap-12 text-white">
          <li
            className="relative group cursor-pointer "
            onClick={() => navigate("/")}
          >
            <Link
              to="/"
              className="block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:bottom-0 after:left-1/2 after:transition-all after:duration-200 after:ease-in-out group-hover:after:w-full group-hover:after:left-0"
            >
              Home
            </Link>
          </li>
          <li
            className="relative group cursor-pointer"
            onClick={() => {
              user?.email ? navigate("/profile") : navigate("/signup");
            }}
          >
            <Link
              to={navigate}
              className="block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:bottom-0 after:left-1/2 after:transition-all after:duration-200 after:ease-in-out group-hover:after:w-full group-hover:after:left-0"
            >
              Profile
            </Link>
          </li>
          <li
            className="relative group cursor-pointer"
            onClick={() => navigate("/products")}
          >
            <Link
              to="/products"
              className="block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:bottom-0 after:left-1/2 after:transition-all after:duration-200 after:ease-in-out group-hover:after:w-full group-hover:after:left-0"
            >
              Products
            </Link>
          </li>
          <li
            className="relative group cursor-pointer"
            onClick={() => navigate("/admin")}
          >
            <Link
              to="/admin"
              className="block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 after:bottom-0 after:left-1/2 after:transition-all after:duration-200 after:ease-in-out group-hover:after:w-full group-hover:after:left-0"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 pr-6 ">
        <button className="relative inline-block px-3 py-2 text-black font-medium uppercase tracking-wide rounded-3xl bg-yellow-500 overflow-hidden group transition-all duration-300 ease-in-out">
          <span className="relative z-10">
            <Link to={"/signup"}>SIGN UP</Link>
          </span>
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]"></span>
        </button>
        <button className="relative inline-block px-5 py-2 text-black font-medium uppercase tracking-wide rounded-3xl bg-yellow-500 overflow-hidden group transition-all duration-300 ease-in-out">
          <span className="relative z-10">
            <Link to={"/login"}>LOGIN</Link>
          </span>
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]"></span>
        </button>
      </div>
    </div>
  );
}
