"use client";

import React, { useEffect } from "react"; // Added React and useEffect
import { motion, useMotionValue, useSpring } from "framer-motion"; // Added useMotionValue and useSpring
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
// import Marquee from "react-fast-marquee"; // Back to the normal Vite import!
import Service from "./Service";
import Project from "./Project";

import Image1 from "../assets/image.jpg";
import GMail from "../assets/mail.png";
import Linkedin from "../assets/linkedin.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.jpg";
import Instagram from "../assets/instagram.png";
import X from "../assets/x.png";

export default function About() {
  // --- CURSOR TRACKING LOGIC ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // useSpring gives the movement that buttery, smooth trailing effect
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e:any) => {
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
    <main className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* 🖱️ 1. CUSTOM TRAILING CURSOR (Hidden on mobile) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm z-50 flex items-center justify-center hidden sm:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
      </motion.div>

      {/* 🌟 2. MOUSE SPOTLIGHT ORB (Follows mouse in background) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-500/15 dark:bg-indigo-600/15 rounded-full blur-[150px] -z-10 hidden sm:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🌟 AMBIENT STATIC BACKGROUND LIGHT ORBS */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-20 animate-pulse"></div>
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-purple-500/15 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-20 animate-pulse delay-1000"></div>

      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 px-6 lg:px-24 max-w-7xl mx-auto pt-24 lg:pt-25 relative z-10">
        
        {/* Left Section - Text Content (Reverses on scroll) */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: false, amount: 0.3 }} // <--- ADD THIS
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 rounded-full border-green-500/30 bg-green-500/10 text-green-500 gap-2 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for work
          </Badge>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Hi, I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[600px] mb-8">
            A passionate developer specializing in React and Next.js. I create
            beautiful, performant web applications and interactive experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto cursor-none">
            <Button size="lg" className="gap-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25 relative z-20">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 rounded-full hover:scale-105 transition-transform duration-300 relative z-20"
            >
              <Download size={18} /> Download CV
            </Button>
          </div>
        </motion.section>

        {/* Right Section - EXACT Annotated Bento Layout (Reverses on scroll) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.90, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // <--- ADD THIS
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full mt-12 lg:mt-0 flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[300px]">
            
            {/* Top Left: Brand/Logo Block (45%) */}
            <div
              className="w-full sm:w-[45%] h-[500px] sm:h-full border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat group hover:shadow-lg transition-all duration-500"
              style={{ backgroundImage: `url(${Image1})` }}
            >
              {/* 🌟 SWEEPING LIGHT BEAM */}
              <div className="absolute top-0 left-0 w-[150%] h-full -translate-x-[150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-in-out pointer-events-none z-20"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 transition-opacity duration-500 group-hover:opacity-90 z-0"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md transform group-hover:translate-x-1 transition-transform duration-300">
                    PixelAura
                  </h2>
                  <p className="text-sm text-gray-200 mt-2 drop-shadow-md">
                    Crafting digital experiences.
                  </p>
                </div>

                <div className="mt-auto">
                  <Badge className="bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-md transition-colors duration-300 relative z-20">
                    Next.js Expert
                  </Badge>
                </div>
              </div>
            </div>

            {/* Top Right: The Image (55%) */}
            <div className="w-full sm:w-[55%] h-[500px] sm:h-full rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 group relative z-20">
              <img
                src={Image1}
                alt="Project Showcase"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[200px]">
            
            {/* Bottom Left: Purple Brands Box (65%) */}
            <div className="relative overflow-hidden group w-full sm:w-[65%] h-[200px] sm:h-full rounded-3xl p-6 bg-gradient-to-br from-[#8b7ff9] to-[#a294ff] shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300 z-20">
              
              {/* 🌟 SWEEPING LIGHT BEAM */}
              <div className="absolute top-0 left-0 w-[150%] h-full -translate-x-[150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-in-out pointer-events-none z-0"></div>

              <p className="relative z-10 text-white/90 font-medium text-sm leading-relaxed">
                I've had the privilege of collaborating with some amazing brands
                and clients, delivering top-notch web solutions that drive
                results and create memorable digital experiences.
              </p>

              {/* Standard Marquee inside Vite */}
              <div className="relative z-10 flex items-center gap-4 text-white/80 font-bold tracking-tighter mt-4 overflow-hidden">
                <span className="mx-4 text-xl">SQUARESPACE</span>
                <span className="mx-4 text-xl">ASANA</span>
                <span className="mx-4 text-xl">NEXT.JS</span>
              </div>
            </div>

            {/* Bottom Right: Flat Elevated Social Icons Grid (35%) */}
            <div className="relative z-20 w-full sm:w-[35%] h-[200px] sm:h-full p-4 md:p-6 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm shadow-inner dark:shadow-gray-900 grid grid-cols-3 place-content-center place-items-center gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300">
              {/* Mail Icon */}
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJnjRPXlcFZmxGTcCdqsdLXgnPhqXBCHrngVThpXBVCkKZrMhQjWFGfvpSqmrQVqJhSPL" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-violet-500/20 hover:border-violet-200 dark:hover:border-violet-500/50">
                <img src={GMail} alt="mail" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>

              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/vahid-momin-274766289/" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-blue-500/20 hover:border-blue-200 dark:hover:border-blue-500/50">
                <img src={Linkedin} alt="linkedin" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>

              {/* Figma Icon */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-pink-500/20 hover:border-pink-200 dark:hover:border-pink-500/50">
                <img src={Figma} alt="Figma" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>

              {/* Github Icon */}
              <a href="https://github.com/Vahid819" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-slate-500/20 hover:border-slate-300 dark:hover:border-slate-500">
                <img src={Github} alt="Github" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>

              {/* Instagram Icon */}
              <a href="https://www.instagram.com/vahid_08momin/" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-rose-500/20 hover:border-rose-200 dark:hover:border-rose-500/50">
                <img src={Instagram} alt="Instagram" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>

              {/* Twitter/X Icon */}
              <a href="https://x.com/vahid19_08" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 lg:w-10 lg:h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:shadow-sky-500/20 hover:border-sky-200 dark:hover:border-sky-500/50">
                <img src={X} alt="Twitter/X" className="w-6 h-6 lg:w-6 lg:h-6 rounded transition-colors duration-300" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
      
      {/* Services Section renders cleanly below the hero */}
      <div className="relative z-20 w-full">
        <Service />
      </div>

      {/* Project Section renders below the services */}
      <div className="relative z-20 w-full">
        <Project />
      </div>
    </main>
  );
}