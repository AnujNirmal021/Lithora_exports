import { Award, Globe2, Heart, Shield, TrendingUp, Users2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: '50+ Years of Legacy',
      description: 'Since 1968, we have built an unmatched reputation for quality and reliability in the natural stone industry.',
      highlight: 'Established 1968',
    },
    {
      icon: Globe2,
      title: 'Global Presence',
      description: 'Serving prestigious markets across Vietnam, Dubai, Europe, London, and Turkey with consistent excellence.',
      highlight: '5 Continents',
    },
    {
      icon: Shield,
      title: 'Ethical Trade Practices',
      description: 'Committed to sustainable sourcing, fair trade, and environmental responsibility in all our operations.',
      highlight: 'ISO Certified',
    },
    {
      icon: Users2,
      title: 'Expert Team',
      description: 'Decades of combined experience in stone selection, processing, and international trade logistics.',
      highlight: '100+ Professionals',
    },
    {
      icon: TrendingUp,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage, from quarry selection to final delivery, ensuring premium standards.',
      highlight: '100% Inspected',
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Building lasting relationships through personalized service, transparency, and unwavering commitment to satisfaction.',
      highlight: '500+ Happy Clients',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Why Choose Lithora Exports
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            Five decades of excellence, global reach, and unwavering commitment to quality make us 
            Maharashtra's premier choice for natural stone trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800">
                    <reason.icon className="h-7 w-7 text-stone-700 dark:text-stone-300" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                      {reason.highlight}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                Maharashtra's Heritage, Global Excellence
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                Rooted in Maharashtra's rich tradition of stone craftsmanship, Lithora Exports has evolved 
                into a global leader while maintaining the values of integrity, quality, and customer service 
                that defined our founding in 1968. Our journey from a local operation to an international 
                trading powerhouse reflects our commitment to excellence and innovation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">50+</div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">500+</div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Global Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">50+</div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Countries Served</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">100%</div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Quality Assured</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
