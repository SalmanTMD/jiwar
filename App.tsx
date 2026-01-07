
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  BarChart3, 
  Menu,
  X,
  Info,
  Zap,
  ArrowRight,
  Target,
  Settings,
  Activity,
} from 'lucide-react';
import { 
  ABOUT_PROJECT, 
  FINANCIAL_OFFER,
  TMD_INSIGHTS,
  CHALLENGE_CONSEQUENCES,
  MAIN_PILLARS,
  PROJECTS_SCOPE,
} from './constants';
import { Logo } from './Logo';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePillar, setActivePillar] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرؤية', href: '#project' },
    { name: 'التحديات', href: '#market-challenges' },
    { name: 'المنهجية', href: '#methodology' },
    { name: 'نطاق العمل', href: '#scope' },
    { name: 'الاستثمار', href: '#financial' },
  ];

  const pillarGroups = [
    { id: 0, title: 'التأسيس', indices: [0, 1, 3, 4, 5], color: '#7C5E92' },
    { id: 1, title: 'التشغيل', indices: [2, 6, 7, 8, 9, 10, 11], color: '#FFB82B' },
    { id: 2, title: 'القياس', indices: [12], color: '#88C9C4' }
  ];

  return (
    <div className="min-h-screen bg-[#0C0E1C] text-white selection:bg-[#F3C14F] selection:text-[#0C0E1C] overflow-x-hidden" dir="rtl">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 right-0 h-1 bg-[#F3C14F] z-[60] transition-all duration-100" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0C0E1C]/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-1 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#F3C14F]/50 transition-all">
              <Logo className="h-8 md:h-10 w-auto" />
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-sm font-bold tracking-tighter text-[#F3C14F]">TMD</div>
              <div className="text-[10px] text-gray-400 font-medium">A TTP Company</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-400 hover:text-[#F3C14F] transition-all font-bold text-sm tracking-wide">
                {link.name}
              </a>
            ))}
            <a href="#financial" className="bg-[#F3C14F] text-[#0C0E1C] px-6 py-2.5 rounded-full font-black text-sm hover:shadow-[0_0_20px_rgba(243,193,79,0.3)] transition-all">
              العرض المالي
            </a>
          </div>

          <button className="lg:hidden text-[#F3C14F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E1C]/60 via-[#0C0E1C]/90 to-[#0C0E1C]"></div>
          <img 
            src="https://images.prismic.io/jiwar/aRpQf7pReVYa4he1_Clipboard-2025-11-0515.38.45.png?auto=format%2Ccompress&fit=max&w=3840" 
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Burj Jiwar"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-8">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F3C14F] uppercase">عرض فني ومالي لمشروع برج جوار</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]">
            بناء القيمة <br />
            <span className="text-[#F3C14F]">وتعظيم الأثر</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            نموذج الشراكة الاستراتيجية المتكاملة لتسويق وتشغيل أيقونة وجهة مسار "برج جوار"
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#methodology" className="bg-[#F3C14F] text-[#0C0E1C] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all">استكشاف المنهجية</a>
            <a href="#financial" className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">عرض الميزانيات</a>
          </div>
        </div>
      </header>

      {/* Project & Challenges Sections remain standard to maintain consistency... */}
      <section id="project" className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div className="text-right">
              <h4 className="text-[#88C9C4] font-black mb-4">تحليلنا للمشروع</h4>
              <h2 className="text-4xl md:text-6xl font-black mb-8">فهمنا لـ <span className="text-[#F3C14F]">نطاق العمل</span></h2>
              <p className="text-gray-400 text-xl leading-loose mb-12">برج جوار ليس مجرد بناء، بل هو وجهة تجسد مفهوم "القرب" بكل أبعاده في قلب وجهة مسار المكة.</p>
              <div className="grid gap-6">
                 {ABOUT_PROJECT.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                       <div className="text-[#F3C14F]">{item.icon}</div>
                       <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-500 text-sm">{item.description}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <img src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] shadow-3xl" alt="Makkah" />
              <div className="absolute -bottom-10 -left-10 bg-[#2C3668] p-8 rounded-3xl shadow-2xl text-center">
                 <div className="text-4xl font-black text-[#F3C14F]">850م</div>
                 <div className="text-xs text-gray-300">عن الحرم المكي</div>
              </div>
           </div>
        </div>
      </section>

      {/* Redesigned Methodology Section */}
      <section id="methodology" className="py-32 bg-gradient-to-b from-[#0C0E1C] to-[#131A2B]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h4 className="text-[#F3C14F] font-black mb-4 tracking-widest uppercase text-sm">منهجية العمل الذكي</h4>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">نعمل وفق <span className="text-[#88C9C4]">محاور استراتيجية</span> مترابطة</h2>
            <p className="text-gray-400 text-xl font-medium">لا نكتفي بالتخطيط، بل نؤسس ونشغل ونقيس الأداء لضمان النجاح.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2"></div>
            
            {MAIN_PILLARS.map((pillar, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="bg-[#161B33]/50 backdrop-blur-xl border border-white/5 p-10 rounded-[3rem] hover:border-[#F3C14F]/40 transition-all duration-500 h-full flex flex-col items-center text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: pillar.color, boxShadow: `0 10px 30px ${pillar.color}44` }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#F3C14F] transition-colors">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium mb-8">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* New Narrative Bridge Design */}
          <div className="mt-48 relative max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
               <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-[#F3C14F]"></div>
               <div className="w-4 h-4 rounded-full bg-[#F3C14F] shadow-[0_0_20px_#F3C14F] mb-12"></div>
               
               <div className="bg-[#1E2B5A] p-12 md:p-16 rounded-[4rem] border border-[#F3C14F]/20 relative overflow-hidden group shadow-3xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3C14F]/5 blur-[100px] rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#88C9C4]/5 blur-[100px] rounded-full"></div>
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl md:text-5xl font-black leading-[1.3] text-white">
                      وحتى نصل لهذا النموذج، عملنا على <br />
                      <span className="text-[#F3C14F]">نطاق عمل مفصّل</span> للتسويق لبرج جوار <br />
                      <span className="text-lg md:text-xl text-gray-400 font-bold block mt-6">عبر 13 مشروع اتصالي رئيسي، تفصيلها كما يلي:</span>
                    </h3>
                  </div>
               </div>
               
               <div className="w-4 h-4 rounded-full bg-[#F3C14F] shadow-[0_0_20px_#F3C14F] mt-12 mb-12"></div>
               <div className="w-[1px] h-24 bg-gradient-to-t from-white/20 to-[#F3C14F]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Scope/Projects Section */}
      <section id="scope" className="py-32 bg-[#0C0E1C] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-20 left-10 w-96 h-96 bg-[#7C5E92] blur-[150px] rounded-full"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB82B] blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6">
          {pillarGroups.map((group, gIdx) => (
            <div key={group.id} className="mb-40 last:mb-0">
               <div className="flex flex-col md:flex-row items-center gap-8 mb-16 border-b border-white/5 pb-12">
                  <div className="w-24 h-24 shrink-0 rounded-[2rem] flex items-center justify-center text-white shadow-3xl text-3xl font-black" style={{ backgroundColor: group.color }}>
                    {gIdx + 1}
                  </div>
                  <div className="text-center md:text-right">
                    <h2 className="text-4xl md:text-5xl font-black mb-2" style={{ color: group.color }}>{group.title}</h2>
                    <p className="text-gray-400 text-xl font-bold">المشاريع المرتبطة بمرحلة {group.title}</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.indices.map((idx) => {
                    const project = PROJECTS_SCOPE[idx];
                    return (
                      <div key={idx} className="bg-[#161B33] p-10 rounded-[3rem] border border-white/5 hover:border-white/20 transition-all group flex flex-col h-full hover:-translate-y-2">
                        <div className="flex justify-between items-start mb-10">
                           <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                              {project.icon}
                           </div>
                           <span className="text-white/10 font-black text-4xl group-hover:text-white/20 transition-colors">{idx + 1}</span>
                        </div>
                        <h3 className="text-2xl font-black mb-6 group-hover:text-[#F3C14F] transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-10 opacity-80 group-hover:opacity-100">{project.description}</p>
                        
                        <div className="mt-auto space-y-3">
                           <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">المخرجات الرئيسية:</div>
                           <div className="flex flex-wrap gap-2">
                              {project.outputs.map((out, oIdx) => (
                                <span key={oIdx} className="text-[10px] bg-white/5 px-4 py-2 rounded-full border border-white/10 font-bold group-hover:border-[#F3C14F]/30">
                                  {out}
                                </span>
                              ))}
                           </div>
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Proposal Section remains high-end */}
      <section id="financial" className="py-32 container mx-auto px-6">
        <div className="bg-[#1E2B5A] rounded-[4rem] p-12 md:p-24 border border-white/5 shadow-4xl text-right">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <div>
                <h2 className="text-4xl md:text-7xl font-black text-[#F3C14F] mb-6">الاستثمار المقترح</h2>
                <p className="text-gray-400 text-xl max-w-2xl leading-relaxed font-medium">نقدم نموذجاً مالياً استثمارياً يهدف لتعظيم القيمة العقارية وبناء طلب حقيقي مستدام لبرج جوار.</p>
             </div>
             <div className="bg-[#131A2B] p-10 rounded-3xl border border-white/5 text-center min-w-[300px]">
                <BarChart3 className="w-16 h-16 text-[#F3C14F] mx-auto mb-4" />
                <div className="text-sm text-gray-500 font-bold uppercase mb-2">مدة العقد</div>
                <div className="text-4xl font-black">12 شهر</div>
             </div>
          </div>

          <div className="overflow-x-auto mb-20">
             <table className="w-full text-right border-separate border-spacing-y-4">
                <thead>
                   <tr className="text-gray-500 text-xs font-black uppercase tracking-widest">
                      <th className="p-6">بند الاستثمار</th>
                      <th className="p-6 text-left">القيمة التقديرية (ريال)</th>
                   </tr>
                </thead>
                <tbody>
                   {FINANCIAL_OFFER.map((row) => (
                      <tr key={row.id} className={`${row.isTotal ? 'bg-[#F3C14F] text-[#0C0E1C]' : 'bg-white/5 hover:bg-white/10'} transition-all`}>
                         <td className="p-8 rounded-r-3xl font-black text-xl">{row.item}</td>
                         <td className="p-8 rounded-l-3xl text-left font-black text-2xl" dir="ltr">{row.value}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 font-bold text-sm bg-white/5 p-12 rounded-[3rem]">
             <div className="space-y-4">
                <h4 className="text-white text-lg flex items-center gap-3"><Info /> سياسة التشغيل</h4>
                <p>• ميزانية الإعلانات تدار بشفافية تامة عبر تقارير أداء دورية.</p>
                <p>• جميع الأسعار المذكورة لا تشمل ضريبة القيمة المضافة (15%).</p>
             </div>
             <div className="space-y-4">
                <h4 className="text-white text-lg flex items-center gap-3"><Zap /> معايير النجاح</h4>
                <p>• ضمان اتساق الهوية البصرية بنسبة 100% في كافة القنوات الإعلامية.</p>
                <p>• تقارير شهرية مفصلة تشمل الوصول والتفاعل ومعدلات التحويل.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 text-center relative">
        <Logo className="h-24 mx-auto mb-12 opacity-80" />
        <h2 className="text-4xl md:text-8xl font-black mb-12">نحو مستقبل يليق بـ <br /><span className="text-[#F3C14F]">برج جوار</span></h2>
        <div className="w-24 h-[2px] bg-[#F3C14F] mx-auto mb-12"></div>
        <div className="text-gray-500 font-bold text-sm">
          © {new Date().getFullYear()} TMD | صُنع بشغف لبرج جوار ووجهة مسار
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideDown { animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
