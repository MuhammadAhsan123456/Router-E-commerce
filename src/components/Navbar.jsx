import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Product', path: '/product' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyWebsite</div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow">
          <ul className="space-y-4 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block hover:text-blue-500 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
