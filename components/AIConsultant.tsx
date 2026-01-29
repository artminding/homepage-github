
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Wifi, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是李祎老师开发的“数智咨询助手”。目前我已接入 Gemini 3 Pro 高级模型，可以为您提供关于 **AI 教育应用**、**高等教育研究** 及 **金融代数学习** 的专业建议。请问有什么可以帮您？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // GUIDELINE: API key availability is handled externally. Do not check or prompt the user for it.

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // GUIDELINE: Create a new GoogleGenAI instance right before making an API call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        // GUIDELINE: Using gemini-3-pro-preview for complex reasoning tasks including math/STEM
        model: 'gemini-3-pro-preview',
        contents: userMsg,
        config: {
          systemInstruction: `你是李祎开发的数智教育助手。李祎是一名致力于 AI 和高等教育交叉研究的专家。
          李祎的服务包括：生成式 AI 讲座、技术咨询、产品研发。
          研究领域：人工智能应用（大模型教育应用）、高等教育研究、金融代数教学。
          你的回答应当专业、富有启发性、有亲和力，并体现李祎在这些领域的跨学科洞察。
          回答时请使用 Markdown 格式（如标题、列表、加粗）来提高内容的可读性。
          如果用户询问联系方式，请引导其查看页面底部的 artmind@foxmail.com 或微信 artmindboy。`,
          temperature: 0.8,
          topP: 0.95,
        }
      });

      // GUIDELINE: Directly access the .text property of GenerateContentResponse
      const aiText = response.text || '抱歉，我现在无法生成有效的回复，请稍后再试。';
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      console.error('AI Response Error:', error);
      let errorMsg = '连接助手失败，请检查网络或 API 配置。';
      if (error?.message?.includes('403')) errorMsg = 'API Key 权限受限或额度不足。';
      if (error?.message?.includes('404')) errorMsg = '请求的模型版本不存在或已停用。';
      
      setMessages(prev => [...prev, { role: 'model', text: `**[系统错误]** ${errorMsg}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto glass-morphism rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[550px] border border-emerald-100 relative">
      {/* 顶部状态栏 */}
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm">李祎 · 数智助手</h3>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
              <Wifi className="w-2.5 h-2.5" /> <span>在线 (Gemini 3 Pro)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 rounded bg-white/10 text-[9px] font-mono text-slate-300">
            EDU-LLM-V1
          </div>
        </div>
      </div>

      {/* 聊天内容区 */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${m.role === 'user' ? 'bg-slate-800 text-white' : 'bg-white border border-emerald-100 text-emerald-600'}`}>
                {m.role === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              </div>
              <div className={`p-4 rounded-2xl shadow-sm ${
                m.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                <div className="markdown-body text-sm">
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                </div>
                {m.text.includes('[系统错误]') && <AlertCircle className="w-4 h-4 inline-block ml-1 text-rose-500" />}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-tight">AI 正在深度思考教育方案...</span>
            </div>
          </div>
        )}
      </div>

      {/* 输入区域 */}
      <div className="p-4 bg-white border-t border-slate-100 flex gap-3 items-center">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
          placeholder="询问关于 AI 教育、金融代数或咨询合作..."
          className="flex-grow px-5 py-3.5 bg-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all border-transparent border focus:bg-white"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-slate-900 text-white p-3.5 rounded-2xl hover:bg-emerald-600 transition-all disabled:opacity-30 shadow-lg active:scale-95 group"
          title="发送咨询"
        >
          <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
      
      {/* 底部小提示 */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-[9px] text-slate-400 text-center uppercase tracking-widest">
        Powered by Google Gemini 3 Pro · Data Privacy Guaranteed
      </div>
    </div>
  );
};

export default AIConsultant;
