import React from 'react';

const Hero = () => {
  return (
    <header className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          احجز طاولتك بسهولة، سرعة، وراحة
        </h1>
        <button className="bg-red-500 px-6 py-3 text-white text-lg rounded hover:bg-red-600 transition">
          ابدأ الاستكشاف
        </button>
      </div>
    </header>
  );
};

export default Hero;
