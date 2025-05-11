'use client'

import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo"
import { DraggableCardDemo } from "@/components/DraggableCardDemo"
import ReactLenis from "@studio-freight/react-lenis"
import Link from "next/link"

export default function MembershipPage() {
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

  return (
    <ReactLenis root>
    <div className="min-h-screen bg-black text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-[url('/img/3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase">
            Membership Plans
          </h1>
        </div>
      </div>

      {/* Plans Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto ">
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <div className="text-4xl font-extrabold text-red-700 mb-2">
                {plan.price}
              </div>
              <p className="text-gray-500 mb-6">{plan.period}</p>
              <ul className="space-y-3 text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-red-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-800 transition">
                <Link href='/contact'>
                Join Now
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
       <section className="outro  bg-black flex flex-col justify-center items-center  ">
          
           
            <CardHoverEffectDemo/>
            </section> 
              <section className='bg-black flex flex-col justify-center items-center mt-[200px] md:mt-0'>
                  <h1 className="text-xl md:text-6xl font-bold text-gray-900 bg-black leading-tight mb-10  relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">HAPPY CLIENTS</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></span>
                </h1>
                    <DraggableCardDemo/>
                  </section>
    </div>
    </ReactLenis>
  )
}
