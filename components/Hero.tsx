
import React, { useState, useRef } from 'react';
import { Camera, ArrowRight, User, Cpu, Sparkles, GraduationCap, Laptop } from 'lucide-react';
// 核心修改：直接导入根目录下的图片资源
import defaultProfilePic from '../my-photo.jpg';

const Hero: React.FC = () => {
  // 将导入的图片对象作为初始值
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfilePic); 
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-40 pb-24 overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* 背景动态水印 */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-8xl sm:text-9xl font-black text-slate-900/[0.03] whitespace-nowrap pointer-events-none select-none z-0 uppercase tracking-tighter">
        Scholar & Operator
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* 核心身份标签 */}
        <div className="inline-flex items-center gap-2 mb-8 bg-emerald-50 border border-emerald-100 px-5 py-2 rounded-full shadow-sm animate-float">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-black text-emerald-800 tracking-[0.2em] uppercase">学术洞察 × 技术实操</span>
        </div>

        {/* 标题 */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
          用<span className="text-emerald-600">教育智慧</span>驱动<br/>
          <span className="relative">
            <span className="relative z-10">数智化变革</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-200/50 -z-10"></span>
          </span>
        </h1>
        
        {/* 描述内容 */}
        <p className="text-xl sm:text-2xl text-slate-500 mb-12 leading-relaxed max-w-3xl font-medium">
          我是 <span className="text-slate-900 font-bold underline decoration-emerald-500 underline-offset-4">李祎</span>。
          致力于发挥在<span className="text-slate-900">大学教育领域</span>的学科积淀与<span className="text-slate-900">智能技术操作</span>的实战敏锐度，
          为高等教育转型提供深度支撑。
        </p>

        {/* 交互按钮 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-2xl hover:shadow-emerald-200 group">
            咨询合作
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#research" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
            了解研究
          </a>
        </div>

        {/* 形象展示与身份卡片 */}
        <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-[3rem] border-[12px] border-white shadow-2xl overflow-hidden relative bg-emerald-100 ring-1 ring-slate-200 transition-all duration-700 group hover:scale-[1.02] hover:rotate-1">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="李祎" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  console.warn("Initial image load failed, reverting to placeholder.");
                  setProfileImage(null);
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-emerald-800 p-10 text-center bg-gradient-to-br from-emerald-100 to-teal-100">
                <User className="w-20 h-20 mb-4 text-emerald-600/30" />
                <p className="text-xs font-black text-emerald-800/60 tracking-widest uppercase">李祎 · 数智品牌</p>
                <p className="text-[10px] text-emerald-700/40 mt-2">点击上传职场形象照</p>
              </div>
            )}
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center text-white backdrop-blur-sm cursor-pointer"
            >
              <Camera className="w-10 h-10 mb-2" />
              <span className="font-bold">更换照片</span>
            </button>
          </div>

          {/* 悬浮标签 */}
          <div className="absolute -top-6 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-emerald-50 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Academic Background</p>
              <p className="text-sm font-bold text-slate-800">教育学科研究背景</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <Laptop className="w-6 h-6 text-slate-600" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Technical Mastery</p>
              <p className="text-sm font-bold text-slate-800">AI 技术实操能力</p>
            </div>
          </div>
        </div>
        
        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
      </div>
    </section>
  );
};

export default Hero;
