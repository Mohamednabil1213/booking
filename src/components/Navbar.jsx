import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [user, setUser] = useState({ email: '', username: '' });
  const [showAuth, setShowAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentEmail = localStorage.getItem('currentUser');
    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (currentEmail && allUsers[currentEmail]) {
      setUser({ email: currentEmail, username: allUsers[currentEmail].username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser({ email: '', username: '' });
    setMenuOpen(false);
  };

  const handleLoginSuccess = () => {
    const currentEmail = localStorage.getItem('currentUser');
    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (currentEmail && allUsers[currentEmail]) {
      setUser({ email: currentEmail, username: allUsers[currentEmail].username });
    }
    setShowAuth(false);
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <li><a href="#" className="hover:text-red-500 block py-2">الرئيسية</a></li>
      <li><a href="#" className="hover:text-red-500 block py-2">عن الموقع</a></li>
      <li><a href="#" className="hover:text-red-500 block py-2">المطاعم</a></li>
    </>
  );

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-red-500">حجوزاتي</div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul className="hidden md:flex gap-6 items-center text-sm">
            {navLinks}
            {user.email ? (
              <>
                <span className="text-gray-600 hidden md:inline">مرحبًا، {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                تسجيل الدخول
              </button>
            )}
          </ul>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-2 text-sm">
              {navLinks}
              {user.email ? (
                <>
                  <li className="text-gray-700">مرحبًا، {user.username}</li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
                    >
                      تسجيل الخروج
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      setShowAuth(true);
                      setMenuOpen(false);
                    }}
                    className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    تسجيل الدخول
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>

      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md relative">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <AuthForm onSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
