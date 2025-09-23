import { useState, useEffect } from "react"
import { Header } from "@/components/Layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, ArrowRight, Star, Grid, List, Filter, 
  Settings, Users, BarChart, FileText, Calendar,
  Mail, Phone, Camera, Globe, Shield, Database,
  Zap, Cpu, Smartphone, Monitor, Wifi, Cloud,
  Package, Truck, CreditCard, ShoppingCart,
  MessageSquare, Video, Headphones, Bookmark,
  Download, Upload, Share, Heart, Bell, Lock,
  Key, Eye, Edit, Trash, Plus, Minus,
  CheckCircle, XCircle, AlertCircle, Info,
  Home, Building, Factory, Wrench, Hammer,
  Paintbrush, Ruler, Calculator, Clipboard,
  Map, Navigation, Compass, Target, Flag,
  Clock, DollarSign, GraduationCap, TrendingUp, 
  ShoppingBag, PieChart
} from "lucide-react"

// Custom icons for missing ones
const Banknote = DollarSign
const FileBarChart = BarChart

const AppsHub = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favoriteApps, setFavoriteApps] = useState<string[]>([])

  const appCategories = [
    "الكل", "النظام الأساسي", "المحاسبة والمالية", "إدارة العملاء", "الموارد البشرية", 
    "إدارة المشاريع", "التواصل والتفاعل", "المساعدة والدعم", "التقارير والتحليلات", "الخدمات المتخصصة"
  ]

  const allApps = [
    // النظام الأساسي
    { name: "Frappe Framework", category: "النظام الأساسي", color: "bg-blue-600", icon: Database, description: "منصة التطوير الأساسية", features: ["الإطار الأساسي", "قاعدة البيانات", "واجهة المطور"], url: "/app/frappe" },
    { name: "ERPNext", category: "النظام الأساسي", color: "bg-orange-600", icon: Settings, description: "نظام ERP المؤسسي الشامل", features: ["إدارة مؤسسية", "تكامل شامل", "تقارير متقدمة"], url: "/app/erpnext" },
    { name: "App Studio", category: "النظام الأساسي", color: "bg-purple-600", icon: Cpu, description: "استوديو تطوير التطبيقات", features: ["تطوير التطبيقات", "تخصيص النظام", "إدارة الكود"], url: "/app/studio" },
    { name: "Website Builder", category: "النظام الأساسي", color: "bg-green-600", icon: Globe, description: "منشئ المواقع الإلكترونية", features: ["بناء المواقع", "تصميم متجاوب", "تحسين محركات البحث"], url: "/app/builder" },

    // المحاسبة والمالية
    { name: "الكتب المحاسبية", category: "المحاسبة والمالية", color: "bg-emerald-500", icon: FileText, description: "النظام المحاسبي المتكامل", features: ["القيود المحاسبية", "الميزانية العامة", "التقارير المالية"], url: "/app/books" },
    { name: "المدفوعات", category: "المحاسبة والمالية", color: "bg-blue-500", icon: CreditCard, description: "إدارة المدفوعات الإلكترونية", features: ["بوابات الدفع", "تتبع المدفوعات", "الفواتير"], url: "/app/payments" },
    { name: "الخدمات المصرفية", category: "المحاسبة والمالية", color: "bg-indigo-500", icon: DollarSign, description: "التكامل مع البنوك", features: ["ربط البنوك", "تسوية الحسابات", "التحويلات"], url: "/app/banking" },
    { name: "مدفوعات العقود", category: "المحاسبة والمالية", color: "bg-teal-500", icon: FileText, description: "إدارة مدفوعات العقود", features: ["جدولة المدفوعات", "متابعة العقود", "التنبيهات"], url: "/app/contract_payment" },
    { name: "كشوف العملاء", category: "المحاسبة والمالية", color: "bg-cyan-500", icon: FileBarChart, description: "كشوف حسابات العملاء", features: ["كشوف تفصيلية", "تتبع المستحقات", "التقارير"], url: "/app/customer_statements" },
    { name: "فواتير المرافق", category: "المحاسبة والمالية", color: "bg-yellow-500", icon: Zap, description: "إدارة فواتير المرافق", features: ["فواتير المياه والكهرباء", "قراءة العدادات", "التحصيل"], url: "/app/utility_billing" },
    { name: "حساب الزكاة", category: "المحاسبة والمالية", color: "bg-green-500", icon: Calculator, description: "حساب وإدارة الزكاة", features: ["حساب تلقائي للزكاة", "تقارير الزكاة", "التوزيع"], url: "/app/frappe_zakat" },

    // إدارة العملاء والمبيعات
    { name: "إدارة علاقات العملاء", category: "إدارة العملاء", color: "bg-pink-500", icon: Users, description: "نظام CRM المتطور", features: ["قاعدة العملاء", "تتبع التفاعلات", "إدارة الفرص"], url: "/app/crm" },
    { name: "المتجر الإلكتروني", category: "إدارة العملاء", color: "bg-purple-500", icon: ShoppingCart, description: "منصة التجارة الإلكترونية", features: ["متجر متكامل", "إدارة المنتجات", "معالجة الطلبات"], url: "/app/webshop" },
    { name: "تقدير الأسعار", category: "إدارة العملاء", color: "bg-orange-500", icon: Calculator, description: "نظام تقدير الأسعار الذكي", features: ["حساب التكاليف", "عروض الأسعار", "مقارنة الأسعار"], url: "/app/erpnext_price_estimation" },
    { name: "عملية فتح العروض", category: "إدارة العملاء", color: "bg-red-500", icon: FileText, description: "إدارة عملية طلبات العروض", features: ["إدارة المناقصات", "تقييم العروض", "الترسية"], url: "/app/rfq_opening_process" },

    // الموارد البشرية
    { name: "نظام الموارد البشرية", category: "الموارد البشرية", color: "bg-blue-600", icon: Users, description: "إدارة شاملة للموارد البشرية", features: ["ملفات الموظفين", "الحضور والانصراف", "إدارة الإجازات"], url: "/app/hrms" },
    { name: "كشف رواتب المشاريع", category: "الموارد البشرية", color: "bg-green-600", icon: DollarSign, description: "إدارة رواتب فرق المشاريع", features: ["رواتب المشاريع", "توزيع التكاليف", "تقارير الأجور"], url: "/app/project_payroll" },

    // إدارة المشاريع
    { name: "مخطط جانت", category: "إدارة المشاريع", color: "bg-indigo-600", icon: BarChart, description: "مخططات جانت للمشاريع", features: ["التخطيط الزمني", "تتبع التقدم", "إدارة المهام"], url: "/app/gantt" },
    { name: "خطة اللعبة", category: "إدارة المشاريع", color: "bg-purple-600", icon: Target, description: "تخطيط وإدارة المشاريع", features: ["تخطيط استراتيجي", "تتبع الأهداف", "إدارة الفريق"], url: "/app/gameplan" },
    { name: "قوائم المهام", category: "إدارة المشاريع", color: "bg-cyan-600", icon: CheckCircle, description: "إدارة المهام والأنشطة", features: ["قوائم مهام", "تذكيرات", "تتبع الإنجاز"], url: "/app/todo" },
    { name: "إدارة العقارات", category: "إدارة المشاريع", color: "bg-teal-600", icon: Building, description: "نظام إدارة العقارات", features: ["سجل العقارات", "عقود الإيجار", "الصيانة"], url: "/app/propms" },

    // التواصل والتفاعل
    { name: "البريد الإلكتروني", category: "التواصل والتفاعل", color: "bg-blue-500", icon: Mail, description: "نظام البريد الإلكتروني", features: ["إرسال واستقبال", "تنظيم الرسائل", "المرفقات"], url: "/app/mail" },
    { name: "واتساب للأعمال", category: "التواصل والتفاعل", color: "bg-green-500", icon: MessageSquare, description: "تكامل واتساب للأعمال", features: ["رسائل تلقائية", "دعم العملاء", "إشعارات"], url: "/app/waba_integration" },
    { name: "واتساب العادي", category: "التواصل والتفاعل", color: "bg-green-600", icon: Phone, description: "تكامل واتساب العادي", features: ["رسائل مباشرة", "إشعارات", "تتبع المحادثات"], url: "/app/frappe_whatsapp" },
    { name: "تليجرام", category: "التواصل والتفاعل", color: "bg-blue-400", icon: MessageSquare, description: "تكامل تليجرام", features: ["رسائل تليجرام", "بوت تلقائي", "إشعارات"], url: "/app/erpnext_telegram_integration" },
    { name: "إكسوتيل", category: "التواصل والتفاعل", color: "bg-orange-400", icon: Phone, description: "تكامل خدمات الاتصال", features: ["مكالمات صوتية", "تسجيل المكالمات", "تقارير الاتصال"], url: "/app/exotel_integration" },
    { name: "تذكير البريد", category: "التواصل والتفاعل", color: "bg-yellow-400", icon: Bell, description: "نظام تذكير البريد", features: ["تذكيرات تلقائية", "جدولة الرسائل", "متابعة الردود"], url: "/app/mail_reminder" },
    { name: "خدمة توصيل البريد", category: "التواصل والتفاعل", color: "bg-purple-400", icon: Mail, description: "خدمة توصيل البريد الإلكتروني", features: ["توصيل موثوق", "تتبع الرسائل", "تقارير التسليم"], url: "/app/email_delivery_service" },

    // المساعدة والدعم
    { name: "مكتب المساعدة", category: "المساعدة والدعم", color: "bg-red-500", icon: Headphones, description: "نظام دعم العملاء", features: ["تذاكر الدعم", "قاعدة المعرفة", "دردشة مباشرة"], url: "/app/helpdesk" },
    { name: "الويكي", category: "المساعدة والدعم", color: "bg-indigo-500", icon: Bookmark, description: "قاعدة المعرفة والوثائق", features: ["مقالات تفاعلية", "بحث متقدم", "تنظيم المحتوى"], url: "/app/wiki" },
    { name: "نظام إدارة التعلم", category: "المساعدة والدعم", color: "bg-purple-500", icon: GraduationCap, description: "منصة التعليم الإلكتروني", features: ["دورات تدريبية", "اختبارات", "شهادات"], url: "/app/lms" },

    // التقارير والتحليلات
    { name: "الرسوم البيانية", category: "التقارير والتحليلات", color: "bg-orange-600", icon: PieChart, description: "مكتبة الرسوم البيانية", features: ["رسوم تفاعلية", "تحليل البيانات", "لوحات معلومات"], url: "/app/frappe_charts" },
    { name: "الرؤى والتحليلات", category: "التقارير والتحليلات", color: "bg-cyan-600", icon: TrendingUp, description: "تحليلات ذكية متقدمة", features: ["ذكاء اصطناعي", "تنبؤات", "تحليل الاتجاهات"], url: "/app/insights" },

    // الخدمات المتخصصة
    { name: "إدارة التأشيرات", category: "الخدمات المتخصصة", color: "bg-blue-700", icon: Key, description: "نظام إدارة التأشيرات", features: ["طلبات التأشيرة", "تتبع الحالة", "المستندات"], url: "/app/visa_management" },
    { name: "الامتثال المصري", category: "الخدمات المتخصصة", color: "bg-red-600", icon: Shield, description: "نظام الامتثال للقوانين المصرية", features: ["ضريبة القيمة المضافة", "التقارير الحكومية", "الامتثال القانوني"], url: "/app/erpnext_egypt_compliance" },
    { name: "نظام الإقراض", category: "الخدمات المتخصصة", color: "bg-green-700", icon: DollarSign, description: "إدارة القروض والتمويل", features: ["طلبات القروض", "جدولة السداد", "إدارة المخاطر"], url: "/app/lending" },
    { name: "التصميم", category: "الخدمات المتخصصة", color: "bg-pink-600", icon: Paintbrush, description: "أدوات التصميم والإبداع", features: ["تصميم جرافيكي", "قوالب", "أدوات إبداعية"], url: "/app/design" },
    { name: "التوقيع الرقمي", category: "الخدمات المتخصصة", color: "bg-purple-700", icon: Edit, description: "نظام التوقيع الإلكتروني", features: ["توقيع آمن", "تشفير", "مصادقة رقمية"], url: "/app/digital_signer" },
    { name: "مصمم الطباعة", category: "الخدمات المتخصصة", color: "bg-gray-600", icon: FileText, description: "تصميم وتخصيص التقارير", features: ["قوالب مخصصة", "تنسيق متقدم", "طباعة احترافية"], url: "/app/print_designer" },
    { name: "صناع التغيير", category: "الخدمات المتخصصة", color: "bg-yellow-600", icon: Users, description: "منصة إدارة المبادرات", features: ["إدارة المبادرات", "تتبع التأثير", "التعاون"], url: "/app/changemakers" },

    // أدوات إضافية
    { name: "القرص السحابي", category: "الخدمات المتخصصة", color: "bg-blue-500", icon: Cloud, description: "تخزين ومشاركة الملفات", features: ["تخزين آمن", "مشاركة الملفات", "نسخ احتياطية"], url: "/app/drive" },
    { name: "الاجتماعات", category: "التواصل والتفاعل", color: "bg-green-500", icon: Video, description: "نظام إدارة الاجتماعات", features: ["جدولة الاجتماعات", "محاضر", "متابعة القرارات"], url: "/app/meeting" },
    { name: "تريلو", category: "إدارة المشاريع", color: "bg-blue-400", icon: Grid, description: "تكامل مع تريلو", features: ["لوحات المشاريع", "بطاقات المهام", "تتبع التقدم"], url: "/app/trello" },
    { name: "رافين", category: "التواصل والتفاعل", color: "bg-gray-500", icon: MessageSquare, description: "منصة التواصل الداخلي", features: ["محادثات الفريق", "قنوات", "مشاركة الملفات"], url: "/app/raven" },
    { name: "الذكاء الاصطناعي", category: "الخدمات المتخصصة", color: "bg-violet-600", icon: Cpu, description: "تكامل الذكاء الاصطناعي", features: ["مساعد ذكي", "تحليل النصوص", "أتمتة المهام"], url: "/app/frappe_openai_integration" }
  ]

  // Fix: Add the missing Clock and other icons - REMOVED, using lucide-react icons directly

  const filteredApps = allApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "الكل" || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (appName: string) => {
    setFavoriteApps(prev => 
      prev.includes(appName) 
        ? prev.filter(name => name !== appName)
        : [...prev, appName]
    )
  }

  const categories = [
    "التطبيقات المفضلة: وصول سريع لما تستخدمه يومياً.",
    "المشاريع والصيانة: أدوات لتتبع عملك وخدماتك.",
    "لوحات المعلومات: تقارير في الوقت الفعلي وتحليلات.",
    "البريد والتواصل: اتصال آمن وفعال مع فريقك وعملائك."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-customer via-employee to-admin rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange via-customer to-employee rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-admin to-orange rounded-full blur-2xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              مرحباً بك في <span className="bg-gradient-to-r from-customer to-employee bg-clip-text text-transparent">Al-Azab Apps Hub</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {categories.map((category, index) => (
                <p key={index} className="text-lg leading-relaxed">{category}</p>
              ))}
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {[
                { color: 'bg-primary', label: 'النظام الأساسي' },
                { color: 'bg-customer', label: 'العملاء' },
                { color: 'bg-employee', label: 'الموظفين' },
                { color: 'bg-admin', label: 'الإدارة' },
                { color: 'bg-orange', label: 'التطبيقات' },
                { color: 'bg-muted', label: 'المزيد قريباً' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-4 h-4 rounded-full ${item.color} mx-auto mb-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg`}></div>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Apps Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground mb-6">
              كل ما تحتاجه لإدارة عملك موجود هنا، <span className="text-orange">بنقرة واحدة فقط</span>
            </h2>
            
            {/* Enhanced Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input 
                  placeholder="ابحث عن التطبيقات والأدوات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 py-4 text-lg rounded-2xl border-2 focus:border-primary shadow-lg transition-all duration-300 hover:shadow-xl"
                />
                {searchQuery && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSearchQuery("")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  >
                    ✕
                  </Button>
                )}
              </div>

              {/* Category Tabs */}
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 w-full bg-white/50 backdrop-blur-sm border shadow-lg rounded-2xl p-2">
                  {appCategories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="text-xs lg:text-sm font-medium rounded-xl transition-all duration-300 hover:bg-primary/10"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* View Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {filteredApps.length} تطبيق متاح
                  </span>
                  <Badge variant="secondary" className="bg-orange/10 text-orange border-orange/20">
                    {selectedCategory}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "customer" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="transition-all duration-300"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "customer" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="transition-all duration-300"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Apps Grid */}
            <div className={`max-w-7xl mx-auto mb-12 ${
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6" 
                : "space-y-4"
            }`}>
              {filteredApps.map((app, index) => {
                const IconComponent = app.icon
                const isFavorite = favoriteApps.includes(app.name)
                
                if (viewMode === "list") {
                  return (
                    <Card 
                      key={index} 
                      className="hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in border-l-4 border-l-transparent hover:border-l-primary" 
                      style={{animationDelay: `${index * 0.1}s`}}
                      onClick={() => window.open(app.url, '_blank')}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFavorite(app.name)
                                }}
                                className="p-1 hover:bg-yellow-100"
                              >
                                <Star className={`w-4 h-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                              </Button>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{app.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {app.features.slice(0, 3).map((feature, fIndex) => (
                                <Badge key={fIndex} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Badge className={`${app.color} text-white border-0`}>
                            {app.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )
                }

                return (
                  <Card 
                    key={index} 
                    className="hover:shadow-xl transition-all duration-500 cursor-pointer group animate-fade-in hover:-translate-y-2" 
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => window.open(app.url, '_blank')}
                  >
                    <CardContent className="p-6 text-center relative">
                      {/* Favorite Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(app.name)
                        }}
                        className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Star className={`w-4 h-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                      </Button>

                      <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{app.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-tight">{app.description}</p>
                      
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {app.features.slice(0, 2).map((feature, fIndex) => (
                          <Badge key={fIndex} variant="outline" className="text-xs block">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center animate-fade-in bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                جميع خدماتك وأدواتك في <span className="text-orange">مكان واحد</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">هل تحتاج تطبيق معين؟ أخبرنا وسنقوم بإضافته!</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="orange" size="lg" className="gap-3 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce-soft">
                  <ArrowRight className="w-6 h-6" />
                  طلب تطبيق جديد
                </Button>
                
                <Button variant="outline" size="lg" className="gap-3 text-lg px-8 py-4 rounded-2xl">
                  <MessageSquare className="w-6 h-6" />
                  اتصل بالدعم التقني
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-right">
              <div className="flex items-center gap-3 mb-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10">
                  🌙 تبديل الوضع المظلم
                </Button>
                <span className="text-primary-foreground/60">|</span>
                <span className="text-sm">تم التطوير بواسطة <span className="text-orange font-semibold">Alazab.dev</span></span>
              </div>
            </div>
            
            <div className="text-center lg:text-left text-sm space-y-2 max-w-4xl">
              <p className="text-primary-foreground/90">
                <strong>شركة العزب للإنشاءات</strong> — شركة تابعة للعلامة التجارية المسجلة (د-ل-ن-ص رقم: 849203826)، تعمل باسم تجاري "عزب للتنفيذ".
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                "أعمال الإدارة للمشاريع الصناعية والخدمية والإمدادات العامة" المكتب الرئيسي: 8/500 شارع المعادي، القاهرة 4234570، مصر | 
                البريد الإلكتروني: <span className="text-orange">info@alazab.com</span> | الهاتف: <span className="text-orange">+20 2 27047955</span> | 
                الموقع: <span className="text-orange">www.alazab.com</span>
              </p>
              <p className="text-primary-foreground/60">
                جميع الحقوق محفوظة. © 2025 www.alazab.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppsHub