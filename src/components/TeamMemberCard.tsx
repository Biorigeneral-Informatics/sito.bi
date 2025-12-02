import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  featured?: boolean;
  color?: string; // Gradient color for accent
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  image,
  email,
  linkedin,
  github,
  featured = false,
  color = 'from-blue-500 to-cyan-500',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/20 hover:border-accent/50 transition-all duration-500 ${
        featured ? 'md:col-span-1 md:row-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className={`relative h-64 md:h-80 ${featured ? 'md:h-96' : ''} overflow-hidden bg-gradient-to-b from-black/40 to-black/20`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 relative z-10">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
          <p className={`text-sm md:text-base font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {role}
          </p>
        </div>

        {/* Description */}
        <p className="text-white text-sm md:text-base leading-relaxed mb-6 line-clamp-4 md:line-clamp-none">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-white hover:text-accent transition-all duration-300 group/link"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-white hover:text-accent transition-all duration-300 group/link"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-white hover:text-accent transition-all duration-300 group/link"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
