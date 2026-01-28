'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/models/Project';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="portfolio" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of my work across web development, design, and other disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:border-white/50"
            >
              <div className="h-48 bg-gradient-to-br from-white/20 via-white/10 to-white/5 relative overflow-hidden group">
                {/* Placeholder for Project Image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white/70">
                    Project Image
                </div>
                <div className="absolute inset-0 bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="View Code">
                      <Github size={20} className="text-gray-900" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" title="View Live">
                      <ExternalLink size={20} className="text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 flex-1 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full border border-white/25">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
