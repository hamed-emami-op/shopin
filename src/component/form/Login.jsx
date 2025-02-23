// Login.jsx
import { useState } from "react";
import { auth, provider } from "../firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // بعد از ورود موفق، به صفحه پروفایل هدایت می‌شود
    } catch (err) {
      setError(err.message);
    }
  };
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
  sessionStorage;
  return (
    <div
      className="pt-20 h-screen w-full flex justify-center items-center "
      style={{ backgroundImage: "url(/index.svg)" }}
    >
      <div className="backdrop-blur-md px-[35em] pb-40 pt-28 rounded-3xl flex justify-center items-center  border-4 border-white/30">
        <div className="w-[30em] h-[34em] bg-white/10 border border-white/30 rounded-xl backdrop-blur-md shadow-lg px-10 py-8 text-white ">
          <h2 className="pb-4 font-semibold text-4xl">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              className=" rounded-md w-full h-9 pl-2 mb-10 outline-white text-black"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
              className=" rounded-md w-full h-9 pl-2 outline-white text-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-white mb-10 mt-4">
              <Link to={""}>Forgot Password ?</Link>
            </p>
            <button
              type="submit"
              className="bg-[#BD0C47] w-full p-2 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>
          {error && <p>{error}</p>}
          <p className="text-center pt-4"> or continue with </p>
          <div>
            <button
              className="w-full mt-6 bg-white h-10 rounded-lg flex justify-center items-center"
              onClick={signInWithGoogle}
            >
              <svg
                width="24"
                height="24"
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
          </div>
          <p className="pt-6 text-center">
            <Link to={"/signup"}>
              Don`t have an account yet ? Register for free{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
