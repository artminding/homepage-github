
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold">李</div>
          <span className="text-slate-900 font-bold">数智教育研究 · 李祎</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} 李祎. 保留所有权利. 基于 React + Gemini 构建.
        </p>
        
        <div className="flex items-center space-x-6 text-sm text-slate-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">隐私政策</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">服务条款</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
