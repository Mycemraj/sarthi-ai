import { motion } from "motion/react";
import { DroneIcon } from "./ThemeIcons";

const PATH = {
  left: ["6%", "38%", "68%", "42%", "6%"],
  top: ["48%", "18%", "38%", "16%", "48%"],
  rotate: [-10, 12, -8, 10, -10],
};

export default function FlyingDrone() {
  return (
    <motion.div
      className="pointer-events-none absolute z-[5]"
      style={{ left: 0, top: 0 }}
      animate={{ left: PATH.left, top: PATH.top }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: PATH.rotate, y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute inset-0 -z-10 scale-[3] rounded-full bg-azure/20 blur-md" />
        <DroneIcon className="h-9 w-9 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:h-11 sm:w-11" />
      </motion.div>
    </motion.div>
  );
}
