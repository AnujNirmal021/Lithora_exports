import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'global-trade', label: 'Global Trade' },
    { id: 'b2b', label: 'B2B & B2G' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-stone-900 dark:bg-black text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}lithora-logo.png`}
                alt="Lithora Exports"
                className="h-20 sm:h-28 lg:h-36 w-auto"
              />
              <h3 className="text-xl font-bold text-white">Lithora Exports</h3>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Leading Maharashtra's Natural Stone & Global Trading Excellence Since 1968
            </p>
            <p className="text-xs text-stone-500">
              Global Natural Stone & Trade Solutions
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5 text-stone-300" />
                </a>
              ))}
            </div>
            <div className="text-sm text-stone-400">
              <p className="mb-1">Maharashtra, India</p>
              <p className="mb-1">santoshharlekar@gmail.com</p>
              <p>+91 9822346820</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <p className="text-center text-sm text-stone-400">
            © Lithora Exports | Global Natural Stone & Trade Solutions | Since 1968
          </p>
          <p className="text-center text-sm text-stone-500 mt-2">
            Built with{' '}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
