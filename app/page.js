'use client'
import {useRef} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import ReactLenis from '@studio-freight/react-lenis';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


const Card = ({ title, description,button, index }) => {
  return (
   
    <div
      className="card  w-full h-screen mx-auto border rounded-lg overflow-hidden shadow-lg"
      id={`card-${index + 1}`}
    >
      <div className="card-inner bg-amber-600 relative w-full h-full">
        <Image
          src="/img/bodt.jpg"
          alt="Card background"
          fill
          className="object-cover"
          priority
        />
         <div className="relative z-10 flex flex-col gap-7  justify-center items-center h-full bg-black/50 text-white text-center px-4">
    <h1 className="text-5xl font-extrabold">{title}</h1>
    <h5 className="text-2xl md:text-5xl font-extrabold">{description}</h5>
    <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-2xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
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
  {/* YouTube video iframe with absolute positioning */}
  <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  <div className="w-full h-full scale-x-125 transition-transform duration-[5000ms] ease-in-out">
  <iframe
  src="https://www.youtube.com/embed/GsPvopOOyBs?autoplay=1&mute=1&controls=0&loop=1&playlist=GsPvopOOyBs&modestbranding=1&showinfo=0&rel=0&end=57&start=1"
  className="w-full h-full"
  title="Fitness Cinematic video"
  allow="autoplay; encrypted-media"
  frameBorder="0"
  allowFullScreen
/>


  </div>
</div>

  {/* Overlay content */}
  <div className="relative z-10 flex flex-col gap-7  justify-center items-center h-full bg-black/50 text-white text-center px-4">
    <h1 className="text-5xl font-extrabold">Build your tomorrow</h1>
    <h5 className="text-2xl md:text-5xl font-extrabold">Train Hard. Stay Strong. Transform Yourself.</h5>
    <button className="relative rounded-full px-6 py-3 bg-red-800 text-white text-2xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Start Today
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Start Today
    </span>
  </button>
  </div>
</section>

    <section className="intro bg-green-950 h-screen w-full text-center flex justify-center items-center">
      <h1>hello</h1>
      </section> 
    <section className="cards  w-full  ">
      {cards.map((card, index) => (
         <Card key={index} index ={index} title={card.title} description={card.description} button={card.button}/>
      ))}
      </section> 
    <section className="outro h-screen bg-emerald-950"></section> 
    
   </div>
   </ReactLenis>
  );
}
