import { Header } from "@/components/Layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

const AppsHub = () => {
  const apps = [
    { name: "Panorama", color: "bg-emerald-500", icon: "📊" },
    { name: "Private Certificate Authority", color: "bg-red-500", icon: "🔒" },
    { name: "EKS Anywhere", color: "bg-orange-500", icon: "🌐" },
    { name: "File Cache", color: "bg-green-500", icon: "🗂️" },
    { name: "Bottlerocket", color: "bg-orange-500", icon: "🚀" },
    { name: "Kinesis", color: "bg-purple-500", icon: "📡" },
    { name: "IoT 1 Click", color: "bg-green-500", icon: "🔗" },
    { name: "Fargate", color: "bg-orange-500", icon: "⚡" },
    
    { name: "MQ", color: "bg-pink-500", icon: "📨" },
    { name: "Application Composer", color: "bg-blue-500", icon: "🔧" },
    { name: "Outposts family", color: "bg-orange-500", icon: "🏢" },
    { name: "NICE DCV", color: "bg-orange-500", icon: "🖥️" },
    { name: "Elastic Fabric Adapter", color: "bg-orange-500", icon: "⚡" },
    { name: "Elastic Registry", color: "bg-orange-500", icon: "📦" },
    { name: "Service Management Connector", color: "bg-pink-500", icon: "🔌" },
    { name: "Elastic Inference", color: "bg-teal-500", icon: "🧠" },
    
    { name: "Elemental Link", color: "bg-orange-500", icon: "📺" },
    { name: "Transcribe", color: "bg-teal-500", icon: "🎤" },
    { name: "SageMaker Ground Truth", color: "bg-teal-500", icon: "🎯" },
    { name: "License Manager", color: "bg-pink-500", icon: "📄" },
    { name: "CodeCatalyst", color: "bg-blue-500", icon: "💻" },
    { name: "Cognito", color: "bg-orange-500", icon: "👤" },
    { name: "Device Farm", color: "bg-red-500", icon: "📱" },
    { name: "ECS Anywhere", color: "bg-orange-500", icon: "🌐" }
  ]

  const categories = [
    "التطبيقات المفضلة: وصول سريع لما تستخدمه يومياً.",
    "المشاريع والصيانة: أدوات لتتبع عملك وخدماتك.",
    "لوحات المعلومات: تقارير في الوقت الفعلي وتحليلات.",
    "البريد والتواصل: اتصال آمن وفعال مع فريقك وعملائك."
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-customer to-employee rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-admin to-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            مرحباً بك في Al-Azab Apps Hub
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground mb-12">
            {categories.map((category, index) => (
              <p key={index} className="text-lg leading-relaxed">{category}</p>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {[1,2,3,4,5,6].map((dot, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-primary' : 
                  index === 1 ? 'bg-customer' :
                  index === 2 ? 'bg-employee' :
                  index === 3 ? 'bg-admin' :
                  index === 4 ? 'bg-orange' : 'bg-muted'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            كل ما تحتاجه لإدارة عملك موجود هنا، بنقرة واحدة فقط
          </h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="البحث في الأيقونات..."
                className="pl-12 pr-4 py-3 text-lg rounded-full border-2 focus:border-primary"
              />
            </div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-7xl mx-auto mb-12">
            {apps.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-lg">{app.icon}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{app.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              جميع خدماتك وأدواتك في مكان واحد.
            </h3>
            <p className="text-muted-foreground mb-8">أخبرنا وسنقوم بإضافتها!</p>
            
            <Button variant="orange" size="lg" className="gap-2">
              <ArrowRight className="w-5 h-5" />
              طلب جديد
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p>🌙 تبديل الوضع المظلم</p>
              <p className="mt-1">تم التطوير بواسطة Alazab.dev</p>
            </div>
            
            <div className="text-right text-sm">
              <p className="mb-2">
                شركة العزب للإنشاءات — شركة تابعة للعلامة التجارية المسجلة (د-ل-ن-ص رقم: 849203826)، تعمل باسم تجاري "عزب للتنفيذ".
              </p>
              <p>
                "أعمال الإدارة للمشاريع الصناعية والخدمية والإمدادات العامة" المكتب الرئيسي: 8/500 شارع المعادي، القاهرة 4234570، مصر | 
                البريد الإلكتروني: info@alazab.com | الهاتف: +20 2 27047955 | الموقع: www.alazab.com جميع الحقوق محفوظة. © 2025 www.alazab.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppsHub