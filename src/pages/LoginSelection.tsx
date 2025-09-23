import { Header } from "@/components/Layout/Header"
import { LoginCard } from "@/components/LoginCard"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, Shield, Building, Wrench, Lock, Globe } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useLanguage } from "@/contexts/LanguageContext"

const LoginSelection = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const loginOptions = [
    {
      title: t.loginSelection.customer.title,
      description: t.loginSelection.customer.description,
      features: t.loginSelection.customer.features,
      icon: Users,
      variant: "customer" as const,
      onClick: () => navigate('/apps-hub')
    },
    {
      title: t.loginSelection.employee.title,
      description: t.loginSelection.employee.description,
      features: t.loginSelection.employee.features,
      icon: UserCheck,
      variant: "employee" as const,
      onClick: () => navigate('/apps-hub')
    },
    {
      title: t.loginSelection.admin.title,
      description: t.loginSelection.admin.description,
      features: t.loginSelection.admin.features,
      icon: Shield,
      variant: "admin" as const,
      onClick: () => navigate('/apps-hub')
    }
  ]

  const systemFeatures = [
    {
      title: t.systemFeatures.customerManagement.title,
      description: t.systemFeatures.customerManagement.description,
      icon: Users,
      color: "bg-customer/10 text-customer"
    },
    {
      title: t.systemFeatures.employeeManagement.title,
      description: t.systemFeatures.employeeManagement.description,
      icon: UserCheck,
      color: "bg-employee/10 text-employee"
    },
    {
      title: t.systemFeatures.security.title,
      description: t.systemFeatures.security.description,
      icon: Lock,
      color: "bg-admin/10 text-admin"
    },
    {
      title: t.systemFeatures.integration.title,
      description: t.systemFeatures.integration.description,
      icon: Globe,
      color: "bg-orange/10 text-orange"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-light px-4 py-2 rounded-full text-orange font-medium mb-6">
            <Building className="w-4 h-4" />
            {t.loginSelection.description}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.loginSelection.title} <span className="bg-orange text-white px-3 py-1 rounded-lg">{t.loginSelection.erp}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">{t.loginSelection.subtitle}</p>
          <p className="text-orange font-medium mb-12">🔧 {t.company.slogan}</p>

          <div className="inline-flex items-center gap-2 text-orange font-medium mb-8">
            <Wrench className="w-5 h-5" />
            {t.login.accessLevel}
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.loginSelection.selectAccount}</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            يرجى اختيار نوع الحساب المناسب للوصول إلى ميزاتك المخصصة والتطبيقات
          </p>
        </div>
      </section>

      {/* Login Options */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loginOptions.map((option, index) => (
              <LoginCard key={index} {...option} />
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.systemFeatures.title}</h2>
            <div className="w-16 h-1 bg-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold mb-4">{t.footer.company.name}</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>📞 {t.footer.company.phone}</p>
                <p>📍 {t.footer.company.address}</p>
                <p>📧 {t.footer.company.email}</p>
              </div>
              <button className="bg-orange text-white px-4 py-2 rounded-lg mt-4 text-sm font-medium">
                {t.footer.company.bookNow}
              </button>
            </div>

            {/* Page Links */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.pageLinks.title}</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>{t.footer.pageLinks.home}</p>
                <p>{t.footer.pageLinks.about}</p>
                <p>{t.footer.pageLinks.certificates}</p>
                <p>{t.footer.pageLinks.projects}</p>
                <p>{t.footer.pageLinks.services}</p>
                <p>{t.footer.pageLinks.clients}</p>
                <p>{t.footer.pageLinks.blog}</p>
                <p>{t.footer.pageLinks.contact}</p>
              </div>
            </div>

            {/* More Info */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.moreInfo.title}</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>{t.footer.moreInfo.businessAssets}</p>
                <p>{t.footer.moreInfo.whatsappApp}</p>
                <p>{t.footer.moreInfo.downloads}</p>
                <p>{t.footer.moreInfo.customerSupport}</p>
                <p>{t.footer.moreInfo.requestQuote}</p>
              </div>
            </div>

            {/* Interactive Services */}
            <div>
              <h4 className="font-semibold mb-4">{t.footer.interactiveServices.title}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-blue-500 rounded text-center text-xs">f</span>
                  <span>{t.footer.interactiveServices.chatHub}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-orange rounded text-center text-xs">N</span>
                  <span>{t.footer.interactiveServices.newMaintenance}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-orange rounded text-center text-xs">T</span>
                  <span>{t.footer.interactiveServices.trackOrders}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
            <p>{t.footer.copyright}</p>
            <p className="mt-2">{t.footer.designedBy}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginSelection