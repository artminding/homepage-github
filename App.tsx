
import React from 'react';
import { 
  Cpu, 
  Lightbulb,
  Zap,
  Target,
  ArrowRight,
  BookOpen,
  MousePointer2
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
    <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-white"></div>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* 方法论转化板块：展示学科优势 -> 技术操作 -> 价值交付 */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* 背景连线（仅在大屏显示） */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent -translate-y-1/2 z-0"></div>
              
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">大学教育学科优势</h3>
                <p className="text-sm text-slate-500">深耕高等教育理论、政策研究与教学评价，确保技术应用不偏离教育本质。</p>
              </div>

              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
                  <MousePointer2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">智能技术操作能力</h3>
                <p className="text-sm text-slate-500">精通 RAG、Prompt Engineering 及自动化流，将学术见解转化为可交互的智能工具。</p>
              </div>

              <div className="relative z-10 bg-emerald-600 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-6 border border-white/30">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">高价值数智交付</h3>
                <p className="text-sm text-emerald-100">为高校及机构提供“懂学科、能落地”的深度咨询与产品研发服务。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">核心服务能力</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-lg text-slate-600">以学术高度审视技术，以操作广度赋能教育</p>
            </div>
            <Services />
          </div>
        </section>

        <section id="research" className="py-24 bg-white/50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 uppercase tracking-wider">
                  Research & Insight
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">理论与实践的<br/><span className="text-emerald-600">双轴驱动</span></h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                  作为数智时代的知识工作者，李祎始终坚持“从教学痛点出发，用技术精准破局”。通过跨学科的研究视角，构建面向未来的智能教育生态。
                </p>
                <ResearchAreas />
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-emerald-400/10 rounded-[3rem] blur-3xl -z-10"></div>
                <div className="glass-morphism p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center items-center transform hover:scale-105 transition-transform">
                      <Cpu className="w-8 h-8 text-emerald-400 mb-3" />
                      <span className="text-3xl font-black">AI+Edu</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">实践专家</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center items-center shadow-sm transform hover:scale-105 transition-transform">
                      <span className="text-4xl font-black text-emerald-600 italic">20+</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">学术成果</span>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center items-center shadow-sm transform hover:scale-105 transition-transform">
                      <span className="text-4xl font-black text-slate-800 italic">100%</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">独立架构</span>
                    </div>
                    <div className="bg-emerald-600 p-8 rounded-3xl text-white flex flex-col justify-center items-center shadow-lg shadow-emerald-100 transform hover:scale-105 transition-transform">
                      <Target className="w-8 h-8 text-white mb-3" />
                      <span className="text-2xl font-black">落地交付</span>
                      <span className="text-[10px] uppercase tracking-widest text-emerald-200 mt-1">闭环保障</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">数智交互：咨询助手</h2>
            <p className="text-slate-600 italic">基于 Gemini 3 Flash 构建的学术服务模型，体验即刻对话</p>
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
