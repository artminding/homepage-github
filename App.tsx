
import React, { useState, useRef } from 'react';
import { 
  Mail, 
  MessageCircle, 
  BookOpen, 
  Cpu, 
  TrendingUp, 
  User, 
  Camera, 
  ArrowRight,
  Linkedin,
  Github,
  Award,
  Zap,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ResearchAreas from './components/ResearchAreas';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 opacity-70"></div>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">核心服务能力</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-lg text-slate-600">依托学术背景与前沿技术，提供一站式数智化教育解决方案</p>
            </div>
            <Services />
          </div>
        </section>

        <section id="research" className="py-24 bg-white/50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">跨学科研究领域</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  作为教育技术领域的深耕者，我致力于探索生成式 AI 与传统教学模式的有机结合。
                  通过金融代数教学实践与高等教育政策研究，构建面向未来的数智化人才培养体系。
                </p>
                <ResearchAreas />
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-2xl -rotate-2 opacity-50"></div>
                <div className="relative glass-morphism p-8 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-500 p-6 rounded-xl text-white flex flex-col justify-center items-center">
                      <span className="text-3xl font-bold">50+</span>
                      <span className="text-sm">合作项目</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 flex flex-col justify-center items-center">
                      <span className="text-3xl font-bold text-emerald-600">10k+</span>
                      <span className="text-sm text-slate-500">受众人数</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 flex flex-col justify-center items-center">
                      <span className="text-3xl font-bold text-emerald-600">15+</span>
                      <span className="text-sm text-slate-500">发表文献</span>
                    </div>
                    <div className="bg-emerald-600 p-6 rounded-xl text-white flex flex-col justify-center items-center">
                      <span className="text-3xl font-bold">5+</span>
                      <span className="text-sm">软件著作</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-demo" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">数智互动：咨询助手</h2>
            <p className="text-slate-600 italic">体验生成式 AI 在教育场景中的实际应用，即刻与我的 AI 助手对话</p>
          </div>
          <AIConsultant />
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
