// components/VerticalCarousel.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const carouselItems = [
  { id: 1, title: 'Item 1', content: 'Content for Item 1' },
  { id: 2, title: 'Item 2', content: 'Content for Item 2' },
  { id: 3, title: 'Item 3', content: 'Content for Item 3' },
  { id: 4, title: 'Item 4', content: 'Content for Item 4' },
  { id: 5, title: 'Item 5', content: 'Content for Item 5' },
]

const VerticalCarousel = () => {
  const [scrollY, setScrollY] = useState(0)
  
  const carouselRef = useRef<HTMLDivElement 

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollY(carouselRef.current.scrollTop)
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll)
    }
    
    // Clean up event listener on component unmount
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="h-screen overflow-hidden relative bg-gray-100">
      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className="h-full overflow-y-scroll p-6 space-y-6"
      >
        {carouselItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: scrollY / 2 - idx * 100, // Adjust vertical scroll position
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center rounded-xl bg-white shadow-lg p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCarousel
