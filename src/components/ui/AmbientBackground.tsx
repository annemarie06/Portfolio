'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-fuchsia-600 via-violet-600 to-indigo-500">
      {/* Interactive gradient follower */}
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        className="absolute w-[500px] h-[500px] bg-white/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-pink-400 rounded-full mix-blend-screen filter blur-[120px] opacity-40"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -60, 0],
          x: [0, -30, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-cyan-400 rounded-full mix-blend-screen filter blur-[120px] opacity-35"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 0],
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-amber-300 rounded-full mix-blend-screen filter blur-[120px] opacity-30"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:26px_26px]"></div>

      {/* Floating Circles */}
      <FloatingCircle delay={0} duration={25} top="10%" left="10%" size={60} color="bg-cyan-400" />
      <FloatingCircle delay={5} duration={30} top="60%" left="80%" size={100} color="bg-fuchsia-400" />
      <FloatingCircle delay={2} duration={28} top="40%" left="20%" size={40} color="bg-rose-400" />
      <FloatingCircle delay={8} duration={35} top="80%" left="15%" size={80} color="bg-blue-400" />
      <FloatingCircle delay={12} duration={40} top="20%" left="90%" size={50} color="bg-teal-400" />
    </div>
  );
}

function FloatingCircle({ delay, duration, top, left, size, color }: { delay: number, duration: number, top: string, left: string, size: number, color: string }) {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      style={{ top, left, width: size, height: size }}
      className={`absolute rounded-full ${color} opacity-40 blur-lg mix-blend-screen`}
    />
  );
}
