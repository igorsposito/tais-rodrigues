"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimationType = "fade-up" | "slide-left" | "slide-right" | "zoom-in" | "blur-in";

interface RevealSectionProps {
  children: ReactNode;
  variant?: AnimationType;
  delay?: number;
  className?: string;
}

export default function RevealSection({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: RevealSectionProps) {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1 },
    },
    "blur-in": {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}