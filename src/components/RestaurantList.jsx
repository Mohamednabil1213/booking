import React from 'react';


const restaurants = [
  {
    name: 'مطعم النخيل',
    image: 'https://cdn.pixabay.com/photo/2024/08/04/15/47/ai-generated-8944735_640.jpg',
    rating: 4,
  },
  {
    name: 'فندق الريان',
    image: 'https://cdn.pixabay.com/photo/2013/06/09/06/07/meat-123668_1280.jpg',
    rating: 5,
  },
  {
    name: 'بيتزا تايم',
    image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    rating: 3,
  },
   {
    name: 'مطعم السلطان',
    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    rating: 5,
  },
  {
    name: 'فندق الماسة',
    image: 'https://cdn.pixabay.com/photo/2018/11/16/17/48/chips-3819922_960_720.jpg',
    rating: 4,
  },
  {
    name: 'ركن المشويات',
    image: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    rating: 4,
  },
];



const RestaurantList = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">المطاعم والفنادق</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="rounded-xl h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
            <div className="text-yellow-400 mb-3">
              {'★'.repeat(restaurant.rating)}{'☆'.repeat(5 - restaurant.rating)}
            </div>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              تفاصيل
            </button>
          </div>

        ))}
      </div>
      <button className="mt-10 text-red-500 hover:underline">عرض المزيد</button>
    </section>
  );
};

export default RestaurantList;
