import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
          quote:
            "Joining this gym was the best decision of my life. My personal trainer pushed me to achieve what I never thought possible!",
          name: "Ariana Blake",
          designation: "Fitness Enthusiast",
          src: "/img/client1.jpg",
        },
        {
          quote:
            "The one-on-one coaching sessions helped me lose 15kg in just 3 months. The motivation and support are unmatched.",
          name: "David Lee",
          designation: "Transformation Journey Client",
          src: "/img/client2.jpg",
        },
        {
          quote:
            "As a busy professional, the customized workout plans fit perfectly into my schedule. I feel stronger and more energized every day.",
          name: "Sophia Rahman",
          designation: "Corporate Executive",
          src: "/img/client3.jpg",
        },
        {
          quote:
            "Top-notch equipment, motivating environment, and trainers who really care. I’ve built muscle and confidence!",
          name: "Carlos Rivera",
          designation: "Amateur Bodybuilder",
          src: "/img/client4.jpg",
        },
        {
          quote:
            "The group classes are so fun and effective! I’ve met amazing people and reached my fitness goals faster than ever.",
          name: "Emily Zhang",
          designation: "Group Fitness Member",
          src: "/img/client5.jpg",
        },
      ];
      
    
  return <AnimatedTestimonials testimonials={testimonials} />;
}
