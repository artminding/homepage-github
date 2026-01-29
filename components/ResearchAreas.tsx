
import React from 'react';
import { Brain, GraduationCap, Calculator, CheckCircle2 } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  const fields = [
    {
      name: "人工智能应用",
      desc: "大语言模型在高等教育教学与评价中的应用范式研究",
      icon: <Brain className="w-5 h-5 text-emerald-600" />
    },
    {
      name: "高等教育研究",
      desc: "数字化背景下的高等教育政策变迁与体制创新研究",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />
    },
    {
      name: "金融代数教学",
      desc: "融合 AI 工具的金融代数课程重构与量化人才培养模式",
      icon: <Calculator className="w-5 h-5 text-teal-600" />
    }
  ];

  return (
    <div className="space-y-6">
      {fields.map((field, idx) => (
        <div key={idx} className="flex gap-4 p-5 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-emerald-100">
          <div className="mt-1">{field.icon}</div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">{field.name}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{field.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchAreas;
