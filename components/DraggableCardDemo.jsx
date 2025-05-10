import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

export function DraggableCardDemo() {
  const reviews = [
    {
      title: "Sarah Ahmed",
      image: "/client/1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      comment: "The trainers are super supportive! I feel stronger every week.",
      stars: 5,
    },
    {
      title: "Michael Chowdhury",
      image: "/client/2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      comment: "Great atmosphere, expert trainers. Best gym in town!",
      stars: 5,
    },
    {
      title: "Aisha Rahman",
      image: "/client/3.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      comment: "I love the personal attention I get during every session.",
      stars: 4,
    },
    {
      title: "Omar Siddiqui",
      image: "/client/4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      comment: "Highly professional trainers and amazing workout programs.",
      stars: 5,
    },
    {
      title: "Emily Khan",
      image: "/client/5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      comment: "Very clean, very welcoming. Perfect for beginners and pros!",
      stars: 4,
    },
    {
      title: "Hassan Malik",
      image: "/client/6.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      comment: "Helped me transform my body in just 3 months. Incredible!",
      stars: 5,
    },
    {
      title: "Jennifer Islam",
      image: "/client/7.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      comment: "The bootcamps are fun and effective. I never miss a class!",
      stars: 4,
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If it's your first day at Fight Club, you have to fight.
      </p>
      {reviews.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <h5 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.comment}
          </h5>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
