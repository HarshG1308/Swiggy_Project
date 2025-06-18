import React from 'react'

function Help() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Help & Support</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><span className="font-semibold">How do I place an order?</span> <br/>Browse restaurants, add items to your cart, and proceed to checkout.</li>
          <li><span className="font-semibold">How can I track my order?</span> <br/>Go to 'My Orders' to see real-time updates on your delivery.</li>
          <li><span className="font-semibold">What payment methods are accepted?</span> <br/>We accept UPI, credit/debit cards, net banking, and cash on delivery.</li>
          <li><span className="font-semibold">How do I cancel or modify my order?</span> <br/>Contact support or use the 'My Orders' section before the restaurant confirms your order.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">For urgent help, call our 24x7 helpline: <span className="font-bold text-orange-500">1800-123-4567</span></p>
        <p className="text-gray-700">Or email us at <a href="mailto:support@swiggy.com" className="text-orange-500 underline">support@swiggy.com</a></p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border rounded-lg p-2" required />
          <input type="email" placeholder="Your Email" className="border rounded-lg p-2" required />
          <textarea placeholder="Describe your issue..." className="border rounded-lg p-2" rows={4} required></textarea>
          <button type="submit" className="bg-orange-500 text-white rounded-lg py-2 font-semibold hover:bg-orange-600 transition">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Help
