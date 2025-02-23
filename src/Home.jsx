import NewProduct from "./component/Pages/NewProduct";
import Product from "./component/Pages/Pupolar";
export default function Home() {
  return (
    <div className="text-white">
      <Product />
      <NewProduct />
    </div>
  );
}
