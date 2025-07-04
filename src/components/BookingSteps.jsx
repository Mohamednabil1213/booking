import React from 'react';
import { FaUserPlus, FaUtensils, FaCheckCircle, FaClock, FaCrown, FaChair } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus className="text-red-500 text-4xl mb-3" />,
    title: 'أنشئ حسابك',
    desc: 'سجّل بياناتك لبدء تجربة الحجز بسهولة.',
  },
  {
    icon: <FaUtensils className="text-red-500 text-4xl mb-3" />,
    title: 'اختر المطعم أو الفندق',
    desc: 'تصفح العروض والمطاعم المميزة.',
  },
  {
    icon: <FaCheckCircle className="text-red-500 text-4xl mb-3" />,
    title: 'احجز الطاولة المناسبة',
    desc: 'حدد الوقت والمكان واحصل على تأكيد فوري.',
  },
];
const features = [
  {
    icon: <FaClock className="text-red-500 text-4xl mb-3" />,
    title: 'سرعة في الحجز',
    description: 'نظام سهل وسريع يتيح لك تأكيد حجزك خلال دقائق.',
  },
  {
    icon: <FaChair className="text-red-500 text-4xl mb-3" />,
    title: 'طاولات متنوعة',
    description: 'اختر من بين مجموعة كبيرة من الطاولات المناسبة لكل المناسبات.',
  },
  {
    icon: <FaCrown className="text-red-500 text-4xl mb-3" />,
    title: 'خدمات VIP',
    description: 'استمتع بتجربة فاخرة وخدمة مخصصة لضيوفنا المميزين.',
  },
];

const BookingSteps = () => {
  return (
    <><section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          لماذا تحجز معنا؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl w-full cursor-pointer transition-all"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section><section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">كيف يتم الحجز؟</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl w-full md:w-1/3 transition-all cursor-pointer"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section></>
  );
};

export default BookingSteps;
