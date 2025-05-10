'use client'

import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import ReactLenis from '@studio-freight/react-lenis'
import Image from 'next/image'

export default function TrainersPage() {
 
  return (
    <ReactLenis root>
    <div className="min-h-screen bg-black text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/img/2.jpg" // 🔁 Replace with your own hero image
          alt="Trainers Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase">
            Trainers
          </h1>
        </div>
      </div>

      {/* Trainers Section */}
       <section className="intro bg-black  w-full text-center  flex flex-col justify-center items-center">
          <div className=''>
          <AnimatedTestimonialsDemo/>
          </div>
       
        
            </section> 
            <section className="outro  bg-black flex flex-col justify-center items-center mt-[50px] md:mt-0">
    
     
      <CardHoverEffectDemo/>
      </section> 
    </div>
    </ReactLenis>
  )
}
