import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./component/firebase/Firebase";
export default function CatGoryCart() {
  const [products, setProducts] = useState([]);
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
  return (
    <div>
      <div>
        
      </div>
    </div>
  );
}
