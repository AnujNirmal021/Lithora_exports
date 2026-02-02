interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
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
    <footer className="bg-[#1c1a18] text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <img
                src={`${import.meta.env.BASE_URL}lithora-logo.png`}
                alt="Lithora Exports"
                className="h-20 w-auto"
              />
              <h3 className="text-xl font-bold text-white">
                Lithora Exports
              </h3>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Leading Maharashtra's Natural Stone & Global Trading Excellence
              since 1968. Trusted worldwide for premium stone supply and export solutions.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-stone-400 hover:text-[#8B7355] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact Information
            </h4>

            <div className="space-y-2 text-sm text-stone-400">
              <p>Maharashtra, India</p>
              <p>Email: santoshharlekar@gmail.com</p>
              <p>Phone: +91 9822346820</p>
              <p>Business Hours: Mon – Sat | 9:00 AM – 6:00 PM</p>
            </div>
          </div>

        </div>


        {/* Bottom Line */}
        <div className="border-t border-stone-800 mt-12 pt-6 text-center">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Lithora Exports. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
