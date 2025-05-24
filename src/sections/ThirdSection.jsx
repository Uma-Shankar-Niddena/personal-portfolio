import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/thirdsection.css";

const AboutMe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax effect for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="about-section">
      <motion.div className="background" style={{ y: bgY }} />
      
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Who Am I?
      </motion.h2>
      
      <motion.p 
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        As you move deeper into the journey, my story unfolds...
      </motion.p>
      
      <motion.p 
        className="about-text deeper"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        From challenges to growth, here’s what shaped me into who I am today.
      </motion.p>
    </section>
  );
};

export default AboutMe;