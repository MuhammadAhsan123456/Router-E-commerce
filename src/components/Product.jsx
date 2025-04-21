import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Navbar from './Navbar';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const items = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="max-w-xl mx-auto mt-10">
      {/* <h2 className="text-2xl font-bold mb-4 mt-7">Product Page</h2> */}
      <ProductForm fetchProducts={fetchProducts} editProduct={editProduct} setEditProduct={setEditProduct} />
      <ProductList products={products} fetchProducts={fetchProducts} setEditProduct={setEditProduct} />
    </div>
    </>
  );
};

export default Product;
