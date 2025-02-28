import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../aceternity/canvas-reveal-effect";
import {
  Activity,
  Filter,
  Close as CloseIcon,
  EditAnchorPoint,
  Pluse,
  Box,
} from "@pooya-poi/vectonents";
import { useState, useEffect } from "react";

const items = [
  {
    id: 1,
    icon: <Activity className="size-24" />,
    title: "Optimized & Lightweight",
  },
  {
    id: 2,
    icon: <Filter variants="filled-2" className="size-24" />,
    title: "Multi variants",
  },
  {
    id: 3,
    icon: <EditAnchorPoint className="size-24" />,
    title: "Customizable",
  },
  { id: 4, icon: <Box className="size-24" />, title: "Packages support" },
];

const WhySection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null); // Track hovered item by ID
  const [isLgScreen, setIsLgScreen] = useState(false); // Track screen size

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup
    };
  }, []);

  return (
    <div className="bg-zinc-950">
      <h3 className="font-rasgen text-center text-2xl">Why Vectonents?</h3>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 px-8 py-5 lg:flex-row lg:flex-wrap">
        {items.map((item) => (
          <div
            onMouseEnter={() => setHoveredId(item.id)} // Set hovered item ID
            onMouseLeave={() => setHoveredId(null)} // Reset hovered item ID
            key={item.id}
            className="group/canvas-card relative flex h-[30rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <Pluse className="absolute -top-2 -left-2 h-3 w-3 text-black dark:text-white" />
            <Pluse className="absolute -bottom-2 -left-2 h-3 w-3 text-black dark:text-white" />
            <Pluse className="absolute -top-2 -right-2 h-3 w-3 text-black dark:text-white" />
            <Pluse className="absolute -right-2 -bottom-2 h-3 w-3 text-black dark:text-white" />

            {/* Show CanvasRevealEffect based on screen size and hover state */}
            <AnimatePresence>
              {/* Always show on screens smaller than lg */}
              {!isLgScreen && (
                <motion.div
                  key={`${item.id}-always`}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CanvasRevealEffect
                    animationSpeed={2}
                    containerClassName="bg-zinc-950"
                    colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}

              {/* Show on lg screens only when hovered */}
              {isLgScreen && hoveredId === item.id && (
                <motion.div
                  key={`${item.id}-hover`}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CanvasRevealEffect
                    animationSpeed={2}
                    containerClassName="bg-zinc-950"
                    colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-20 text-center">
              <div className="mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
                {item.icon}
              </div>
              <h2 className="font-rasgen relative z-10 mt-4 text-xl font-bold text-black opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 lg:opacity-0 dark:text-white">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

WhySection.displayName = "pageWidgets";
export default WhySection;