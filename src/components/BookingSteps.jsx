import React from 'react';
import { FaUserPlus, FaUtensils, FaCheckCircle } from 'react-icons/fa';

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

const BookingSteps = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">كيف يتم الحجز؟</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl hover:shadow-2xl w-full md:w-1/3 transition-all cursor-pointer"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSteps;
