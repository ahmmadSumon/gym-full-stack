'use client'
import {useRef} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import ReactLenis from '@studio-freight/react-lenis';
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo';
import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


const Card = ({ title, description,button, index }) => {
  const imageSrc = `/img/${index + 1}.jpg`; 
  return (
   
    <div
      className="card  w-full h-screen mx-auto border rounded-lg overflow-hidden shadow-lg"
      id={`card-${index + 1}`}

    >
      <div className="card-inner bg-amber-600 relative w-full h-full">
        <Image
          src={imageSrc}
          alt="Card background"
          fill
          className="object-cover"
          priority
        />
         <div className="relative z-10 flex flex-col gap-7  justify-center items-center h-full bg-black/50 text-white text-center px-4">
    <h1 className="text-5xl font-extrabold">{title}</h1>
    <h5 className="text-2xl md:text-5xl font-extrabold max-w-5xl">{description}</h5>
    <button className="relative rounded-full px-6 py-3 cursor-pointer bg-red-800 text-white text-2xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      {button}
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
   { button}
    </span>
  </button>
  </div>
      </div>
    </div>
  );
};



const cards = [
  {
    title: "Personal Training",
    description: "One-on-one personal training sessions tailored to your fitness goals.",
    button: "Program"
  },
  {
    title: "Trainers",
    description: "Join our group fitness classes for a fun and motivating workout experience.",
       button: "Trainers"

  },
  {
    title: "Membership",
    description: "Receive customized meal plans and nutritional advice from experts.",
        button: "Program"
  },
  {
    title: "Yoga & Meditation",
    description: "Enhance your flexibility, balance, and mental well-being with yoga and meditation.",
        button: "Contact"
  },
  {
    title: "Fitness Challenges",
    description: "Participate in exciting fitness challenges and track your progress.",
        button: "Book a Call"
  }
];


export default function Home() {

  const container = useRef()
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card')
    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 7%",
      endTrigger: cards[cards.length -1],
      end:"top 60%",
      pin: '.intro',
      pinSpacing: false
    })

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length -1;
      const cardInner = card.querySelector('.card-inner')

      if(!isLastCard){
        ScrollTrigger.create({
          trigger: card,
          start: "top 7%",
          endTrigger: ".outro",
          end: 'top 105%',
          pin:true,
          pinSpacing:false
        })
      }
    })

  

  
  }, {scope: container})
  return (
    <ReactLenis root>
   <div className="app" ref={container}>
   <section className="hero w-full h-screen relative overflow-hidden">
      {/* Desktop Video Background */}
      <div className="absolute top-0 left-0 w-full h-full scale-x-110 z-0 pointer-events-none overflow-hidden hidden md:block">
        <iframe
          src="https://www.youtube.com/embed/Sc7LUjbKBHw?autoplay=1&mute=1&controls=0&loop=1&playlist=Sc7LUjbKBHw&modestbranding=1&showinfo=0&rel=0"
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-110 object-center"
          title="Desktop Fitness Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Mobile Image Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 block md:hidden">
        <Image
          src="/img/1.jpg" // Replace with your image path
          alt="Mobile Fitness Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col gap-7 justify-center items-center h-full bg-black/50 text-white text-center px-4">
        <h1 className="text-4xl md:text-7xl font-extrabold">Build your tomorrow</h1>
        <h5 className="text-2xl md:text-5xl font-extrabold">Train Hard. Stay Strong. Transform Yourself.</h5>
        <button className="relative cursor-pointer rounded-full px-6 py-3 bg-red-800 text-white text-2xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
          <span className="relative z-10 block bg-transparent transition-transform duration-300 group-hover:-translate-y-15">
            Start Today
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Start Today
          </span>
        </button>
      </div>
    </section>


    <section className="intro bg-black h-screen w-full text-center flex flex-col justify-center items-center">
    <h1 className="text-2xl md:text-6xl font-bold  leading-tight mb-5 pb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">MEET OUR TRAINERS</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></span>
    </h1>
    <AnimatedTestimonialsDemo/>
      </section> 
    <section className="cards  w-full min-h-[200vh] ">
      {cards.map((card, index) => (
         <Card key={index} index ={index} title={card.title} description={card.description} button={card.button}/>
      ))}
      </section> 
    <section className="outro h-screen bg-black flex flex-col justify-center items-center mt-[1050px] md:mt-0">
    <h1 className="text-xl md:text-6xl font-bold text-gray-900 bg-black leading-tight mb-5 pb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">OUR PROGRAM</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></span>
    </h1>
     
      <CardHoverEffectDemo/>
      </section> 
    
   </div>
   </ReactLenis>
  );
}
