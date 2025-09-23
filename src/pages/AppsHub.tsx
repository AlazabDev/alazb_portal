import { useState, useEffect } from "react"
import { Header } from "@/components/Layout/Header"
import { useLanguage } from "@/contexts/LanguageContext"
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
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(t.appsHub.allApps)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favoriteApps, setFavoriteApps] = useState<string[]>([])

  const appCategories = [
    t.appsHub.allApps, t.appsHub.systemCore, t.appsHub.accounting, t.appsHub.crm, t.appsHub.hr, 
    t.appsHub.projects, t.appsHub.communication, t.appsHub.support, t.appsHub.reports, t.appsHub.specialized
  ]

  const allApps = [
    // النظام الأساسي
    { name: t.appsHub.apps.frappe.name, category: t.appsHub.systemCore, color: "bg-blue-600", icon: Database, description: t.appsHub.apps.frappe.description, features: t.appsHub.apps.frappe.features, url: "/app/frappe" },
    { name: t.appsHub.apps.erpnext.name, category: t.appsHub.systemCore, color: "bg-orange-600", icon: Settings, description: t.appsHub.apps.erpnext.description, features: t.appsHub.apps.erpnext.features, url: "/app/erpnext" },
    { name: t.appsHub.apps.studio.name, category: t.appsHub.systemCore, color: "bg-purple-600", icon: Cpu, description: t.appsHub.apps.studio.description, features: t.appsHub.apps.studio.features, url: "/app/studio" },
    { name: t.appsHub.apps.builder.name, category: t.appsHub.systemCore, color: "bg-green-600", icon: Globe, description: t.appsHub.apps.builder.description, features: t.appsHub.apps.builder.features, url: "/app/builder" },

    // المحاسبة والمالية
    { name: t.appsHub.apps.books.name, category: t.appsHub.accounting, color: "bg-emerald-500", icon: FileText, description: t.appsHub.apps.books.description, features: t.appsHub.apps.books.features, url: "/app/books" },
    { name: t.appsHub.apps.payments.name, category: t.appsHub.accounting, color: "bg-blue-500", icon: CreditCard, description: t.appsHub.apps.payments.description, features: t.appsHub.apps.payments.features, url: "/app/payments" },
    { name: t.appsHub.apps.banking.name, category: t.appsHub.accounting, color: "bg-indigo-500", icon: DollarSign, description: t.appsHub.apps.banking.description, features: t.appsHub.apps.banking.features, url: "/app/banking" },
    { name: t.appsHub.apps.contract_payment.name, category: t.appsHub.accounting, color: "bg-teal-500", icon: FileText, description: t.appsHub.apps.contract_payment.description, features: t.appsHub.apps.contract_payment.features, url: "/app/contract_payment" },
    { name: t.appsHub.apps.customer_statements.name, category: t.appsHub.accounting, color: "bg-cyan-500", icon: FileBarChart, description: t.appsHub.apps.customer_statements.description, features: t.appsHub.apps.customer_statements.features, url: "/app/customer_statements" },
    { name: t.appsHub.apps.utility_billing.name, category: t.appsHub.accounting, color: "bg-yellow-500", icon: Zap, description: t.appsHub.apps.utility_billing.description, features: t.appsHub.apps.utility_billing.features, url: "/app/utility_billing" },
    { name: t.appsHub.apps.zakat.name, category: t.appsHub.accounting, color: "bg-green-500", icon: Calculator, description: t.appsHub.apps.zakat.description, features: t.appsHub.apps.zakat.features, url: "/app/frappe_zakat" },

    // إدارة العملاء والمبيعات
    { name: t.appsHub.apps.crm.name, category: t.appsHub.crm, color: "bg-pink-500", icon: Users, description: t.appsHub.apps.crm.description, features: t.appsHub.apps.crm.features, url: "/app/crm" },
    { name: t.appsHub.apps.webshop.name, category: t.appsHub.crm, color: "bg-purple-500", icon: ShoppingCart, description: t.appsHub.apps.webshop.description, features: t.appsHub.apps.webshop.features, url: "/app/webshop" },
    { name: t.appsHub.apps.price_estimation.name, category: t.appsHub.crm, color: "bg-orange-500", icon: Calculator, description: t.appsHub.apps.price_estimation.description, features: t.appsHub.apps.price_estimation.features, url: "/app/erpnext_price_estimation" },
    { name: t.appsHub.apps.rfq.name, category: t.appsHub.crm, color: "bg-red-500", icon: FileText, description: t.appsHub.apps.rfq.description, features: t.appsHub.apps.rfq.features, url: "/app/rfq_opening_process" },

    // الموارد البشرية
    { name: t.appsHub.apps.hrms.name, category: t.appsHub.hr, color: "bg-blue-600", icon: Users, description: t.appsHub.apps.hrms.description, features: t.appsHub.apps.hrms.features, url: "/app/hrms" },
    { name: t.appsHub.apps.project_payroll.name, category: t.appsHub.hr, color: "bg-green-600", icon: DollarSign, description: t.appsHub.apps.project_payroll.description, features: t.appsHub.apps.project_payroll.features, url: "/app/project_payroll" },

    // إدارة المشاريع
    { name: t.appsHub.apps.gantt.name, category: t.appsHub.projects, color: "bg-indigo-600", icon: BarChart, description: t.appsHub.apps.gantt.description, features: t.appsHub.apps.gantt.features, url: "/app/gantt" },
    { name: t.appsHub.apps.gameplan.name, category: t.appsHub.projects, color: "bg-purple-600", icon: Target, description: t.appsHub.apps.gameplan.description, features: t.appsHub.apps.gameplan.features, url: "/app/gameplan" },
    { name: t.appsHub.apps.todo.name, category: t.appsHub.projects, color: "bg-cyan-600", icon: CheckCircle, description: t.appsHub.apps.todo.description, features: t.appsHub.apps.todo.features, url: "/app/todo" },
    { name: t.appsHub.apps.propms.name, category: t.appsHub.projects, color: "bg-teal-600", icon: Building, description: t.appsHub.apps.propms.description, features: t.appsHub.apps.propms.features, url: "/app/propms" },

    // التواصل والتفاعل
    { name: t.appsHub.apps.mail.name, category: t.appsHub.communication, color: "bg-blue-500", icon: Mail, description: t.appsHub.apps.mail.description, features: t.appsHub.apps.mail.features, url: "/app/mail" },
    { name: t.appsHub.apps.waba_integration.name, category: t.appsHub.communication, color: "bg-green-500", icon: MessageSquare, description: t.appsHub.apps.waba_integration.description, features: t.appsHub.apps.waba_integration.features, url: "/app/waba_integration" },
    { name: t.appsHub.apps.whatsapp.name, category: t.appsHub.communication, color: "bg-green-600", icon: Phone, description: t.appsHub.apps.whatsapp.description, features: t.appsHub.apps.whatsapp.features, url: "/app/frappe_whatsapp" },
    { name: t.appsHub.apps.telegram_integration.name, category: t.appsHub.communication, color: "bg-blue-400", icon: MessageSquare, description: t.appsHub.apps.telegram_integration.description, features: t.appsHub.apps.telegram_integration.features, url: "/app/erpnext_telegram_integration" },
    { name: t.appsHub.apps.exotel_integration.name, category: t.appsHub.communication, color: "bg-orange-400", icon: Phone, description: t.appsHub.apps.exotel_integration.description, features: t.appsHub.apps.exotel_integration.features, url: "/app/exotel_integration" },
    { name: t.appsHub.apps.mail_reminder.name, category: t.appsHub.communication, color: "bg-yellow-400", icon: Bell, description: t.appsHub.apps.mail_reminder.description, features: t.appsHub.apps.mail_reminder.features, url: "/app/mail_reminder" },
    { name: t.appsHub.apps.email_delivery_service.name, category: t.appsHub.communication, color: "bg-purple-400", icon: Mail, description: t.appsHub.apps.email_delivery_service.description, features: t.appsHub.apps.email_delivery_service.features, url: "/app/email_delivery_service" },

    // المساعدة والدعم
    { name: t.appsHub.apps.helpdesk.name, category: t.appsHub.support, color: "bg-red-500", icon: Headphones, description: t.appsHub.apps.helpdesk.description, features: t.appsHub.apps.helpdesk.features, url: "/app/helpdesk" },
    { name: t.appsHub.apps.wiki.name, category: t.appsHub.support, color: "bg-indigo-500", icon: Bookmark, description: t.appsHub.apps.wiki.description, features: t.appsHub.apps.wiki.features, url: "/app/wiki" },
    { name: t.appsHub.apps.lms.name, category: t.appsHub.support, color: "bg-purple-500", icon: GraduationCap, description: t.appsHub.apps.lms.description, features: t.appsHub.apps.lms.features, url: "/app/lms" },

    // التقارير والتحليلات
    { name: t.appsHub.apps.charts.name, category: t.appsHub.reports, color: "bg-orange-600", icon: PieChart, description: t.appsHub.apps.charts.description, features: t.appsHub.apps.charts.features, url: "/app/frappe_charts" },
    { name: t.appsHub.apps.insights.name, category: t.appsHub.reports, color: "bg-cyan-600", icon: TrendingUp, description: t.appsHub.apps.insights.description, features: t.appsHub.apps.insights.features, url: "/app/insights" },

    // الخدمات المتخصصة
    { name: t.appsHub.apps.visa_management.name, category: t.appsHub.specialized, color: "bg-blue-700", icon: Key, description: t.appsHub.apps.visa_management.description, features: t.appsHub.apps.visa_management.features, url: "/app/visa_management" },
    { name: t.appsHub.apps.egypt_compliance.name, category: t.appsHub.specialized, color: "bg-red-600", icon: Shield, description: t.appsHub.apps.egypt_compliance.description, features: t.appsHub.apps.egypt_compliance.features, url: "/app/erpnext_egypt_compliance" },
    { name: t.appsHub.apps.lending.name, category: t.appsHub.specialized, color: "bg-green-700", icon: DollarSign, description: t.appsHub.apps.lending.description, features: t.appsHub.apps.lending.features, url: "/app/lending" },
    { name: t.appsHub.apps.design.name, category: t.appsHub.specialized, color: "bg-pink-600", icon: Paintbrush, description: t.appsHub.apps.design.description, features: t.appsHub.apps.design.features, url: "/app/design" },
    { name: t.appsHub.apps.digital_signer.name, category: t.appsHub.specialized, color: "bg-purple-700", icon: Edit, description: t.appsHub.apps.digital_signer.description, features: t.appsHub.apps.digital_signer.features, url: "/app/digital_signer" },
    { name: t.appsHub.apps.print_designer.name, category: t.appsHub.specialized, color: "bg-gray-600", icon: FileText, description: t.appsHub.apps.print_designer.description, features: t.appsHub.apps.print_designer.features, url: "/app/print_designer" },
    { name: t.appsHub.apps.changemakers.name, category: t.appsHub.specialized, color: "bg-yellow-600", icon: Users, description: t.appsHub.apps.changemakers.description, features: t.appsHub.apps.changemakers.features, url: "/app/changemakers" },

    // أدوات إضافية
    { name: t.appsHub.apps.drive.name, category: t.appsHub.specialized, color: "bg-blue-500", icon: Cloud, description: t.appsHub.apps.drive.description, features: t.appsHub.apps.drive.features, url: "/app/drive" },
    { name: t.appsHub.apps.meeting.name, category: t.appsHub.communication, color: "bg-green-500", icon: Video, description: t.appsHub.apps.meeting.description, features: t.appsHub.apps.meeting.features, url: "/app/meeting" },
    { name: t.appsHub.apps.trello.name, category: t.appsHub.projects, color: "bg-blue-400", icon: Grid, description: t.appsHub.apps.trello.description, features: t.appsHub.apps.trello.features, url: "/app/trello" },
    { name: t.appsHub.apps.raven.name, category: t.appsHub.communication, color: "bg-gray-500", icon: MessageSquare, description: t.appsHub.apps.raven.description, features: t.appsHub.apps.raven.features, url: "/app/raven" },
    { name: t.appsHub.apps.openai_integration.name, category: t.appsHub.specialized, color: "bg-violet-600", icon: Cpu, description: t.appsHub.apps.openai_integration.description, features: t.appsHub.apps.openai_integration.features, url: "/app/frappe_openai_integration" }
  ]

  // Fix: Add the missing Clock and other icons - REMOVED, using lucide-react icons directly

  const filteredApps = allApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === t.appsHub.allApps || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (appName: string) => {
    setFavoriteApps(prev => 
      prev.includes(appName) 
        ? prev.filter(name => name !== appName)
        : [...prev, appName]
    )
  }

  const categories = t.appsHub.categories

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
              {t.appsHub.welcome}
            </h2>
            
            {/* Enhanced Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input 
                  placeholder={t.appsHub.searchPlaceholder}
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