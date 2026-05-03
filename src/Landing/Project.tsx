"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Placeholder data
const projects = [
  {
    id: 1,
    title: "DIGITAL AGENCY",
    year: "2021",
    tags: ["UI DESIGN", "MOBILE DEV"],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "ZENPOINT",
    year: "2022",
    tags: ["WEB DESIGN", "BRANDING"],
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "TIMBER ELEGANCE",
    year: "2023",
    tags: ["E-COMMERCE", "3D MODELING"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Project() {
  // --- CURSOR TRACKING LOGIC ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);
  // -----------------------------

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-slate-50 dark:bg-transparent transition-colors duration-500 py-32 cursor-none sm:cursor-auto z-10">
      
      {/* 🖱️ 1. CUSTOM TRAILING CURSOR (Subtle Ring) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm z-50 flex items-center justify-center hidden sm:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full opacity-80" />
      </motion.div>

      {/* 🌟 2. MOUSE SPOTLIGHT ORB (Highly Minimized) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] bg-indigo-400/5 dark:bg-indigo-500/5 rounded-full blur-[80px] -z-10 hidden sm:block mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🌟 3. AMBIENT FLUID BACKGROUND ANIMATIONS 🌟 */}
      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 80, -50, 40, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[0%] w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-20"
      />
      
      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, -150, 0, 100, 0],
          y: [0, -80, 40, -80, 0],
          scale: [1, 0.9, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-20"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Sticky Header */}
          <div className="lg:col-span-4 sticky top-32 z-10 flex flex-col gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1]"
            >
              Selected <br /> work
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <button className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 active:scale-95 transition-all duration-300">
                See All Projects
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Nested Grid for the 1 Big / 2 Small layout */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`group flex flex-col gap-5 cursor-none sm:cursor-pointer ${
                  index === 0 ? "sm:col-span-2" : "col-span-1"
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1, 
                }}
              >
                {/* Image Container */}
                <div 
                  className={`w-full relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-none ${
                    index === 0 ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.25,1,0.5,1]"
                  />
                  
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-900/40 transition-colors duration-500 pointer-events-none z-10"></div>

                  {/* Floating Action Button (Shows on hover) */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl pointer-events-none z-20">
                    <ArrowUpRight className="w-6 h-6 text-slate-900 dark:text-white" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-3 px-1">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 uppercase">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-300 bg-white/60 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}