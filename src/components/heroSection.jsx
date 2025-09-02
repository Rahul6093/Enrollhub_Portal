import { useState, useEffect } from "react";

const slides = [
  {
    id: "slide1",
    bg: "/hero1.jpg",
    title: "Unlock Your Potential",
    desc: "Join expert-led tuition, yoga, sports, fitness, and more — online.",
  },
  {
    id: "slide2",
    bg: "/hero2.jpg",
    title: "Expert-Led Coaching",
    desc: "Personalized programs designed for your academic and personal growth.",
  },
  {
    id: "slide3",
    bg: "/hero3.jpg",
    title: "Skill Up Anytime",
    desc: "Flexible, interactive sessions across a range of life skills.",
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <div className="relative z-20 flex flex-col space-y-5 items-center justify-center h-full w-full text-center px-4 text-white font-['Petrona']">
              <p className="text-5xl md:text-7xl mb-4">{slide.title}</p>
              <p className="text-xl max-w-2xl mx-auto">{slide.desc}</p>
              <div className="flex gap-5">
                <a className="py-1 px-3 bg-[#ff0] hover:bg-yellow-400 font-medium text-sm text-neutral-800 rounded-full" href="#">
                  Get Started
                </a>
                <a className="py-1 px-3 border border-[#ff0] hover:border-yellow-400 hover:text-yellow-400 font-medium text-[#ff0] text-sm rounded-full" href="#services">
                  Explore programs
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
