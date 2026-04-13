/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Database, 
  FileText, 
  Palette, 
  MessageSquare, 
  Send, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  ChevronDown, 
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    id: "programming",
    title: "البرمجة",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description: "حلول برمجية متطورة تلبي احتياجات أعمالكم.",
    items: ["برمجة برامج محاسبية", "برمجة بوتات تلجرام", "تجريف الويب (Web Scraping)"],
    color: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    id: "data-entry",
    title: "إدخال البيانات",
    icon: <Database className="w-8 h-8 text-primary" />,
    description: "تنظيم وإدارة البيانات بدقة عالية باستخدام أحدث الأدوات.",
    items: ["برنامج اكسل (Excel)"],
    color: "bg-green-50 dark:bg-green-950/30"
  },
  {
    id: "transcription",
    title: "التفريغ الالكتروني",
    icon: <FileText className="w-8 h-8 text-primary" />,
    description: "تحويل المحتوى الصوتي والمكتوب إلى صيغ رقمية احترافية.",
    items: [
      "تفريغ مقاطع الصوت", 
      "كتابة المقالات", 
      "حلقات البحث", 
      "مشاريع التخرج", 
      "تحويل الوثائق المخطوطة إلى الكترونية"
    ],
    color: "bg-purple-50 dark:bg-purple-950/30"
  },
  {
    id: "design",
    title: "التصميم",
    icon: <Palette className="w-8 h-8 text-primary" />,
    description: "هوية بصرية مميزة تعكس احترافية علامتكم التجارية.",
    items: ["تصميم اللوغوهات", "تصميم بوسترات التواصل الاجتماعي"],
    color: "bg-orange-50 dark:bg-orange-950/30"
  }
];

const contactInfo = [
  { name: "واتساب", icon: <Phone className="w-5 h-5" />, value: "+963981055535", link: "https://wa.me/963981055535" },
  { name: "تلغرام", icon: <Send className="w-5 h-5" />, value: "@tichnosoftpro", link: "https://t.me/tichnosoftpro" },
  { name: "انستغرام", icon: <Instagram className="w-5 h-5" />, value: "@tichnosoftpro", link: "https://t.me/tichnosoftpro" },
  { name: "فيسبوك", icon: <Facebook className="w-5 h-5" />, value: "TechnoSoft", link: "https://t.me/tichnosoftpro" },
  { name: "البريد الالكتروني", icon: <Mail className="w-5 h-5" />, value: "aminabojaafersoft@gmail.com", link: "mailto:aminabojaafersoft@gmail.com" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Code2 className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">تكنوسوفت</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["الرئيسية", "خدماتنا", "من نحن", "تواصل معنا"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
            <Button size="sm" className="rounded-full px-6 shadow-md shadow-primary/20 cursor-pointer">
              ابدأ مشروعك
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[64px] left-0 w-full bg-background border-b z-40 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {["الرئيسية", "خدماتنا", "من نحن", "تواصل معنا"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-lg font-medium py-2 border-b border-muted last:border-0 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full rounded-xl cursor-pointer">ابدأ مشروعك</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="الرئيسية" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-sm font-medium">
              نحن هنا لنحول أفكارك إلى واقع رقمي
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-balance">
              تكنوسوفت للخدمات <span className="text-primary">الإلكترونية</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              نقدم حلولاً رقمية متكاملة تشمل البرمجة، التصميم، إدخال البيانات، والتفريغ الإلكتروني بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="rounded-full px-10 text-lg h-14 shadow-xl shadow-primary/20 group cursor-pointer">
                تصفح خدماتنا
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-14 cursor-pointer">
                تواصل معنا
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="خدماتنا" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا المتميزة</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              مجموعة واسعة من الخدمات المصممة خصيصاً لتلبية متطلبات سوق العمل الحديث.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className={`h-2 w-full ${service.color.replace('bg-', 'bg-opacity-100 bg-')}`} />
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="من نحن" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-3xl -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Work team" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl border md:flex hidden items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">دقة واحترافية</p>
                    <p className="text-sm text-muted-foreground">نضمن لك أفضل النتائج</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">لماذا تختار تكنوسوفت؟</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                في تكنوسوفت، نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان. نحن فريق متخصص يسعى لتقديم حلول مبتكرة تساعد الأفراد والشركات على النمو والتميز في الفضاء الرقمي.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold">الجودة والسرعة</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    نلتزم بتسليم المشاريع في الوقت المحدد مع الحفاظ على أعلى معايير الجودة والدقة في كل تفصيل.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold">دعم فني متواصل</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    نحن معك خطوة بخطوة، ونقدم الدعم الفني اللازم لضمان سير عملك بسلاسة تامة.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold">أسعار تنافسية</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    نقدم خدماتنا بأسعار مدروسة تتناسب مع ميزانيتك دون المساومة على جودة العمل.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="تواصل معنا" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">تواصل معنا الآن</h2>
              <p className="text-primary-foreground/80 text-lg">
                هل لديك مشروع في بالك؟ نحن جاهزون لمساعدتك في أي وقت.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: -10 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white text-primary transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm opacity-70">{info.name}</p>
                      <p className="text-lg font-medium">{info.value}</p>
                    </div>
                    <ExternalLink className="mr-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl text-foreground">
                <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">الاسم</label>
                      <input className="w-full p-3 rounded-xl border bg-muted/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="اسمك الكريم" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">البريد</label>
                      <input className="w-full p-3 rounded-xl border bg-muted/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="example@mail.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الموضوع</label>
                    <input className="w-full p-3 rounded-xl border bg-muted/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="ما الذي يمكننا مساعدتك فيه؟" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الرسالة</label>
                    <textarea className="w-full p-3 rounded-xl border bg-muted/50 focus:ring-2 focus:ring-primary outline-none transition-all min-h-[120px]" placeholder="اكتب تفاصيل مشروعك هنا..." />
                  </div>
                  <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 cursor-pointer">
                    إرسال الطلب
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code2 className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="text-xl font-bold">تكنوسوفت</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Send className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Mail className="w-5 h-5" /></a>
            </div>

            <p className="text-sm text-muted-foreground">
              جميع الحقوق محفوظة © {new Date().getFullYear()} تكنوسوفت للخدمات الإلكترونية
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
