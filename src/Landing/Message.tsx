"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner"

// 1. Define the shape of your form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Message() {
  // 2. Apply the interface to your useState hook
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // 3. Type the onChange event for both inputs and textareas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Type the form submission event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Form Data ready for backend:", formData);
    // Here is where you will add your fetch() request to your Express API!

    toast.success("Form submitted! Check the console for the form data.");
    // 👇 CLEAR THE FORM AFTER SUBMISSION 👇
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-24 px-6 lg:px-24 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-[2.5rem] overflow-hidden p-8 md:p-16 lg:p-20 shadow-2xl shadow-indigo-100/50 dark:shadow-none border border-white/50 dark:border-slate-800"
      >
        {/* ✨ The Soft Gradient Background from your image ✨ */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f4ff] to-[#d9dffa] dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Contact with me to sizzle your project
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl text-sm md:text-base leading-relaxed">
            Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
          </p>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            
            {/* Top Row: Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-6 py-4 rounded-full bg-white/60 dark:bg-slate-950/40 border border-white/80 dark:border-slate-800 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300 text-slate-800 dark:text-white placeholder:text-slate-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-4 rounded-full bg-white/60 dark:bg-slate-950/40 border border-white/80 dark:border-slate-800 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300 text-slate-800 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {/* Bottom Row: Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Work Description..."
              required
              rows={6}
              className="w-full px-6 py-5 rounded-[2rem] bg-white/60 dark:bg-slate-950/40 border border-white/80 dark:border-slate-800 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300 text-slate-800 dark:text-white placeholder:text-slate-400 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-full bg-[#4a4a4d] dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-900 dark:hover:bg-slate-200 active:scale-[0.98] transition-all duration-300 shadow-md"
            >
              Submit
            </button>
            
          </form>
        </div>
      </motion.div>
    </section>
  );
}