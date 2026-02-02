import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface HeaderProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'global-trade', label: 'Global Trade' },
    { id: 'b2b', label: 'B2B & B2G' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
  src={`${import.meta.env.BASE_URL}lithora-logo.png`}
  alt="Lithora Exports"
  className="h-14 w-14 object-contain"
/>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#2C4A5E] tracking-tight">
                Lithora Exports
              </h1>
              <p className="text-xs text-[#8B7355] hidden sm:block font-medium">
                Since 1968
              </p>
            </div>
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`
                  rounded-xl px-4 py-2 font-medium transition-all duration-300 shadow-sm
                  ${
                    activeSection === item.id
                      ? 'bg-[#2a201f] text-white'
                      : 'bg-[#3b2f2f] text-white hover:bg-[#2a201f] hover:scale-105'
                  }
                `}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* ================= MOBILE NAV ================= */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#2C4A5E]">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-white">
              <nav className="flex flex-col space-y-3 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      justify-start font-medium rounded-lg
                      ${
                        activeSection === item.id
                          ? 'bg-[#3b2f2f] text-white'
                          : 'text-[#2C4A5E] hover:bg-stone-100'
                      }
                    `}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
