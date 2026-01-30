
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Wifi } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是李祎老师研发的“数智服务助手”。我已加载李老师在 **大学教育学科** 与 **AI 实操技术** 的复合知识库。无论是高等教育政策咨询，还是具体的 AI 工作流落地，我都能为您提供专业解答。' }
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
          systemInstruction: `你是李祎开发的数智助手。
          李祎个人优势：1. 大学教育学科深度（懂教育逻辑）；2. 智能技术实操敏锐度（能技术落地）。
          你的回答应当：
          - 结合教育学理论与 AI 技术实操。
          - 展现 Scholar-Operator（学者型操作员）的双重底色。
          - 使用 Markdown 优化排版。
          - 具有前瞻性、亲和力且实操性强。`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || '暂无法响应，请稍后再试。';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'model', text: `**[系统提示]** 网络连接波动，请重试。` }]);
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
              <Wifi className="w-2.5 h-2.5" /> <span>Expert Intelligence Connected</span>
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
              <span className="text-xs text-slate-400 font-bold tracking-widest">数智转化中...</span>
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
          placeholder="向双向专家咨询教育、技术或项目..."
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
