
"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

// Science-themed images
const scienceImages = [
  {
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "DNA Structure",
    field: "Genetics"
  },
  {
    url: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Neural Network",
    field: "AI & Machine Learning"
  },
  {
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Space Exploration",
    field: "Astronomy"
  },
  {
    url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Microscopic View",
    field: "Microbiology"
  },
  {
    url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Laboratory Research",
    field: "Chemistry"
  },
  {
    url: "https://images.unsplash.com/photo-1581093196277-9f608732013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Quantum Computing",
    field: "Quantum Physics"
  },
  {
    url: "https://images.unsplash.com/photo-1634467499437-88764c41ac5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Medical Research",
    field: "Medicine"
  },
  {
    url: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Climate Science",
    field: "Environmental Science"
  },
];

export function ScienceImagesParallax() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <div
      className="absolute inset-0 w-full h-full flex justify-center items-center overflow-hidden"
      ref={scope}
    >
      <Floating sensitivity={-1} className="overflow-hidden w-full h-full">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[0].url}
            alt={scienceImages[0].title}
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-cyan-500/30"
          />
        </FloatingElement>
        
        <FloatingElement depth={1} className="top-[15%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[1].url}
            alt={scienceImages[1].title}
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-blue-500/30"
          />
        </FloatingElement>
        
        <FloatingElement depth={2} className="top-[2%] left-[60%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[2].url}
            alt={scienceImages[2].title}
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-cyan-400/30"
          />
        </FloatingElement>
        
        <FloatingElement depth={1} className="top-[5%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[3].url}
            alt={scienceImages[3].title}
            className="w-20 h-20 md:w-36 md:h-36 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-blue-400/30"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[4%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[4].url}
            alt={scienceImages[4].title}
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-cyan-500/30"
          />
        </FloatingElement>
        
        <FloatingElement depth={2} className="top-[75%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[5].url}
            alt={scienceImages[5].title}
            className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-blue-500/30"
          />
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[6].url}
            alt={scienceImages[6].title}
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-cyan-400/30"
          />
        </FloatingElement>
        
        <FloatingElement depth={1} className="top-[65%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={scienceImages[7].url}
            alt={scienceImages[7].title}
            className="w-20 h-20 md:w-36 md:h-36 object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg border-2 border-blue-400/30"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
}
