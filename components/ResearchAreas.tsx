
import React from 'react';
import { Terminal, BookMarked, Workflow } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  const fields = [
    {
      name: "数智化操作范式",
      desc: "利用大模型提示词工程（Prompt Engineering）与工作流自动化，重构高校行政与教学链路。",
      icon: <Terminal className="w-5 h-5 text-slate-700" />,
      tag: "实操优势"
    },
    {
      name: "高等教育治理研究",
      desc: "基于政策科学视角，研究数智化转型背景下大学体制创新、教师胜任力及评价体系变革。",
      icon: <BookMarked className="w-5 h-5 text-blue-600" />,
      tag: "学术底色"
    },
    {
      name: "金融代数自适应教学",
      desc: "开发基于 AI 的金融数学导师系统，实现个性化学习路径分析与量化人才的高效培养。",
      icon: <Workflow className="w-5 h-5 text-emerald-600" />,
      tag: "跨界实践"
    }
  ];

  return (
    <div className="space-y-6 text-left">
      {fields.map((field, idx) => (
        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/40 hover:bg-white transition-all border border-transparent hover:border-emerald-100 hover:shadow-md group">
          <div className="mt-1 p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">{field.icon}</div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-slate-900">{field.name}</h4>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-500 font-bold uppercase tracking-tighter">{field.tag}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{field.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchAreas;
