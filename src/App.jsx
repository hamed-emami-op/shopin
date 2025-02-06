import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./component/form/SignUp";
import Login from "./component/form/login";
import Profile from "./component/form/Profile";
import AdminPanel from "./AdminPanel";
import Cart from "./component/Cart";
import Home from "./Home";
import Header from "./component/Header/Header";
import Products from "./component/Products";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
