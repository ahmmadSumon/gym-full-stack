'use client';

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import ReactLenis from "@studio-freight/react-lenis";
import Link from "next/link";

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
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: {
      strengthTraining: false,
      hiit: false,
      yoga: false,
      cardio: false,
      basic: false,
      standard: false,
      premium: false,
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
  };

  return (
    <ReactLenis root>
    <section className="bg-black text-white py-16 px-4">
      {/* Hero */}
      <div className="relative w-full h-[40vh] ">
        <Image
          src="/img/3.jpg"
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

      {/* Form */}
      <div className="max-w-2xl  mx-auto mt-10">
        <h2 className="text-xl md:text-2xl mb-5 text-center font-extrabold uppercase">
          Please fill up, so we can contact. Thank you.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <Label className="text-white"  htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder = "Ex: Tyler Durden"
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <div>
            <Label  className="text-white" htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder = "Ex: tylerdurden@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <div>
            <Label  className="text-white" htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <div>
            <Label  className="text-white" htmlFor="message">Message</Label>
            <Textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          {/* Checkboxes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="mb-2 block text-white text-xl">Programs</Label>
              <div className="space-y-2 ">
                {[
                  ["strengthTraining", "Strength Training"],
                  ["hiit", "HIIT"],
                  ["yoga", "Yoga & Flexibility"],
                  ["cardio", "Cardio Burn"],
                ].map(([name, label]) => (
                  <div key={name} className="flex text-white items-center gap-2">
                    <Checkbox
                      id={name}
                      name={name}
                      checked={formData.interests[name ]}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          interests: {
                            ...prev.interests,
                            [name]: !!checked,
                          },
                        }))
                      }
                    />
                    <Label className="text-white" htmlFor={name}>{label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-2 block text-xl text-white">Membership Plans</Label>
              <div className="space-y-2">
                {[
                  ["basic", "Basic"],
                  ["standard", "Standard"],
                  ["premium", "Premium"],
                ].map(([name, label]) => (
                  <div key={name} className="flex text-xl items-center gap-2">
                    <Checkbox
                      id={name}
                      name={name}
                      checked={formData.interests[name]}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          interests: {
                            ...prev.interests,
                            [name]: !!checked,
                          },
                        }))
                      }
                    />
                    <Label className="text-white" htmlFor={name}>{label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-lg font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">

              <Link href="/account">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Submit
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   Submit
    </span>
    </Link>
  </button>
        </form>
      </div>

      {/* Pricing Plans */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
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
              <Button className="bg-red-700 hover:bg-red-800 w-full">Join Now</Button>
            </div>
          ))}
        </div>
      </section>
    </section>
    </ReactLenis>
  );
}
