import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image1 from "../assets/image.jpg";

function About() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-24 max-w-7xl mx-auto pt-24 lg:pt-0">
      {/* Left Section - Text Content */}
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
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
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-600">
            Full Stack Developer
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-150 mb-8">
          A passionate developer specializing in React and Next.js. I create
          beautiful, performant web applications and interactive experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="gap-2 rounded-full">
            View Projects <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="secondary" className="gap-2 rounded-full">
            <Download size={18} /> Download CV
          </Button>
        </div>
      </section>

      {/* Right Section - Mini Masonry Collage */}
      <section className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <div className="w-full columns-1 sm:columns-2 gap-4 space-y-4">
          {/* Item 1: Brand/Logo Block */}
          <div
            className="h-75 break-inside-avoid border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat group"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/80 transition-opacity duration-500 group-hover:opacity-80"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  PixelAura
                </h2>
                <p className="text-sm text-gray-200 mt-2 drop-shadow-md">
                  Crafting digital experiences.
                </p>
              </div>

              <div className="mt-auto">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                  Next.js Expert
                </Badge>
              </div>
            </div>
          </div>

          {/* Item 3: The Image */}
          <div className=" break-inside-avoid rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
            <img
              src={Image1}
              alt="Project Showcase"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="w-full columns-1 sm:columns-2 gap-4 space-y-4 mt-4">
          {/* Item 4: Purple Brands Box (ADDED) */}
          <div className="w-full break-inside-avoid rounded-2xl p-6 bg-linear-to-br from-[#8b7ff9] to-[#a294ff] shadow-md flex flex-col justify-between h-50">
            <p className="text-white/90 font-medium text-sm leading-relaxed max-w-50">
              The most recent brands
              <br /> I happily worked with &lt;3
            </p>

            <div className="flex items-center gap-4 text-white/80 font-bold tracking-tighter mt-4 overflow-hidden">
              <span className="text-sm">SQUARESPACE</span>
              <span className="text-xl lowercase">asana</span>
            </div>
          </div>

          {/* Item 5: Social Icons Grid (ADDED) */}
          <div className="w-full p-4 border rounded-2xl break-inside-avoid grid grid-cols-3 gap-3">
            {/* <a href="#" className="aspect-square rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Figma className="w-6 h-6 text-purple-500" />
            </a>
            
            <a href="#" className="aspect-square rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            
            <a href="#" className="aspect-square rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Dribbble className="w-6 h-6 text-pink-500" />
            </a> */}

            <a
              href="#"
              className="aspect-square rounded-2xl bg-violet-50 dark:bg-neutral-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-6 h-6 text-violet-500" />
            </a>

            {/* <a href="#" className="aspect-square rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Github className="w-6 h-6 text-slate-800 dark:text-white" />
            </a>
            
            <a href="#" className="aspect-square rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Twitter className="w-6 h-6 text-black dark:text-white" />
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
