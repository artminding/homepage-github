
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">李</div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">李祎 · 数智教育</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">首页</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">服务项目</a>
          <a href="#research" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">研究领域</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">联系我</a>
        </nav>

        <div className="flex items-center">
          <a href="#contact" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">
            立即咨询
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
