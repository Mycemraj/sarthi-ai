import { motion } from "motion/react";
import droneImg from "../../assets/drone-photo.png";

export default function FloatingDronePhoto({ className = "" }) {
  return (
    <motion.img
      src={droneImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-[5] w-56 select-none sm:w-72 lg:w-80 ${className}`}
      style={{
        mixBlendMode: "multiply",
        filter: "drop-shadow(0 18px 20px rgba(0,0,0,0.35))",
      }}
      animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
