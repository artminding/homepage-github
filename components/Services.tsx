
import React from 'react';
import { 
  Presentation, 
  Settings2, 
  Code2, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
    <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
      了解更多 <ChevronRight className="w-4 h-4" />
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "生成式 AI 技术应用讲座",
      description: "面向高校师生、教育机构，提供最前沿的生成式 AI 发展趋势解析与实操技能培训。涵盖提示词工程、AI 辅助科研与创意设计。",
      icon: <Presentation className="w-7 h-7" />
    },
    {
      title: "技术咨询与数字化转型",
      description: "为教育单位提供定制化的数字化转型方案，诊断教学流程中的痛点，引入智能工具提升管理效率与教学质量。",
      icon: <Settings2 className="w-7 h-7" />
    },
    {
      title: "智能教育产品研发",
      description: "自主研发基于大语言模型的教学辅助系统，包括金融数学智能导师、自适应学习平台及自动化考务系统等。",
      icon: <Code2 className="w-7 h-7" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
