// src/components/Statistics.jsx
import React from 'react';
import { Calendar, CheckSquare, Award, Smile, Users, ShieldCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "20+",
    label: "Years of Experience",
    icon: Calendar,
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 2,
    value: "750+",
    label: "Completed Projects",
    icon: CheckSquare,
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    value: "500+",
    label: "Satisfied Clients",
    icon: Smile,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    value: "98%",
    label: "Client Satisfaction",
    icon: Award,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    value: "25+",
    label: "Skilled Professionals",
    icon: Users,
    color: "from-red-500 to-orange-500"
  },
  {
    id: 6,
    value: "10-Year",
    label: "Workmanship Warranty",
    icon: ShieldCheck,
    color: "from-teal-500 to-emerald-500"
  }
];

export default function Statistics() {
  return (
    <div className="font-sans grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
      {stats.map((stat) => {
        const IconComp = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 md:p-6 shadow-lg flex flex-col items-center text-center hover:border-slate-700 transition-all group hover:-translate-y-1"
          >
            {/* Round Icon container */}
            <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-orange-500 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform mb-3">
              <IconComp className="w-5 h-5 text-orange-500" />
            </div>

            {/* Value */}
            <span className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {stat.value}
            </span>

            {/* Label */}
            <span className="text-slate-400 text-xs md:text-sm font-medium mt-1 md:mt-2">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
