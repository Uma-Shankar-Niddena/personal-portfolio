// AboutSection.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/secondsection.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: "0vh", x: "3vw", opacity: 1, scale: 0.8 },
      {
        y: "104vh",
        x: "67vw",
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% 30%",
          end: "180% 30%",
          scrub: 1.2,
          // Remove toggleActions to allow scrub to control smoothly
          // OR add pin:true if needed for consistency
        },
      }
    );
  
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none", // don’t reverse on scroll back
          // you can also try: toggleActions: "play pause none pause"
        },
      }
    );
  }, []);
  
  return (
    <section ref={sectionRef} id="about" className="relative z-[10] overflow-visible">
      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 md:px-16">
        <div ref={imgRef} className="w-full md:w-1/3 flex justify-center z-[9999]">
          <img
            src="/shankarLogo.jpg"
            alt="Uma Shankar"
            className="drop-shadow-lg w-40 h-40 sm:w-52 sm:h-52 md:w-full md:h-full object-cover rounded-full"
          />
        </div>
        <div ref={textRef} className="w-full md:w-2/3 text-center md:text-left sm:px-4 md:px-12 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            The Journey Begins
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-3xl leading-relaxed text-gray-300">
            They said I wouldn’t make it. But here I am—turning lines of code into
            <span className="text-blue-400"> reality</span>. I don’t just build websites. I create
            <span className="text-purple-400"> experiences</span>. Welcome to my world.
          </p>
          <div ref={buttonRef} className="hidden md:block">
            <button className="px-6 md:h-9 md:py-5 md:px-4 md:mt-5 text-sm md:text-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
              More about me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;