import React from 'react'
import { useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-gray-500 text-lg text-center py-12">Your cart is empty</div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center py-4">
                <img
                  src={item.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80/${item.imageId}` : 'https://via.placeholder.com/60'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg border mr-4"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                  <div className="text-sm text-gray-500">{item.category || ''}</div>
                </div>
                <span className="font-bold text-orange-600 text-lg">{item.price ? `₹${item.price/100}` : ''}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-xl text-gray-700">Total Items: {cartItems.length}</span>
            <span className="font-bold text-xl text-green-600">Total: ₹{cartItems.reduce((sum, item) => sum + (item.price || 0), 0)/100}</span>
          </div>
        </>
      )}
      <div className="flex justify-center gap-6 mt-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition">Checkout</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
