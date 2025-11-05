import React from 'react';
import { motion } from 'framer-motion';

const GlassCategoryCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative rounded-[24px] p-5 sm:p-6 backdrop-blur-md bg-white/50 shadow-[0_6px_30px_rgba(0,0,0,0.06)] ring-1 ring-white/40 overflow-hidden"
    >
      {/* gradient hover overlay */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#0B7373] to-[#48A9A6]" />

      {/* inner glow */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[22px] ring-1 ring-white/60" />

      {/* icon */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-[#0B7373]/10 flex items-center justify-center shadow-[0_0_0_3px_rgba(255,255,255,0.6)]">
          {Icon && (
            <motion.div
              className="text-[#0B7373]"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          )}
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mt-4">
        <h3 className="text-lg font-semibold text-[#1E3D4A] group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-slate-600 group-hover:text-white/90 text-sm">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-5">
        <button className="inline-flex items-center rounded-full bg-[#FF7A00] text-white text-sm font-medium px-4 py-2 shadow-md transition hover:shadow-lg hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF7A00]">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default GlassCategoryCard;
