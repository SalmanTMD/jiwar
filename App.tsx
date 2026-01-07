
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  BarChart3, 
  Menu,
  X,
  TrendingUp,
  Users,
  Info,
  Zap,
  Shield,
  Activity,
  ArrowLeft,
  Target,
  FileCheck,
  MapPin,
  Star
} from 'lucide-react';
import { 
  ABOUT_PROJECT, 
  FINANCIAL_OFFER,
  TMD_INSIGHTS,
  CHALLENGE_CONSEQUENCES,
  MAIN_PILLARS,
  PROJECTS_SCOPE,
  COLORS 
} from './constants';
import { Logo } from './Logo';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    { name: 'الاستراتيجية', href: '#methodology' },
    { name: 'نطاق العمل', href: '#scope' },
    { name: 'الاستثمار', href: '#financial' },
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
              <div className="text-[10px] text-gray-400 font-medium">شركة تابعة لـ TTP</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-400 hover:text-[#F3C14F] transition-all font-bold text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-[#F3C14F] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#financial" 
              className="bg-gradient-to-r from-[#F3C14F] to-[#d4a844] text-[#0C0E1C] px-6 py-2.5 rounded-full font-black text-sm hover:shadow-[0_0_20px_rgba(243,193,79,0.3)] transition-all hover:-translate-y-0.5"
            >
              العرض المالي
            </a>
          </div>

          <button className="lg:hidden text-[#F3C14F] p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0C0E1C]/98 backdrop-blur-2xl border-t border-white/10 p-8 flex flex-col gap-6 animate-fadeIn shadow-3xl text-right">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-300 hover:text-[#F3C14F] text-xl font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E1C]/60 via-[#0C0E1C]/80 to-[#0C0E1C]"></div>
          <img 
            src="https://images.prismic.io/jiwar/aRpQf7pReVYa4he1_Clipboard-2025-11-0515.38.45.png?auto=format%2Ccompress&fit=max&w=3840" 
            alt="مشروع برج جوار" 
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[10s] hover:scale-100"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-8 animate-slideDown">
            <span className="w-2 h-2 rounded-full bg-[#88C9C4] animate-ping"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">عرض مشروع برج جوار</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] animate-slideUp">
            بناء القيمة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C14F] via-[#88C9C4] to-[#F3C14F]">وتعظيم الأثر</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed animate-slideUp delay-200">
            نموذج الشراكة الاستراتيجية المتكاملة لتسويق وتشغيل أيقونة وجهة مسار "برج جوار"
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slideUp delay-300">
            <a href="#project" className="bg-[#F3C14F] text-[#0C0E1C] px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3">
              استكشاف الرؤية <ChevronDown />
            </a>
            <div className="flex items-center gap-4 text-gray-400 font-bold px-8">
              <span>الشريك التسويقي</span>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <span>بواسطة TMD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Project Essence Section - "فهمنا لنطاق العمل" */}
      <section id="project" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden h-[400px] translate-y-8 shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Makkah View" />
                </div>
                <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Detail View" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2C3668] p-8 rounded-[2rem] border-4 border-[#0C0E1C] shadow-3xl text-center min-w-[200px] z-20">
                <div className="text-4xl font-black text-[#F3C14F] mb-1">850م</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">عن الحرم المكي</div>
              </div>
            </div>

            <div className="order-1 lg:order-1 text-right">
              <div className="text-[#88C9C4] font-black tracking-widest mb-6 flex items-center gap-3">
                <div className="w-12 h-[2px] bg-[#88C9C4]"></div>
                <span>تحليلنا للمشروع</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">فهمنا لـ <br /><span className="text-[#F3C14F]">نطاق العمل</span></h2>
              <p className="text-gray-400 text-xl leading-loose mb-12">
                برج جوار ليس مجرد بناء، بل هو وجهة تجسد مفهوم "القرب" بكل أبعاده. يقع في قلب "وجهة مسار"، البوابة الأكثر تطوراً وحداثة لمكة المكرمة، ليقدم تجربة سكنية واستثمارية لا تضاهى.
              </p>
              
              <div className="space-y-8">
                {ABOUT_PROJECT.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-14 h-14 shrink-0 bg-[#161B33] rounded-2xl flex items-center justify-center text-[#F3C14F] group-hover:bg-[#F3C14F] group-hover:text-[#0C0E1C] transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-[#F3C14F] transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Realities Section */}
      <section id="market-challenges" className="py-32 bg-white text-[#0C0E1C] rounded-[4rem] relative z-10 mx-6 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h4 className="text-[#2C3668] font-black mb-4 tracking-[0.3em] uppercase">سياق السوق</h4>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              خبرتنا في السوق السعودي <br />
              <span className="text-[#88C9C4] underline decoration-[#2C3668] underline-offset-8">+200 عميل</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium">
              بعد عقد من الزمن، استخلصنا التحديات الحقيقية التي تواجه المشاريع العقارية الكبرى:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-32 text-right">
            {TMD_INSIGHTS.map((insight, idx) => (
              <div key={idx} className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col items-center hover:shadow-2xl transition-all group">
                <div className="mb-8 p-6 bg-white rounded-[2rem] text-[#2C3668] shadow-sm group-hover:scale-110 transition-transform">
                  {insight.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-[#2C3668] transition-colors text-center">{insight.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-center">{insight.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-black mb-16 inline-block relative after:content-[''] after:absolute after:bottom-[-10px] after:right-0 after:w-full after:h-1 after:bg-[#911225]">وتؤدي هذه التحديات الحالية إلى:</h3>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center">
              {CHALLENGE_CONSEQUENCES.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-48 h-48 rounded-full bg-[#911225] text-white flex flex-col items-center justify-center p-8 text-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                    <span className="text-xl font-black leading-tight">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-32 max-w-5xl mx-auto">
               <div className="bg-gradient-to-r from-[#2C3668] to-[#0C0E1C] rounded-[3rem] p-12 text-white relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                     <div className="text-right">
                        <h4 className="text-[#F3C14F] font-bold mb-4">حلول TMD</h4>
                        <h3 className="text-3xl md:text-5xl font-black leading-tight">
                           ولتجاوز هذه التحديات.. <br />
                           نؤسس لك <span className="text-[#88C9C4]">قسماً تسويقياً متكاملاً</span>
                        </h3>
                     </div>
                     <div className="shrink-0 bg-white p-6 rounded-3xl group-hover:rotate-12 transition-transform">
                        <Logo className="h-20 text-[#2C3668]" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Methodology Section */}
      <section id="methodology" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h4 className="text-[#F3C14F] font-black mb-4 tracking-widest uppercase">المنهجية المتبعة</h4>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-center">نعمل وفق <span className="text-[#88C9C4]">محاور استراتيجية</span> واضحة</h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
            {MAIN_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex-1 bg-[#161B33] p-12 rounded-[4rem] border border-white/5 hover:border-[#F3C14F]/20 transition-all group flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl group-hover:-translate-y-2 transition-transform" style={{ backgroundColor: pillar.color }}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 text-white group-hover:text-[#F3C14F] transition-colors">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-32 border-t border-white/5 text-center">
            <h3 className="text-3xl font-black mb-20 text-[#F3C14F]">نموذج الشراكة (بناء - تشغيل - نقل الخبرة)</h3>
            <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
               {[
                 { t: 'بناء', a: 'تأسيس', d: 'بناء الأنظمة، القنوات، واختيار الشركاء.', icon: <Zap /> },
                 { t: 'تشغيل', a: 'إدارة', d: 'إدارة الحملات اليومية وضمان النتائج.', icon: <Activity /> },
                 { t: 'نقل الخبرة', a: 'تدريب', d: 'تدريب الفريق الداخلي وتسليم المهام.', icon: <Shield /> }
               ].map((phase, i) => (
                 <div key={i} className="bg-[#0C0E1C] p-8 rounded-3xl border border-white/10 group hover:bg-[#161B33] transition-colors">
                    <div className="w-16 h-16 bg-[#2C3668] rounded-full flex items-center justify-center text-[#F3C14F] mx-auto mb-6 text-2xl group-hover:rotate-[360deg] transition-transform duration-700">
                      {phase.icon}
                    </div>
                    <div className="text-xs font-black text-[#88C9C4] mb-2 uppercase tracking-widest">{phase.t}</div>
                    <h4 className="text-2xl font-black mb-4">{phase.a}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{phase.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL Detailed Execution Scope Section - FIXED ALIGNMENT */}
      <section id="scope" className="py-32 bg-white text-[#0C0E1C]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="text-right flex-1">
              <h4 className="text-[#2C3668] font-black mb-4 tracking-widest uppercase">نطاق التنفيذ الكامل</h4>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">نطاق العمل: <br />المشاريع الاتصالية الكاملة</h2>
              <p className="text-gray-600 text-xl max-w-xl">خطة تنفيذية متكاملة بـ 13 مشروعاً تغطي كافة النشاطات والمخرجات الاتصالية لبرج جوار.</p>
            </div>
            <div className="bg-[#2C3668] text-[#F3C14F] p-8 rounded-3xl font-black text-center min-w-[180px] shadow-xl">
               <div className="text-5xl">13</div>
               <div className="text-xs uppercase mt-2 font-bold tracking-widest">مشروعاً استراتيجياً</div>
            </div>
          </div>

          <div className="space-y-16">
            {PROJECTS_SCOPE.map((project, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-[3rem] border border-gray-100 p-10 md:p-16 hover:bg-[#2C3668] hover:text-white transition-all duration-700 shadow-sm hover:shadow-2xl">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Right Side: Icon & Title (Start in RTL) */}
                  <div className="md:w-1/3 text-right">
                    <div className="inline-block p-6 bg-white rounded-3xl shadow-lg mb-8 group-hover:bg-[#0C0E1C] transition-colors">
                      {project.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{project.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="text-xs font-black tracking-widest text-[#F3C14F] uppercase opacity-50">المرحلة رقم {idx + 1}</div>
                  </div>

                  {/* Left Side: Details: Activities & Outputs */}
                  <div className="md:w-2/3 space-y-10 text-right">
                    {/* Activities */}
                    <div>
                      <h4 className="flex items-center gap-3 text-xl font-black mb-6 text-[#2C3668] group-hover:text-[#F3C14F]">
                        <Activity size={24} />
                        <span>النشاطات:</span>
                      </h4>
                      <div className="space-y-4">
                        {project.activities.map((activity, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-4">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#88C9C4] shrink-0"></div>
                            <p className="text-gray-600 group-hover:text-gray-200 text-lg leading-relaxed font-medium">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outputs */}
                    <div className="pt-8 border-t border-gray-200 group-hover:border-white/10">
                      <h4 className="flex items-center gap-3 text-xl font-black mb-6 text-[#88C9C4]">
                        <FileCheck size={24} />
                        <span>المخرجات:</span>
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.outputs.map((output, oIdx) => (
                          <div key={oIdx} className="flex items-center gap-3 bg-white/50 group-hover:bg-black/20 p-4 rounded-2xl border border-gray-100 group-hover:border-white/5">
                            <CheckCircle2 className="text-[#88C9C4] shrink-0" size={18} />
                            <span className="font-bold text-gray-800 group-hover:text-white">{output}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Proposal Section */}
      <section id="financial" className="py-32 bg-[#0C0E1C]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#161B33] to-[#0C0E1C] rounded-[4rem] p-8 md:p-20 border border-white/10 shadow-3xl text-right">
            <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black text-[#F3C14F] mb-6 leading-tight">الاستثمار المقترح <br />(العرض المالي)</h2>
                  <p className="text-gray-400 text-xl font-medium max-w-xl">نقدم نموذجاً مالياً يوازن بين الكفاءة التشغيلية والقدرة على تحقيق العائد على الاستثمار الإعلاني.</p>
               </div>
               <div className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-center min-w-[280px]">
                  <BarChart3 className="w-16 h-16 text-[#F3C14F] mx-auto mb-6" />
                  <div className="text-gray-400 font-bold mb-2 tracking-widest uppercase">مدة العقد</div>
                  <div className="text-4xl font-black text-white">12 شهر</div>
                  <div className="text-xs text-[#88C9C4] mt-2 font-bold uppercase tracking-widest">شراكة سنوية</div>
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-16 text-right">
                <thead>
                  <tr className="text-gray-500 text-xs font-black uppercase tracking-widest border-b border-white/10">
                    <th className="p-8">البند المالي المقترح</th>
                    <th className="p-8 text-left">القيمة (ريال سعودي)</th>
                  </tr>
                </thead>
                <tbody>
                  {FINANCIAL_OFFER.map((row) => (
                    <tr key={row.id} className={`group transition-all ${row.isTotal ? 'bg-[#F3C14F]/10' : 'hover:bg-white/5 border-b border-white/5'}`}>
                      <td className={`p-8 font-bold ${row.isTotal ? 'text-2xl md:text-4xl text-[#F3C14F]' : 'text-white'}`}>{row.item}</td>
                      <td className={`p-8 text-left font-black ${row.isTotal ? 'text-3xl md:text-5xl text-[#F3C14F]' : 'text-2xl text-white'}`} dir="ltr">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-12 rounded-[3rem] border border-white/10">
               <div>
                  <h4 className="text-xl font-black text-[#88C9C4] mb-6 flex items-center gap-3"><span>سياسة التشغيل</span> <Info size={20} /></h4>
                  <ul className="space-y-4 text-gray-400 font-medium text-sm">
                    <li>• ميزانية الإعلانات تدار بشفافية تامة عبر تقارير أداء دورية.</li>
                    <li>• يتم إصدار الفواتير الشهرية بداية كل دورة تشغيلية لضمان استمرارية النشر.</li>
                    <li>• جميع الأسعار المذكورة لا تشمل ضريبة القيمة المضافة (15%).</li>
                  </ul>
               </div>
               <div className="h-full w-[2px] bg-white/10 hidden md:block"></div>
               <div>
                  <h4 className="text-xl font-black text-[#EA4B6E] mb-6 flex items-center gap-3"><span>معايير النجاح</span> <Zap size={20} /></h4>
                  <ul className="space-y-4 text-gray-400 font-medium text-sm">
                    <li>• ضمان اتساق الهوية البصرية بنسبة 100% في كافة القنوات الإعلامية.</li>
                    <li>• تقارير شهرية مفصلة تشمل الوصول، التفاعل، ومعدلات التحويل.</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <Logo className="h-24 mx-auto mb-12 opacity-80" />
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">نحو مستقبل يليق بـ <br /><span className="text-[#F3C14F]">برج جوار</span></h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-[#161B33] px-10 py-5 rounded-2xl border border-white/10">
               <div className="text-xs text-gray-500 font-black uppercase mb-1 tracking-widest">الإدارة</div>
               <div className="text-lg font-bold">The Marketing Department</div>
            </div>
            <div className="bg-[#161B33] px-10 py-5 rounded-2xl border border-white/10">
               <div className="text-xs text-gray-500 font-black uppercase mb-1 tracking-widest">الهوية</div>
               <div className="text-lg font-bold">شركة تابعة لـ TTP</div>
            </div>
          </div>

          <div className="text-gray-600 font-bold text-sm pt-12 border-t border-white/5">
            © {new Date().getFullYear()} TMD | صُنع بشغف لبرج جوار ووجهة مسار
          </div>
        </div>
      </footer>

      {/* Scroll Behavior & Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideDown { animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-200 { animation-delay: 0.2s; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
