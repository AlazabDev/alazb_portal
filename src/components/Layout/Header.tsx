import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export const Header = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">عز</span>
              </div>
              <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                <h1 className="text-xl font-bold text-foreground">al-azab.co</h1>
                <p className="text-sm text-orange">{t.company.sector}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-orange transition-colors">{t.nav.home}</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">{t.nav.about}</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">{t.nav.projects}</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">{t.nav.services}</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">{t.nav.version} 2.1.0</span>
              <span className="text-muted-foreground">{t.nav.support247}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={toggleLanguage}
            >
              <Languages className="w-4 h-4" />
              <span>{t.nav.language}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}