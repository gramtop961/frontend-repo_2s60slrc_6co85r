import React from 'react';
import GlassCategoryCard from './GlassCategoryCard';
import { Heart, Users, Shield, FileText, Scale, Handshake } from 'lucide-react';

const data = [
  {
    title: 'Separation & Divorce',
    description: 'Compassionate guidance for separation, divorce, and next steps with clarity.',
    icon: Heart,
  },
  {
    title: 'Parenting & Custody',
    description: 'Support for parenting plans, custody arrangements, and healthy co‑parenting.',
    icon: Users,
  },
  {
    title: 'Property & Financial',
    description: 'Understand entitlements and agreements to safeguard your wellbeing.',
    icon: Scale,
  },
  {
    title: 'Mediation & Agreements',
    description: 'Practical strategies and agreements that prioritise resolution and stability.',
    icon: Handshake,
  },
  {
    title: 'Family Violence & Safety',
    description: 'Resources and legal pathways focused on safety, dignity, and protection.',
    icon: Shield,
  },
  {
    title: 'Insights & News',
    description: 'Stories and updates from our team to help you feel informed.',
    icon: FileText,
  },
];

const EnhancedCategories = () => {
  return (
    <div className="relative">
      {/* subtle pattern and gradient blob */}
      <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#48A9A6]/30 to-[#0B7373]/20 blur-3xl" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.map((item) => (
          <GlassCategoryCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default EnhancedCategories;
