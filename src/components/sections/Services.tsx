'use client';

import { motion } from 'framer-motion';
import { Service } from '@/lib/models/Service';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white/10 backdrop-blur-xl border-y border-white/25">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Combining technical expertise with administrative excellence to deliver versatile solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/15 backdrop-blur-md rounded-xl hover:shadow-xl transition-all duration-300 border border-white/25 hover:border-white/50 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/25 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-white/40 transition-all duration-300 shadow-sm border border-white/30">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
