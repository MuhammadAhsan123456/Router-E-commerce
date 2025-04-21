import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: '',
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const docRef = doc(db, 'products', editId);
      await updateDoc(docRef, form);
      setEditId(null);
    } else {
      await addDoc(collection(db, 'products'), form);
    }
    setForm({ name: '', price: '', description: '', imageUrl: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
    setEditId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{editId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input name="name" onChange={handleChange} value={form.name} placeholder="Product Name" className="w-full border p-2 rounded" />
        <input name="price" onChange={handleChange} value={form.price} placeholder="Price" className="w-full border p-2 rounded" />
        <textarea name="description" onChange={handleChange} value={form.description} placeholder="Description" className="w-full border p-2 rounded" />
        <input name="imageUrl" onChange={handleChange} value={form.imageUrl} placeholder="Image URL" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? 'Update Product' : 'Add Product'}
        </button>
        {editId && (
          <button type="button" onClick={() => {
            setEditId(null);
            setForm({ name: '', price: '', description: '', imageUrl: '' });
          }} className="ml-2 bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-2xl font-bold mt-10 mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow-md">
            <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">Rs {product.price}</p>
            <p className="text-sm mt-2">{product.description}</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => handleEdit(product)} className="bg-yellow-400 px-3 py-1 rounded text-white">Edit</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
