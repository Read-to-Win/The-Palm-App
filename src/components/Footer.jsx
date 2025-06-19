import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-600">The Palm</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-emerald-600">Home</a></li>
            <li><a href="#" className="hover:text-emerald-600">Shop</a></li>
            <li><a href="#" className="hover:text-emerald-600">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-600">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: thepalmshoppingcenter@gmail.com</p>
          <p className="text-sm">Phone: +233 50 945 9284</p>
          <p className="text-sm">Location: Accra, Ghana</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        &copy; {new Date().getFullYear()} The Palm. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer