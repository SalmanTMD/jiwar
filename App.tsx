import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Info, 
  Zap, 
  CheckCircle2, 
  Plus, 
  Minus 
} from 'lucide-react';
import { 
  ABOUT_PROJECT, 
  FINANCIAL_OFFER, 
  MAIN_PILLARS, 
  PROJECTS_SCOPE 
} from './constants.tsx';
import { Logo } from './Logo.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillarGroups = [
    { id: 0, title: 'تأسيس المشاريع الاتصالية', indices: [0, 1, 3, 4, 5], color: '#7C5E92' },
    { id: 1, title: 'تشغيل العمليات الاتصالية والتسويقية', indices: [2, 6, 7, 8, 9, 10, 11], color: '#FFB82B' },
    { id: 2, title: 'القياس المستمر', indices: [12], color: '#88C9C4' }
  ];

  return (
    <div className="min-h-screen bg-[#0C0E1C] text-white selection:bg-[#F3C14F] selection:text-[#0C0E1C]" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0C0E1C]/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-center items-center">
          <Logo className="h-10 md:h-12 w-auto" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E1C]/20 via-[#0C0E1C]/80 to-[#0C0E1C]"></div>
          <img 
            src="https://images.prismic.io/jiwar/aRpQf7pReVYa4he1_Clipboard-2025-11-0515.38.45.png?auto=format%2Ccompress&fit=max&w=3840" 
            className="w-full h-full object-cover opacity-70 animate-pulse-slow"
            alt="Burj Jiwar"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            بناء القيمة <br />
            <span className="text-[#F3C14F]">وتعظيم الأثر</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-300 font-medium">
            عرض فني ومالي لتنفيذ الأنشطة الاتصالية والتسويقية لبرج جوار
          </p>
          <a href="#project" className="bg-[#F3C14F] text-[#0C0E1C] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-block shadow-2xl shadow-[#F3C14F]/20">
            استكشاف المشروع
          </a>
        </div>
      </header>

      {/* Project Understanding */}
      <section id="project" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#88C9C4] animate-pulse"></span>
                <span className="text-sm font-bold text-[#88C9C4] uppercase tracking-widest">فهمنا للمشروع</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">القرب الذي <br/><span className="text-[#F3C14F]">يصنع الفرق</span></h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                برج جوار ليس مجرد بناء، بل هو وجهة تجسد مفهوم "القرب" بكل أبعاده، يقع في قلب "وجهة مسار"، البوابة الأكثر تطوراً لمكة المكرمة.
              </p>
              <div className="grid gap-6">
                {ABOUT_PROJECT.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="p-3 bg-[#F3C14F]/10 rounded-2xl text-[#F3C14F]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#F3C14F]/5 rounded-[3rem] blur-2xl group-hover:bg-[#F3C14F]/10 transition-all"></div>
              <img 
                src="https://images.prismic.io/jiwar/aRgzw7pReVYa4gwY_BulkImagestoWebPConverter-5--1-.webp?auto=format%2Ccompress&fit=max&w=3840" 
                className="rounded-[3rem] shadow-4xl w-full relative z-10 border border-white/10" 
                alt="Jiwar Architecture" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-gradient-to-b from-[#0C0E1C] to-[#131A2B]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              نعمل في TMD على <br/>
              <span className="text-[#88C9C4]">3 محاور رئيسة</span>
            </h2>
            <div className="w-20 h-1 bg-[#F3C14F] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MAIN_PILLARS.map((p, i) => (
              <div key={i} className="bg-[#161B33] p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center hover:translate-y-[-10px] transition-all">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-2xl text-white" style={{backgroundColor: p.color}}>
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{p.title}</h3>
                <div className="w-12 h-1 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-32 bg-[#0C0E1C]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">نطاق العمل <span className="text-[#F3C14F]">التفصيلي</span></h2>
            <p className="text-gray-500 text-xl">13 مشروعاً استراتيجياً لضمان نجاح الحملات الاتصالية</p>
          </div>

          <div className="space-y-12">
            {pillarGroups.map((group) => (
              <div key={group.id} className="space-y-6">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-1.5 h-12 rounded-full" style={{backgroundColor: group.color}}></div>
                  <h3 className="text-3xl font-black" style={{color: group.color}}>{group.title}</h3>
                </div>
                
                <div className="grid gap-4">
                  {group.indices.map((idx) => {
                    const p = PROJECTS_SCOPE[idx];
                    const isOpen = expandedProjectId === idx;
                    return (
                      <div key={idx} className={`bg-[#161B33] rounded-[2rem] border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#F3C14F]/40 ring-1 ring-[#F3C14F]/20 shadow-2xl bg-[#1E2B5A]' : 'border-white/5 hover:border-white/20'}`}>
                        <button 
                          onClick={() => setExpandedProjectId(isOpen ? null : idx)} 
                          className="w-full p-8 flex items-center justify-between text-right outline-none"
                        >
                          <div className="flex items-center gap-6">
                            <span className="text-white/20 font-black text-2xl hidden md:block">{String(idx + 1).padStart(2, '0')}</span>
                            <div className={`p-4 rounded-xl transition-colors ${isOpen ? 'bg-[#F3C14F] text-[#0C0E1C]' : 'bg-white/5 text-[#F3C14F]'}`}>
                              {p.icon}
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold">{p.title}</h4>
                          </div>
                          <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#F3C14F] text-[#0C0E1C] border-transparent' : ''}`}>
                             {isOpen ? <Minus size={20}/> : <Plus size={20}/>}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-8 pb-10 pt-4 md:px-24">
                            <div className="h-px bg-white/10 mb-8"></div>
                            <p className="text-gray-300 text-lg leading-loose mb-10">{p.description}</p>
                            <div className="grid md:grid-cols-2 gap-10">
                              <div className="space-y-6">
                                <h5 className="text-[#F3C14F] font-black flex items-center gap-3"><Zap size={18}/> الأنشطة:</h5>
                                <ul className="space-y-3">
                                  {p.activities.map((act, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex gap-3"><span className="text-[#F3C14F]">•</span> {act}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-black/20 p-8 rounded-3xl border border-white/5">
                                <h5 className="text-[#88C9C4] font-black flex items-center gap-3 mb-6"><CheckCircle2 size={18}/> المخرجات:</h5>
                                <div className="flex flex-wrap gap-3">
                                  {p.outputs.map((out, i) => (
                                    <span key={i} className="bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/5">{out}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section className="py-32 bg-[#0C0E1C]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#1E2B5A] p-12 md:p-20 rounded-[4rem] shadow-4xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3C14F]/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-7xl font-black text-[#F3C14F] mb-16 relative z-10">العرض المالي</h2>
            
            <div className="space-y-4 relative z-10">
              {FINANCIAL_OFFER.map((row) => (
                <div key={row.id} className={`flex flex-col md:flex-row justify-between items-start md:items-center p-8 rounded-3xl transition-all ${row.isTotal ? 'bg-[#F3C14F] text-[#0C0E1C] shadow-2xl scale-[1.02]' : 'bg-white/5 border border-white/5 hover:border-white/20'}`}>
                  <span className="font-bold text-lg mb-2 md:mb-0">{row.item}</span>
                  <span className="font-black text-2xl md:text-3xl" dir="ltr">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex gap-6 p-8 bg-white/5 rounded-3xl items-start border border-white/5 relative z-10">
              <div className="p-3 bg-[#88C9C4]/20 text-[#88C9C4] rounded-xl"><Info size={24}/></div>
              <div className="text-sm md:text-base text-gray-400 font-medium space-y-2">
                <p>• جميع المبالغ المذكورة غير شاملة لضريبة القيمة المضافة.</p>
                <p>• صلاحية هذا العرض 14 يوماً من تاريخ التقديم.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 text-center border-t border-white/5 bg-[#0C0E1C]">
        <Logo className="h-20 mx-auto mb-10 opacity-70" />
        <h3 className="text-3xl md:text-5xl font-black mb-12">نحو مستقبل يليق بـ <br/><span className="text-[#F3C14F]">برج جوار</span></h3>
        <div className="pt-10 border-t border-white/5 max-w-md mx-auto">
          <p className="text-gray-600 text-sm font-bold">© {new Date().getFullYear()} TMD - The Marketing Department</p>
          <p className="text-gray-700 text-xs mt-2 uppercase tracking-widest">Communication & Strategy Operations</p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;