import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <>
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
    {
      title: "Strength Training",
      description:
        "Build muscle and improve overall strength through guided weightlifting and resistance training sessions.",
      link: "/course",
    },
    {
      title: "HIIT (High Intensity Interval Training)",
      description:
        "A fast-paced workout program combining short bursts of intense exercise with rest or low-intensity recovery.",
      link: "/course",
    },
    {
      title: "Yoga & Flexibility",
      description:
        "Enhance flexibility, balance, and mental clarity with expert-led yoga sessions suitable for all levels.",
      link: "/course",
    },
    {
      title: "Cardio Burn",
      description:
        "Boost your heart health and burn calories with high-energy cardio routines including cycling, running, and more.",
      link: "/course",
    },
    {
      title: "Functional Fitness",
      description:
        "Train your body to handle real-life movements and activities with strength, mobility, and coordination exercises.",
      link: "/course",
    },
    {
      title: "Core & Abs",
      description:
        "Target your midsection and build a stronger core with a variety of abdominal workouts and stability training.",
      link: "/course",
    },
  ];
  
