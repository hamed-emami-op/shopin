import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase"; // مسیر فایل firebase رو چک کن

// 1. ایجاد context
const ProductsContext = createContext();

// 2. ساخت Provider برای محصولات
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تابع دریافت محصولات از Firebase
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productall")); // نام کالکشن رو چک کن
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

// 3. هوک برای استفاده از محصولات
export const useProducts = () => {
  return useContext(ProductsContext);
};
