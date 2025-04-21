import React from 'react';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const ProductList = ({ products, fetchProducts, setEditProduct }) => {
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    fetchProducts();
  };

  return (
    <div className=" mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            {/* Image width increased to full */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-64 object-cover" // Image width and height adjusted
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-3">${item.price}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => setEditProduct(item)}
                  className="bg-yellow-400 px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
