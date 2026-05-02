import { useState, useRef } from "react"; // <-- 1. Import useRef
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  
  // 2. We use a ref to safely store the last scroll position without causing re-renders
  const lastScrollYRef = useRef(0);

  // This function runs every time the user scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    // 3. Grab our saved previous value
    const previous = lastScrollYRef.current;
    
    // If we scroll down and we are not at the very top, hide the navbar
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      // If we scroll up, show the navbar again
      setHidden(false);
    }

    // 4. Update the ref to the current position for the next time they scroll
    lastScrollYRef.current = latest;
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
        hidden: { y: "-150%", opacity: 0, filter: "blur(5px)" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="fixed top-4 left-0 right-0 z-50 w-11/12 m-auto h-16 flex items-center justify-between border rounded-3xl px-6 border-gray-300 dark:border-gray-800 bg-background/50 backdrop-blur-md shadow-sm"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-tight">PixelAura</h1>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:flex rounded-full">
          Book Me
        </Button>
        <ModeToggle />
      </div>
    </motion.div>
  );
}

export default Navbar;