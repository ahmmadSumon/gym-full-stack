'use client';

import { useState } from "react";
import Image from "next/image";

const plans = [
    {
      title: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        '1 free group class/week',
      ],
    },
    {
      title: 'Standard',
      price: '$49',
      period: 'per month',
      features: [
        'All Basic features',
        'Unlimited group classes',
        'Nutrition consultation',
        '1 Personal training session',
      ],
    },
    {
      title: 'Premium',
      price: '$79',
      period: 'per month',
      features: [
        'All Standard features',
        '5 Personal training sessions',
        'Priority support',
        '24/7 Access',
      ],
    },
  ]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interests: {
      personalTraining: false,
      groupClasses: false,
      membershipPlans: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.interests) {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add submission logic here (e.g., send to API)
  };

  return (
    <section className="bg-black text-white py-16 px-4">
         <div className="relative w-full h-[40vh]">
        <Image
          src="/img/3.jpg" // 🔁 Replace with your own hero image
          alt="Trainers Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase">
          Contact Us
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-5">
      <h1 className="text-white text-xl md:text-2xl mb-5 font-extrabold uppercase">
          Please fill up, so we can contact. Thank you.
          </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              value={formData.message}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            />
          </div>

          {/* Interests Checkboxes */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              What are you interested in?
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="personalTraining"
                  checked={formData.interests.personalTraining}
                  onChange={handleChange}
                  className="accent-red-600"
                />
                Basic
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="groupClasses"
                  checked={formData.interests.groupClasses}
                  onChange={handleChange}
                  className="accent-red-600"
                />
               Standard
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="membershipPlans"
                  checked={formData.interests.membershipPlans}
                  onChange={handleChange}
                  className="accent-red-600"
                />
                Premium
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-700 hover:bg-red-800 rounded font-semibold text-white"
          >
            Submit
          </button>
        </form>
      </div>

      <section className="py-16 px-6 max-w-6xl mx-auto ">
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
            >
              <h2 className="text-2xl text-black font-bold mb-2">{plan.title}</h2>
              <div className="text-4xl font-extrabold text-red-700 mb-2">
                {plan.price}
              </div>
              <p className="text-black mb-6">{plan.period}</p>
              <ul className="space-y-3 text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-black">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
