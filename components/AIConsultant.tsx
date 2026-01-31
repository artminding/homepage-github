
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Wifi } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是李祎研发的“数智服务助手”。我深度融合了李老师在 **大学教育学科研究** 与 **AI 技术工程实战** 的复合知识体系。您可以向我咨询关于高等教育数字化转型、AI 提示词工程落地、或知识工作者如何实现技术进化的相关话题。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `你是李祎研发的“数智专家助理”。
          核心定位：Scholar-Operator（学者型操作员）。
          知识背景：
          1. 大学教育领域：深谙高等教育政策、治理体系、教学设计与教育评估。
          2. 智能技术领域：精通 LLM 落地应用、RAG 架构、提示词工程（Prompt Engineering）与工作流自动化。
          
          回答准则：
          - 结合“学术广度”与“工程精度”。在讨论教育问题时引入技术视角，在讨论技术问题时回归教育本质。
          - 针对“知识工作者如何发挥优势”的提问，强调“复合背景”带来的“翻译官”与“连接器”价值。
          - 风格：睿智、稳健、实战派。
          - 排版：使用 Markdown 增强可读性（标题、列表、粗体）。`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || '暂无法响应，请稍后再试。';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', text: `**[系统提示]** 网络波动，请重试或直接联系李老师。` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass-morphism rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[600px] border border-white/50 relative">
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-black text-base tracking-tight">李祎 · 数智助手</h3>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
              <Wifi className="w-2.5 h-2.5" /> <span>Consulting Mode Active</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50/30">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${m.role === 'user' ? 'bg-slate-800 text-white' : 'bg-white border border-emerald-100 text-emerald-600'}`}>
                {m.role === 'user' ? <User className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
              </div>
              <div className={`p-5 rounded-3xl shadow-sm ${
                m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                <div className="markdown-body text-sm leading-relaxed">
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-3">
              <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
              <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">Expert reasoning...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100 flex gap-4 items-center">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
          placeholder="向专家助手提问，如：'如何评价AI在高校评价体系中的作用？'"
          className="flex-grow px-6 py-4 bg-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border-transparent border focus:bg-white"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl group disabled:opacity-30"
        >
          <Send className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default AIConsultant;
