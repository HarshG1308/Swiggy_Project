import React from 'react'

function Offer() {
  return (
      <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Latest Offers & Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl flex flex-col justify-between shadow">
          <h2 className="text-xl font-semibold mb-2">Flat 50% Off</h2>
          <p className="text-gray-700 mb-2">Get flat 50% off on your first order above ₹199. Use code <span className="font-bold text-orange-600">FIRST50</span>.</p>
          <span className="text-xs text-gray-500">Valid till 30th June 2025</span>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl flex flex-col justify-between shadow">
          <h2 className="text-xl font-semibold mb-2">Free Delivery</h2>
          <p className="text-gray-700 mb-2">Enjoy free delivery on all orders above ₹299. No code required!</p>
          <span className="text-xs text-gray-500">Valid for select restaurants</span>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl flex flex-col justify-between shadow">
          <h2 className="text-xl font-semibold mb-2">Bank Offers</h2>
          <p className="text-gray-700 mb-2">10% instant discount on HDFC, ICICI, and SBI cards. Use code <span className="font-bold text-blue-600">BANK10</span>.</p>
          <span className="text-xs text-gray-500">T&C apply</span>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl flex flex-col justify-between shadow">
          <h2 className="text-xl font-semibold mb-2">Refer & Earn</h2>
          <p className="text-gray-700 mb-2">Refer a friend and get ₹100 Swiggy credits when they place their first order.</p>
          <span className="text-xs text-gray-500">No limit on referrals</span>
        </div>
      </div>
    </div>
  )
}

export default Offer
