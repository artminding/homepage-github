
import React from 'react';
import { 
  Cpu, 
  Zap,
  Target,
  BookOpen,
  MousePointer2,
  Quote,
  Layers,
  BarChart3,
  Network,
  Compass,
  Lightbulb
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
      {/* 渐变背景底层 */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-white"></div>
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* 核心方法论：学科优势 -> 技术操作 -> 价值交付 */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-xs">Methodology</span>
              <h2 className="text-3xl font-bold mt-2">跨界生存：知识工作者的双轴模型</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent -translate-y-1/2 z-0"></div>
              
              <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">大学教育学科深度</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  不只是技术的搬运工。深谙教育政策、组织行为与评价逻辑，确保技术方案能精准嵌入复杂的教育生态系统。
                </p>
              </div>

              <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                  <MousePointer2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">智能技术操作敏锐</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  精通 Prompt Engineering 与 Workflow 自动化，能将学术直觉转化为可落地、高效率的数智化生产力工具。
                </p>
              </div>

              <div className="relative z-10 bg-emerald-600 p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center text-center text-white hover:bg-emerald-700 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-6 border border-white/30">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">连接价值交付</h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  在“懂教育的技术人”与“懂技术的教育者”之间架起桥梁，交付的是系统，更是转型的确定性。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 数智进化论板块 */}
        <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-8 tracking-widest uppercase">
                  <Compass className="w-4 h-4" /> 数智进化论
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
                  如何发挥<br/><span className="text-emerald-500">知识工作者</span>的复合优势？
                </h2>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <Layers className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">架构思维：从课件到环境</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">将单一的知识传授转变为智能学习环境的架构。利用教育学原理指导 AI Agent 的行为逻辑。</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <BarChart3 className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">实证支撑：数据驱动决策</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">利用自动化工具采集教学微观数据，为高等教育评估与治理提供从“直觉型”向“数据型”转化的可能。</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Network className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">翻译官角色：跨界共识构建</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">打破学术象牙塔与技术开发之间的语言壁垒，在复杂的数字化项目中充当需求分析与价值对齐的核心枢纽。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl">
                  <Quote className="text-emerald-500 w-12 h-12 mb-8 opacity-50" />
                  <p className="text-2xl sm:text-3xl font-medium leading-snug text-slate-100 italic mb-12">
                    “数智时代，知识工作者的护城河不再是知识储备，而是通过技术杠杆，将学科洞察转化为解决复杂问题的闭环系统能力。”
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">李</div>
                    <div>
                      <p className="font-black text-lg">李祎</p>
                      <p className="text-emerald-500/70 text-sm font-bold tracking-tighter uppercase">Scholar-Operator 实践者</p>
                    </div>
                  </div>
                  <div className="mt-12 flex gap-3">
                    <div className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/10">学术深度</div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/10">实战操作</div>
                    <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/30">数智交付</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">核心服务能力</h2>
              <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">以教育者之心，行架构师之事。为您提供具备学术深度的 AI 落地解决方案。</p>
            </div>
            <Services />
          </div>
        </section>

        <section id="research" className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 uppercase tracking-wider">
                  Research & Insight
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">理论与实践的<br/><span className="text-emerald-600">双轴驱动</span></h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                  李祎始终坚持“从教学痛点出发，用技术精准破局”。在智能时代的教育转场中，致力于构建有温度、有深度、有力度的智能教育生态。
                </p>
                <ResearchAreas />
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-emerald-400/10 rounded-[3rem] blur-3xl -z-10"></div>
                <div className="glass-morphism p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group border-white/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white flex flex-col justify-center items-center transform hover:scale-105 transition-all shadow-xl">
                      <Cpu className="w-8 h-8 text-emerald-400 mb-3" />
                      <span className="text-3xl font-black italic">AI+Edu</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2">实践专家</span>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] border border-emerald-100 flex flex-col justify-center items-center shadow-sm transform hover:scale-105 transition-all">
                      <span className="text-4xl font-black text-emerald-600 italic">20+</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-2">学术成果</span>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] border border-emerald-100 flex flex-col justify-center items-center shadow-sm transform hover:scale-105 transition-all">
                      <span className="text-4xl font-black text-slate-800 italic">100%</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-2">独立架构</span>
                    </div>
                    <div className="bg-emerald-600 p-8 rounded-[2rem] text-white flex flex-col justify-center items-center shadow-lg shadow-emerald-200 transform hover:scale-105 transition-all">
                      <Target className="w-8 h-8 text-white mb-3" />
                      <span className="text-2xl font-black italic">落地交付</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-200 mt-2">闭环保障</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-slate-200 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">数智交互：咨询助手</h2>
            <p className="text-slate-600">基于 Gemini 3 Flash 构建，深度融合学者智慧与实操经验</p>
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
