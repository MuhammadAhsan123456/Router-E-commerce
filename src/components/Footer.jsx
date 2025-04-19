import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p className="text-xs mt-1 text-gray-400">Designed with 💙 in Pakistan</p>
      </div>
    </footer>
  );
};

export default Footer;
