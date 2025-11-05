import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ icon: Icon, title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative rounded-[16px] overflow-hidden bg-[#F9F9F9] shadow-sm hover:shadow-md border border-[#EAEAEA]"
    >
      <div className="relative h-40 w-full bg-gradient-to-br from-white to-[#EAEAEA] flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-80 mix-blend-multiply"
          />
        ) : (
          <div className="h-14 w-14 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow-sm border border-white/60">
            {Icon && <Icon className="h-7 w-7 text-[#4B8CA3]" />}
          </div>
        )}
        <div className="absolute inset-0 bg-[#0B7373]/0 group-hover:bg-[#0B7373]/85 transition-colors duration-300"></div>
      </div>
      <div className="relative p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-[#1E3D4A] group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-slate-600 group-hover:text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      {/* CTA hover overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 left-4">
          <span className="inline-block rounded-full bg-[#FF7A00] text-white text-xs font-medium px-3 py-1 shadow-sm">
            Learn more
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
