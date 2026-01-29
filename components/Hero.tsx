
import React, { useState, useRef } from 'react';
import { Camera, ArrowRight, User, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  /**
   * 🖼️ 图片更换指南：
   * 
   * 方案 A：使用本地文件
   * 1. 将图片（如 my-photo.jpg）放入项目根目录（与 App.tsx 同级）。
   * 2. 将下方 setProfileImage 的初始值改为: '/my-photo.jpg'
   * 
   * 方案 B：使用网络链接（推荐）
   * 1. 将图片上传到 GitHub 或图床。
   * 2. 将下方 setProfileImage 的初始值改为: 'https://您的图片链接.jpg'
   */
  const [profileImage, setProfileImage] = useState<string | null>('/my-photo.jpg'); 
  
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
    <section id="home" className="relative pt-32 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* 背景大标题水印 */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl lg:text-9xl font-black text-slate-900/5 whitespace-nowrap pointer-events-none select-none z-0 uppercase tracking-tighter">
        Digital Education
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* 自我介绍文本 */}
        <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
          大家好，我是 <span className="font-bold text-slate-900">李祎</span>。
          目前致力于 AI 和高等教育领域的交叉研究。我通过技术赋能教育，
          为高校及机构提供生成式 AI 技术应用讲座、专业技术咨询及高品质产品研发服务。
        </p>

        {/* 交互按钮 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl group">
            联系合作
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#research" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            了解研究成果
          </a>
        </div>

        {/* 形象展示区 */}
        <div className="relative group">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-[10px] border-white shadow-2xl overflow-hidden relative bg-emerald-100 ring-1 ring-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="李祎" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 如果图片加载失败（例如路径写错），显示默认图标
                  (e.target as HTMLImageElement).style.display = 'none';
                  setProfileImage(null);
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-emerald-800 p-8 text-center bg-gradient-to-br from-emerald-100 to-teal-200">
                <User className="w-20 h-20 mb-2 opacity-30" />
                <p className="text-xs font-medium text-emerald-700">点击上传形象照</p>
              </div>
            )}
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[2px] cursor-pointer"
            >
              <Camera className="w-8 h-8 mb-2" />
              <span className="text-sm font-semibold">更换照片</span>
            </button>
          </div>

          {/* 装饰卡片 */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-8 bg-white p-5 rounded-2xl shadow-2xl border border-emerald-50 w-64 z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">李祎 · 数智教育专家</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight font-medium">致力于 AI 与高等教育的深度融合研究与实践</p>
          </div>
          
          <div className="absolute top-2 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-100 hidden sm:flex rotate-[-12deg] z-20">
            <Cpu className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageUpload} 
          className="hidden" 
          accept="image/*"
        />
      </div>
    </section>
  );
};

export default Hero;
