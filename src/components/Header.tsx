import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'global-trade', label: 'Global Trade' },
    { id: 'b2b', label: 'B2B & B2G' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 dark:bg-stone-900/98 backdrop-blur-md shadow-lg' : 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={`${import.meta.env.BASE_URL}lithora-logo.png`}
              alt="Lithora Exports"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#2C4A5E] dark:text-stone-100 tracking-tight">
                Lithora Exports
              </h1>
              <p className="text-xs text-[#8B7355] dark:text-stone-400 hidden sm:block font-medium">
                Since 1968
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`text-[#2C4A5E] dark:text-stone-200 hover:text-[#1a2d3a] dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 font-medium transition-colors ${
                  activeSection === item.id ? 'bg-stone-100 dark:bg-stone-800 text-[#1a2d3a] dark:text-white' : ''
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#2C4A5E] dark:text-stone-200">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white dark:bg-stone-900">
              <nav className="flex flex-col space-y-2 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavClick(item.id)}
                    className={`justify-start text-base font-medium text-[#2C4A5E] dark:text-stone-200 hover:text-[#1a2d3a] dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 ${
                      activeSection === item.id ? 'bg-stone-100 dark:bg-stone-800 text-[#1a2d3a] dark:text-white' : ''
                    }`}
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
  );
}
