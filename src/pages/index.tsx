import { Geist, Geist_Mono } from "next/font/google";
import Splashscreen from "@/components/splashscreen";
import { useState } from "react";
import { motion } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false)
  }, 2500)

  const container = (delay: number) => ({
    hidden: {y: 0, opacity: 0},
    visible: {
        y: -100,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
});

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-orange-10  0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      {loading && (
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="absolute"
        >
          <Splashscreen />
        </motion.div>
      )}
      
    </div>
  );
}
