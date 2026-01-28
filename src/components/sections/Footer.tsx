'use client';

import Logo from '@/components/ui/Logo';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-white/10 backdrop-blur-xl border-t border-white/25 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <Logo className="mb-6" />
              <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
                Empowering businesses through technology and design. 
                Combining IT expertise with creative solutions to deliver exceptional results.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 hover:text-white transition-all duration-300 border border-white/25">
                    <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 hover:text-white transition-all duration-300 border border-white/25">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 hover:text-white transition-all duration-300 border border-white/25">
                    <Twitter size={20} />
                </a>
                <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 hover:text-white transition-all duration-300 border border-white/25">
                    <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-bold text-white mb-6">Quick Links</h3>
                <ul className="space-y-4">
                    <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Me</a></li>
                    <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
                    <li><a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a></li>
                    <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h3 className="font-bold text-white mb-6">Services</h3>
                <ul className="space-y-4">
                    <li className="text-white/70">Web Development</li>
                    <li className="text-white/70">Graphic Design</li>
                    <li className="text-white/70">Virtual Assistance</li>
                    <li className="text-white/70">IT Consulting</li>
                </ul>
            </div>
          </div>

          <div className="border-t border-white/25 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Anne Marie Factor. All rights reserved.
            </div>
            
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-white/80 font-medium hover:text-white transition-colors"
            >
                Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    );
  }
