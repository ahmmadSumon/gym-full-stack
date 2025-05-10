'use client'

import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import ReactLenis from '@studio-freight/react-lenis'
import Image from 'next/image'

export default function ProgramsPage() {
  return (
    <ReactLenis root>
    <div className="min-h-screen bg-black text-gray-800">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/img/1.jpg" // 📸 Replace with your actual image
          alt="Programs Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase">
            Programs
          </h1>
        </div>
      </div>

      {/* Programs Content Section */}
      <section className="outro h-screen bg-black flex flex-col justify-center items-center mt-[500px] md:mt-0">
    <h1 className="text-xl md:text-6xl font-bold text-gray-900 bg-black leading-tight mb-5 pb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">OUR PROGRAM</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></span>
    </h1>
     
      <CardHoverEffectDemo/>
      </section> 
    </div>
    </ReactLenis>
  )
}
