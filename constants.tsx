
import React from 'react';
import { 
  MapPin, 
  TrendingUp, 
  Star, 
  Target,
  Settings,
  Activity,
  FileText,
  Zap,
  Video,
  Share2,
  Instagram,
  Map,
  Palette,
  Film,
  Play,
  Radio,
  BarChart,
  Megaphone,
  Users
} from 'lucide-react';
import { FinancialItem, ScopeItem, CardItem } from './types.ts';

export const MAIN_PILLARS = [
  {
    title: 'تأسيس المشاريع الاتصالية',
    color: '#7C5E92',
    icon: <Target className="w-10 h-10" />
  },
  {
    title: 'تشغيل العمليات الاتصالية والتسويقية',
    color: '#FFB82B',
    icon: <Settings className="w-10 h-10" />
  },
  {
    title: 'القياس المستمر',
    color: '#88C9C4',
    icon: <Activity className="w-10 h-10" />
  }
];

export const ABOUT_PROJECT: CardItem[] = [
  {
    title: 'الموقع الاستراتيجي',
    description: 'الأقرب للحرم في وجهة مسار، مرتبط مباشرة ببوليفارد المشاة.',
    icon: <MapPin className="w-8 h-8" />
  },
  {
    title: 'قيمة استثمارية',
    description: 'مزيج متوازن بين السكن الراقي والاستثمار في موقع استثنائي.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: 'التميّز المعماري',
    description: 'تجربة حضرية متكاملة داخل بيئة روحانية فريدة.',
    icon: <Star className="w-8 h-8" />
  }
];

export const PROJECTS_SCOPE: ScopeItem[] = [
  {
    title: 'تطوير استراتيجية اتصالية وتسويقية',
    description: 'إعداد استراتيجية شاملة تشمل تحليل الوضع الراهن وتحديد الأهداف والرسائل والقنوات.',
    icon: <FileText className="w-10 h-10 text-[#F3C14F]" />,
    activities: ['تحليل الوضع الراهن', 'تحديد الجمهور المستهدف', 'بناء الرسائل', 'خطة التنفيذ'],
    outputs: ['مستند الاستراتيجية', 'الخطة التنفيذية']
  },
  {
    title: 'تطوير حملة تسويقية متكاملة',
    description: 'تطوير الفكرة الإبداعية للحملة وتطبيقاتها عبر القنوات المختلفة.',
    icon: <Zap className="w-10 h-10 text-[#EA4B6E]" />,
    activities: ['التوجه الإبداعي', 'تطبيقات الحملة'],
    outputs: ['مستند الحملة الإبداعي']
  },
  {
    title: 'إنتاج فيديوهات تسويقية',
    description: 'تصوير وإنتاج فيديوهات احترافية تبرز مزايا المشروع.',
    icon: <Video className="w-10 h-10 text-[#88C9C4]" />,
    activities: ['الرؤية الإخراجية', 'التصوير الميداني'],
    outputs: ['فيديوهات جاهزة للنشر']
  },
  {
    title: 'تخطيط وإدارة الترويج والنشر',
    description: 'إدارة الميزانيات الإعلانية وشراء المساحات في القنوات الرقمية.',
    icon: <Share2 className="w-10 h-10 text-[#F3C14F]" />,
    activities: ['خطة الوسائط', 'إدارة النشر'],
    outputs: ['تقارير الأداء']
  },
  {
    title: 'إدارة الشبكات الاجتماعية',
    description: 'بناء وتفعيل حضور المشروع على منصات التواصل الاجتماعي.',
    icon: <Instagram className="w-10 h-10 text-[#EA4B6E]" />,
    activities: ['خطة المحتوى', 'إدارة الحسابات'],
    outputs: ['تقويم المحتوى']
  },
  {
    title: 'خطة تواصل وتسويق شاملة',
    description: 'تكامل كافة الأنشطة الاتصالية لضمان وصول الرسالة.',
    icon: <Map className="w-10 h-10 text-[#88C9C4]" />,
    activities: ['تحليل الجمهور', 'صياغة الرسائل'],
    outputs: ['مستند الخطة']
  },
  {
    title: 'التصاميم الثابتة والمتحركة',
    description: 'إنتاج كافة المواد البصرية اللازمة للحملات.',
    icon: <Palette className="w-10 h-10 text-[#F3C14F]" />,
    activities: ['التصاميم الأساسية', 'التطبيقات المشتقة'],
    outputs: ['حزمة التصاميم']
  },
  {
    title: 'فيديو من مكتبة وسائط',
    description: 'تجميع ومونتاج فيديوهات من مواد أرشيفية.',
    icon: <Film className="w-10 h-10 text-[#EA4B6E]" />,
    activities: ['جمع المواد', 'المونتاج'],
    outputs: ['فيديو ترويجي']
  },
  {
    title: 'فيديو موشن جرافيك',
    description: 'شرح مزايا المشروع عبر رسوم متحركة إبداعية.',
    icon: <Play className="w-10 h-10 text-[#88C9C4]" />,
    activities: ['السيناريو', 'التحريك'],
    outputs: ['فيديو موشن']
  },
  {
    title: 'التفعيل الميداني للحملات',
    description: 'أنشطة وفعاليات ميدانية لربط الجمهور بالمشروع.',
    icon: <Megaphone className="w-10 h-10 text-[#F3C14F]" />,
    activities: ['تخطيط الفعاليات', 'التنفيذ'],
    outputs: ['تقرير التفعيل']
  },
  {
    title: 'النشر عبر وسائل الإعلام',
    description: 'إدارة العلاقات الصحفية ونشر البيانات.',
    icon: <Radio className="w-10 h-10 text-[#EA4B6E]" />,
    activities: ['إدارة العلاقات الصحفية'],
    outputs: ['تغطية إعلامية']
  },
  {
    title: 'إدارة حملات المؤثرين',
    description: 'اختيار وإدارة المؤثرين لتعزيز الانتشار.',
    icon: <Users className="w-10 h-10 text-[#88C9C4]" />,
    activities: ['اختيار المؤثرين', 'التعاقد'],
    outputs: ['تقرير الحملة']
  },
  {
    title: 'قياس أداء الأنشطة',
    description: 'تحليل مستمر لكافة الأنشطة لضمان الفعالية.',
    icon: <BarChart className="w-10 h-10 text-[#F3C14F]" />,
    activities: ['جمع البيانات', 'التحليل'],
    outputs: ['تقارير القياس']
  }
];

export const FINANCIAL_OFFER: FinancialItem[] = [
  { id: '1', item: 'إدارة وتشغيل الأعمال الاتصالية شهريًا', value: '68,000 ريال شهريًا' },
  { id: '2', item: 'الموازنة المخصصة للترويج لكامل السنة', value: '1,500,000 ريال' },
  { id: '3', item: 'الموازنة المخصصة لإعلانات المؤثرين لكامل السنة', value: '650,000 ريال' },
  { id: '4', item: 'الموازنة المخصصة لتنفيذ الفعاليات', value: '400,000 ريال' },
  { id: '5', item: 'الموازنة المخصصة لإنتاج فيديوهات الإعلانات', value: '750,000 ريال' },
  { id: '6', item: 'إجمالي الموازنة المخصصة لتسويق برج جوار خلال عام', value: '4,116,000 ريال', isTotal: true }
];
