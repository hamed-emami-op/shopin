import { useState } from "react";
import { auth, provider } from "../firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [button, setButton] = useState(false);
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // اطلاعات کاربر در result.user موجود است
        console.log(result.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex justify-between items-center w-full h-[59em] bg-[#0F0F0F] pb-24 px-20 text-white">
      <div className="relative">
        <p className="text-8xl">Roll the Carpet.!</p>
        <p className=" italic border-4 font-sans my-4 inline-block p-4 text-4xl">
          Skip the lag ?
        </p>
      </div>
      <hr />
      <div className="w-[30em] h-[35em] relative">
        <div className="backdrop-blur-xl absolute border-[1px] rounded-3xl px-10 py-24 h-[45em] ">
          <p className="pb-4 font-semibold">SignUp</p>
          <p className="pb-2">Just Some details to get you in..!</p>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full rounded-md p-2 bg-transparent border-[1px] mb-6 font-serif"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full rounded-md p-2 bg-transparent border-[1px] mb-6 font-serif"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full rounded-md p-2 bg-transparent border-[1px] mb-6 font-serif"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                e.target.value === password
                  ? setButton(!button)
                  : setButton(button);
              }}
            />
            <button
              type="submit"
              className="text-center w-full p-2 bg-gradient-to-l from-blue-500 via-red-800  to-blue-800 rounded-lg mb-6"
            >
              Sign Up
            </button>
          </form>
          <div className="relative flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500 font-bold">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex justify-center gap-6">
            <button onClick={signInWithGoogle}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_4197)">
                  <path
                    d="M23.7662 9.64963H22.7996V9.59983H11.9998V14.3998H18.7815C17.7921 17.1939 15.1335 19.1997 11.9998 19.1997C8.02366 19.1997 4.79992 15.9759 4.79992 11.9998C4.79992 8.02366 8.02366 4.79992 11.9998 4.79992C13.8352 4.79992 15.5049 5.4923 16.7763 6.62329L20.1705 3.22914C18.0273 1.23178 15.1605 0 11.9998 0C5.37291 0 0 5.37291 0 11.9998C0 18.6267 5.37291 23.9996 11.9998 23.9996C18.6267 23.9996 23.9996 18.6267 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64963Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M1.38278 6.41449L5.32531 9.30584C6.3921 6.66468 8.97565 4.79992 11.999 4.79992C13.8344 4.79992 15.5041 5.4923 16.7755 6.62328L20.1697 3.22914C18.0265 1.23178 15.1597 0 11.999 0C7.38988 0 3.39275 2.60215 1.38278 6.41449Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M12 24C15.0995 24 17.9159 22.8138 20.0452 20.8848L16.3313 17.7421C15.0861 18.6891 13.5644 19.2013 12 19.2001C8.87884 19.2001 6.22868 17.2099 5.2303 14.4326L1.31717 17.4475C3.30313 21.3336 7.33627 24 12 24Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M23.7662 9.64964H22.7996V9.59984H11.9998V14.3998H18.7815C18.3082 15.7296 17.4557 16.8916 16.3293 17.7423L16.3311 17.7411L20.045 20.8838C19.7823 21.1226 23.9996 17.9997 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64964Z"
                    fill="#1976D2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_4197">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button onClick={""}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_47)">
                  <path
                    d="M42 21C42 9.40209 32.5979 0 21 0C9.40209 0 0 9.40193 0 21C0 31.4816 7.67944 40.1696 17.7188 41.7449V27.0703H12.3867V21H17.7188V16.3734C17.7188 11.1103 20.854 8.20312 25.6507 8.20312C27.9484 8.20312 30.3516 8.61328 30.3516 8.61328V13.7812H27.7036C25.0947 13.7812 24.2812 15.4001 24.2812 17.0609V21H30.1055L29.1744 27.0703H24.2812V41.7449C34.3206 40.1696 42 31.4818 42 21Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M29.1744 27.0703L30.1055 21H24.2812V17.0609C24.2812 15.3999 25.0948 13.7812 27.7036 13.7812H30.3516V8.61328C30.3516 8.61328 27.9484 8.20312 25.6507 8.20312C20.854 8.20312 17.7188 11.1103 17.7188 16.3734V21H12.3867V27.0703H17.7188V41.7449C18.8042 41.915 19.9013 42.0003 21 42C22.0987 42.0003 23.1958 41.915 24.2812 41.7449V27.0703H29.1744Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_47">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button onClick={""}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 0C9.3975 0 0 9.3975 0 21C0 30.2925 6.01125 38.1413 14.3587 40.9238C15.4087 41.1075 15.8025 40.4775 15.8025 39.9263C15.8025 39.4275 15.7763 37.7738 15.7763 36.015C10.5 36.9863 9.135 34.7287 8.715 33.5475C8.47875 32.9437 7.455 31.08 6.5625 30.5812C5.8275 30.1875 4.7775 29.2162 6.53625 29.19C8.19 29.1637 9.37125 30.7125 9.765 31.3425C11.655 34.5187 14.6738 33.6263 15.8813 33.075C16.065 31.71 16.6162 30.7913 17.22 30.2662C12.5475 29.7412 7.665 27.93 7.665 19.8975C7.665 17.6138 8.47875 15.7237 9.8175 14.2537C9.6075 13.7287 8.8725 11.5763 10.0275 8.68875C10.0275 8.68875 11.7863 8.1375 15.8025 10.8413C17.4825 10.3688 19.2675 10.1325 21.0525 10.1325C22.8375 10.1325 24.6225 10.3688 26.3025 10.8413C30.3188 8.11125 32.0775 8.68875 32.0775 8.68875C33.2325 11.5763 32.4975 13.7287 32.2875 14.2537C33.6263 15.7237 34.44 17.5875 34.44 19.8975C34.44 27.9562 29.5312 29.7412 24.8588 30.2662C25.62 30.9225 26.2763 32.1825 26.2763 34.1512C26.2763 36.96 26.25 39.2175 26.25 39.9263C26.25 40.4775 26.6438 41.1338 27.6938 40.9238C31.8628 39.5167 35.4856 36.8375 38.0521 33.2634C40.6185 29.6892 41.9993 25.4001 42 21C42 9.3975 32.6025 0 21 0Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <p className="text-center my-10 ">
            Already Registered ?{" "}
            <Link to={"/login"} className="hover:border-b-[1px]">
              Login
            </Link>
          </p>
          <div className="flex justify-between items-center">
            <p>
              <Link to={""}>Terms & Condition </Link>
            </p>
            <p>
              <Link to={""}>Support</Link>
            </p>
            <p>
              <Link to={""}>Customer Care </Link>
            </p>
          </div>
        </div>
        <svg
          className=" -mt-20 -ml-32"
          width="302"
          height="302"
          viewBox="0 0 302 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="151" cy="151" r="151" fill="url(#paint0_linear_1_8)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_8"
              x1="151"
              y1="0"
              x2="151"
              y2="302"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#190061" />
              <stop offset="1" stopColor="#0A1B30" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className=" mt-[350px] ml-[330px]"
          width="221"
          height="221"
          viewBox="0 0 221 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="110.157"
            cy="110.157"
            r="110"
            transform="rotate(-28.5 110.157 110.157)"
            fill="url(#paint0_linear_1_9)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_9"
              x1="110.157"
              y1="0.157387"
              x2="110.157"
              y2="220.157"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#000F61" />
              <stop offset="1" stopColor="#0A1730" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
