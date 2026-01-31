
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Wifi, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是李祎老师研发的“数智专家助理”。我深度同步了李老师在 **大学教育学科研究** 与 **AI 技术工程实战** 的复合知识库。您可以向我咨询关于高等教育数字化转型策略、AI 工具在教学科研中的落地路径，或是探讨知识工作者如何实现“数智进化”。' }
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
          systemInstruction: `你是“李祎·数智专家助理”。
          你的使命是展现知识工作者在“大学教育”与“智能技术操作”双重领域的深度融合优势。
          
          核心人设：
          - 身份：Scholar-Operator（学者型操作员）。
          - 专长：1. 大学治理、教育政策、教学设计、量化评估；2. LLM 落地、提示词工程、自动化流构建。
          
          交流准则：
          1. 降维打击：在讨论技术时，用教育学底层逻辑解释其意义；在讨论教育时，用技术手段提供落地路径。
          2. 连接器思维：强调“知识工作者”的优势在于作为教育与技术的“连接器”，能够打破象牙塔与工具论的隔阂。
          3. 风格：睿智、深刻、务实。避免空洞的赞美，多提供结构化的分析。
          4. 格式：严格使用 Markdown 进行排版。`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || '网络开小差了，请稍后重试。';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', text: `**[系统状态]** 当前访问压力较大，建议直接点击下方“联系我”与李老师建立即时连接。` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass-morphism rounded-[3rem] overflow-hidden shadow-2xl flex flex-col h-[650px] border border-white/50 relative">
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-black text-lg tracking-tight">李祎 · 数智助手</h3>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
              <Wifi className="w-2.5 h-2.5 animate-pulse" /> <span>Scholar-Operator Mode</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-400 font-medium">
          <MessageSquare className="w-3.5 h-3.5" /> 知识库已同步
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-10 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${m.role === 'user' ? 'bg-slate-800 text-white' : 'bg-white border border-emerald-100 text-emerald-600'}`}>
                {m.role === 'user' ? <User className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
              </div>
              <div className={`p-6 rounded-[2rem] shadow-sm ${
                m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                <div className="markdown-body text-[15px] leading-relaxed">
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100 flex items-center gap-3">
              <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
              <span className="text-xs text-slate-400 font-black tracking-widest uppercase">Expert Analysis...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-8 bg-white border-t border-slate-100 flex gap-4 items-center">
        <div className="flex-grow relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
            placeholder="探讨数智进化论..."
            className="w-full pl-6 pr-14 py-5 bg-slate-100 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border-transparent border focus:bg-white focus:shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-900 text-white rounded-xl hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center group disabled:opacity-30"
          >
            <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
