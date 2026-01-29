
import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, Loader2, PartyPopper } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) {
      alert('请完整填写信息，方便我与您联系。');
      return;
    }

    setIsSubmitting(true);

    try {
      /** 
       * 开发者提示：
       * 1. 如果使用 Formspree 等服务，此处应调用 fetch("https://formspree.io/f/your_id", ...)
       * 2. 如果使用自建后端，此处调用您的 API 接口
       */
      
      // 模拟网络请求延迟
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('收到留言：', formData);
      setIsSubmitted(true);
      setFormData({ name: '', contact: '', message: '' });
      
      // 5秒后恢复表单状态
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert('提交失败，请稍后重试或直接通过邮箱/微信联系。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 italic">链接 · 信任 · 价值</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              在这个充满变化的数智时代，每一个教育环节都值得用 AI 重新审视。
              如果您有讲座邀约、项目咨询或研发合作意向，期待与您的每一次连接。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">电子邮箱</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold">artmind@foxmail.com</span>
                    <button onClick={() => copyToClipboard('artmind@foxmail.com', 'email')} className="text-slate-500 hover:text-white transition-colors">
                      {copied === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">微信联络</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold">artmindboy</span>
                    <button onClick={() => copyToClipboard('artmindboy', 'wx')} className="text-slate-500 hover:text-white transition-colors">
                      {copied === 'wx' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative min-h-[400px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PartyPopper className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">提交成功！</h3>
                  <p className="text-slate-400">感谢您的信任，我会尽快给您回复。</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-emerald-500 text-sm font-semibold hover:underline"
                  >
                    再次留言
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">快捷留言</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="您的姓名" 
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" 
                      />
                      <input 
                        type="text" 
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="您的联系方式 (手机/微信/邮箱)" 
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" 
                      />
                    </div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4} 
                      placeholder="描述您的合作需求或咨询问题..." 
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    ></textarea>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/40 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          正在发送...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          提交信息
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-emerald-600/10 blur-[150px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600/10 blur-[150px] -z-0"></div>
    </section>
  );
};

export default Contact;
