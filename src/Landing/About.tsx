import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react"; 
import { FaLinkedin, FaGithub, FaFigma, FaDribbble, FaTwitter } from "react-icons/fa"; 
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Full Stack Developer
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[600px] mb-8">
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

      {/* Right Section - EXACT Annotated Bento Layout */}
      <section className="w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col gap-4">

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[300px]">
          
          {/* Top Left: Brand/Logo Block (45%) */}
          <div
            className="w-full sm:w-[45%] h-[300px] sm:h-full border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat group"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 transition-opacity duration-500 group-hover:opacity-80"></div>

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

          {/* Top Right: The Image (55%) */}
          <div className="w-full sm:w-[55%] h-[300px] sm:h-full rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
            <img
              src={Image1}
              alt="Project Showcase"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* ==================================== */}
        {/* ROW 2: 65% Width / 35% Width         */}
        {/* ==================================== */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[200px]">
          
          {/* Bottom Left: Purple Brands Box (65%) */}
          <div className="w-full sm:w-[65%] h-[200px] sm:h-full rounded-3xl p-6 bg-gradient-to-br from-[#8b7ff9] to-[#a294ff] shadow-md flex flex-col justify-between">
            <p className="text-white/90 font-medium text-sm leading-relaxed">
              The most recent brands<br /> I happily worked with &lt;3
            </p>

            <div className="flex items-center gap-4 text-white/80 font-bold tracking-tighter mt-4 overflow-hidden">
              <span className="text-sm">SQUARESPACE</span>
              <span className="text-xl lowercase">asana</span>
            </div>
          </div>

          {/* Bottom Right: Aesthetic Glassy Social Icons Grid (35%) */}
          {/* Bottom Right: Aesthetic Glassy Social Icons Grid (35%) */}
          {/* Bottom Right: Aesthetic Glassy Social Icons Grid (35%) */}
          <div className="w-full sm:w-[35%] h-[200px] sm:h-full p-4 md:p-6 border border-white/40 dark:border-white/10 rounded-3xl bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg grid grid-cols-3 place-content-center place-items-center gap-4">
            
            {/* Mail Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] overflow-hidden">
              <Mail className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-violet-500 transition-colors duration-300 relative z-10" />
            </a>

            {/* LinkedIn Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] overflow-hidden">
              <FaLinkedin className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300 relative z-10" />
            </a>

            {/* Figma Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] overflow-hidden">
              <FaFigma className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-pink-500 transition-colors duration-300 relative z-10" />
            </a>

            {/* Github Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-400/50 hover:bg-slate-500/10 hover:shadow-[0_0_20px_rgba(100,116,139,0.15)] overflow-hidden">
              <FaGithub className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 relative z-10" />
            </a>
            
            {/* Dribbble Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/50 hover:bg-rose-500/10 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] overflow-hidden">
              <FaDribbble className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-rose-500 transition-colors duration-300 relative z-10" />
            </a>

            {/* Twitter/X Icon */}
            <a href="#" className="group relative w-14 h-14 lg:w-11 lg:h-11 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-500/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] overflow-hidden">
              <FaTwitter className="w-6 h-6 lg:w-5 lg:h-5 hover:w-6 hover:h-6 text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors duration-300 relative z-10" />
            </a>

          </div>

        </div>

      </section>
    </main>
  );
}

export default About;