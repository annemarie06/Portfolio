'use client';

import { motion } from 'framer-motion';
import { Profile } from '@/lib/models/Profile';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-indigo-400 font-semibold mb-2 text-lg">Hello, I&apos;m</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {profile.name || "Kennely Ray"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            {profile.title}
          </p>
          <p className="text-white/70 mb-8 max-w-lg leading-relaxed">
            {profile.bio}
          </p>
          <div className="flex gap-4">
            <a href="#portfolio" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="border-2 border-white/40 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/15 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full absolute top-0 right-0 -z-10 blur-3xl opacity-30"></div>
          <div className="w-96 h-96 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full absolute bottom-0 left-0 -z-10 blur-3xl opacity-30"></div>
          <div className="bg-white/15 backdrop-blur-sm p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/30">
             <div className="aspect-[4/5] bg-white/10 rounded-xl overflow-hidden relative">
                {profile.avatarUrl ? (
                  <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-lg">Profile Image</span>
                  </div>
                )}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
