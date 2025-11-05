import React from 'react';
import CategoryCard from './CategoryCard';
import { Heart, Users, Shield, FileText } from 'lucide-react';

const categories = [
  {
    title: 'Separation & Divorce',
    description:
      'Compassionate guidance to navigate separation, divorce, and next steps with clarity.',
    icon: Heart,
  },
  {
    title: 'Parenting & Custody',
    description:
      'Support for parenting plans, custody arrangements, and fostering healthy co‑parenting.',
    icon: Users,
  },
  {
    title: 'Property & Financial',
    description:
      'Understand entitlements and agreements to safeguard your financial wellbeing.',
    icon: Shield,
  },
  {
    title: 'Mediation & Agreements',
    description:
      'Practical strategies and agreements that prioritise resolution and stability.',
    icon: FileText,
  },
  {
    title: 'Family Violence & Safety',
    description:
      'Resources and legal pathways focused on safety, dignity, and protection.',
    icon: Shield,
  },
  {
    title: 'Insights & News',
    description:
      'Stories, updates, and perspectives from our team to help you feel informed.',
    icon: FileText,
  },
];

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
      {categories.map((cat, idx) => (
        <div
          key={cat.title}
          className={idx % 2 === 1 ? 'bg-[#4B8CA3]/5 rounded-[16px] p-0.5' : ''}
        >
          <CategoryCard
            icon={cat.icon}
            title={cat.title}
            description={cat.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriesGrid;
