"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Code2, Sparkles, Smartphone } from "lucide-react";

function Service() {
  const services = [
    {
      id: "01",
      title: "Frontend Engineering",
      description: "I transform flat designs into highly interactive, accessible, and responsive web experiences using React and Next.js.",
      icon: <Layout className="w-5 h-5 text-blue-500" />,
    },
    {
      id: "02",
      title: "Backend Architecture",
      description: "Building secure, scalable server-side solutions and seamless APIs that power your business logic effortlessly.",
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: "03",
      title: "UI/UX Implementation",
      description: "Bridging the gap between design and code, ensuring every layout and animation is executed with pixel-perfect precision.",
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    },
    {
      id: "04",
      title: "Responsive Design",
      description: "Ensuring your digital presence adapts perfectly to any screen size, providing a native-feeling experience for all users.",
      icon: <Smartphone className="w-5 h-5 text-teal-500" />,
    },
  ];

  return (
    <main className="w-full flex flex-col gap-12 px-6 lg:px-24 max-w-7xl mx-auto pt-24 pb-24 relative overflow-hidden">
      
      {/* 🌟 AMBIENT BACKGROUND LIGHT ORB */}
      <div className="absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-1000"></div>

      {/* Top Banner: Framer Motion for scroll reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full p-8 lg:p-12 border border-slate-200 dark:border-slate-800 rounded-[2rem] bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm flex flex-col justify-between gap-8"
      >
        <h1 className="text-2xl lg:text-4xl font-medium leading-relaxed text-slate-800 dark:text-slate-100 max-w-4xl">
          My mission is to partner with forward-thinking brands to transform
          complex problems into elegant, high-performing digital experiences
          that drive real business growth.
        </h1>
        
        <div className="flex flex-wrap gap-6 text-sm lg:text-base font-semibold text-slate-400 dark:text-slate-500 tracking-wide uppercase">
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">Next.js</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">React.js</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">Tailwind CSS</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">TypeScript</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">Node.js</span>
          <span className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">Three.js</span>
        </div>
      </motion.section>

      {/* Bottom Section: Services Grid */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        
        {/* Left Side: Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-4 sticky top-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            How Can I <br className="hidden lg:block" /> Assist You?
          </h2>
        </motion.div>

        {/* Right Side: 2x2 Service Cards */}
        <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            
            <motion.div
              key={service.id}
              initial={{ 
                opacity: 0, 
                scale: 0.5, 
                x: -50, 
                y: 50, 
                rotate: -10, 
                filter: "blur(5px)" 
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0, 
                rotate: 0, 
                filter: "blur(0px)" 
              }}
              whileHover={{ y: -5 }} // <-- Added this to handle the hover jump cleanly!
              viewport={{ once: false, amount: 0.2 }} 
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                type: "spring", 
                bounce: 0.3 
              }}
              // Removed "transition-all" and "hover:-translate-y-1". Kept "transition-colors".
              className="relative overflow-hidden group flex flex-col justify-between p-6 h-full min-h-[240px] border border-slate-200 dark:border-slate-800 rounded-3xl bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              
              {/* 🌟 SWEEPING LIGHT BEAM */}
              <div className="absolute top-0 left-0 w-[150%] h-full -translate-x-[150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-in-out pointer-events-none z-0"></div>

              <div className="relative z-10 flex justify-between items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-all duration-300">
                  {service.icon}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-right leading-relaxed max-w-[200px]">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex justify-between items-end mt-auto">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 w-2/3 leading-tight">
                  {service.title}
                </h3>
                <span className="text-xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors duration-300">
                  {service.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Service;