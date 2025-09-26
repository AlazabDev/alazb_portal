import { useState, useEffect } from "react"
import { Header } from "@/components/Layout/Header"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button 
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="p-2"
            >
              <Grid className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder={t.appsHub.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 pl-4 h-9 text-sm rounded-lg border bg-background/50"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-background/80 backdrop-blur-sm rounded-xl border p-2">
          <div className="flex flex-wrap gap-2">
            {appCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm font-medium rounded-lg px-4 py-2 transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{filteredApps.length} {t.appsHub.appsAvailable}</span>
          {selectedCategory !== t.appsHub.allApps && (
            <Badge variant="secondary" className="text-xs">
              {selectedCategory}
            </Badge>
          )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="text-xs"
            >
              {viewMode === "grid" ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              {viewMode === "grid" ? t.appsHub.listView : t.appsHub.gridView}
            </Button>
          </div>
        </div>

        {/* Apps Grid */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" 
            : "space-y-3"
        }`}>
          {filteredApps.map((app, index) => {
            const IconComponent = app.icon
            const isFavorite = favoriteApps.includes(app.name)
            
            if (viewMode === "list") {
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer group border-l-4 border-l-transparent hover:border-l-primary" 
                  onClick={() => window.open(app.url, '_blank')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{app.name}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(app.name)
                            }}
                            className="p-1 opacity-60 hover:opacity-100"
                          >
                            <Star className={`w-3 h-3 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{app.description}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
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
                className="hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1 aspect-square" 
                onClick={() => window.open(app.url, '_blank')}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(app.name)
                    }}
                    className="absolute top-1 right-1 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Star className={`w-3 h-3 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                  </Button>

                  <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-200`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{app.name}</h3>
                  <p className="text-xs text-muted-foreground leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200">{app.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results Message */}
        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{t.appsHub.noResultsFound}</h3>
            <p className="text-muted-foreground">{t.appsHub.tryDifferentSearch}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppsHub