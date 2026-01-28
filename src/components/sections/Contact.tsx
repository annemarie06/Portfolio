'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Profile } from '@/lib/models/Profile';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you need a website, graphic design, or administrative support, I&apos;m here to help. 
              Feel free to reach out to discuss your project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white border border-white/30">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium text-white">{profile.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white border border-white/30">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white border border-white/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-medium text-white">Remote / Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/15 backdrop-blur-xl border border-white/25 p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none transition-all placeholder:text-white/60" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none transition-all placeholder:text-white/60" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none transition-all placeholder:text-white/60" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-500/30">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
