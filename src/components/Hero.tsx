import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/hero-marble-background.dim_1920x1080.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <img
            src={`${import.meta.env.BASE_URL}lithora-logo.png`}
            alt="Lithora Exports"
            className="h-28 w-auto mx-auto mb-6"
            loading="eager"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Lithora Exports
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-stone-200 mb-8 font-light leading-relaxed">
          Leading Maharashtra's Natural Stone & Global Trading Excellence Since 1968
        </p>
        <p className="text-base sm:text-lg text-stone-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          For over 50 years, Lithora Exports has been Maharashtra's trusted partner in natural stone trading and global commerce. 
          From our roots in 1968, we've grown to serve prestigious markets across Vietnam, Dubai, Europe, London, and Turkey, 
          delivering unmatched quality and reliability in every shipment.
        </p>
      </div>

      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
}
