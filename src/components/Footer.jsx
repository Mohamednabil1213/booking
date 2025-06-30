import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        <ul className="flex space-x-6 rtl:space-x-reverse text-sm">
          <li><a href="#" className="hover:text-red-400">سياسة الخصوصية</a></li>
          <li><a href="#" className="hover:text-red-400">اتصل بنا</a></li>
          <li><a href="#" className="hover:text-red-400">حول الموقع</a></li>
        </ul>

        <div className="flex space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:text-red-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-red-400"><FaTwitter /></a>
          <a href="#" className="hover:text-red-400"><FaInstagram /></a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
