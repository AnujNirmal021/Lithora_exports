import { Anchor, FileText, Globe, Ship, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GlobalTrade() {
  const services = [
    {
      icon: FileText,
      title: 'Customs & Documentation',
      description: 'Complete handling of export documentation, customs clearance, and regulatory compliance across all destination countries.',
      features: [
        'Export licenses and permits',
        'Certificate of origin',
        'Commercial invoicing',
        'Phytosanitary certificates',
        'Compliance documentation',
      ],
    },
    {
      icon: Ship,
      title: 'Logistics Coordination',
      description: 'End-to-end logistics management ensuring timely and secure delivery of your stone shipments worldwide.',
      features: [
        'Route optimization',
        'Freight forwarding',
        'Container booking',
        'Shipment tracking',
        'Insurance coordination',
      ],
    },
    {
      icon: Anchor,
      title: 'Port Handling',
      description: 'Expert port operations and cargo handling services at major international ports and terminals.',
      features: [
        'Loading supervision',
        'Container stuffing',
        'Quality inspection',
        'Secure packaging',
        'Port clearance',
      ],
    },
    {
      icon: Truck,
      title: 'Last-Mile Delivery',
      description: 'Reliable inland transportation and delivery coordination to your project site or warehouse.',
      features: [
        'Inland transport',
        'Warehouse delivery',
        'Site coordination',
        'Unloading assistance',
        'Damage prevention',
      ],
    },
  ];

  const markets = [
    { region: 'Vietnam', description: 'Growing market with strong demand for premium marble and granite' },
    { region: 'Dubai & UAE', description: 'Luxury construction projects requiring high-end natural stones' },
    { region: 'Europe', description: 'Established markets across UK, Germany, France, Italy, and Spain' },
    { region: 'London', description: 'Premium residential and commercial developments' },
    { region: 'Turkey', description: 'Strategic partner for travertine and marble trading' },
    { region: 'Asia Pacific', description: 'Expanding presence in Singapore, Australia, and Japan' },
  ];

  return (
    <section id="global-trade" className="py-20 sm:py-28 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Global Trade & Logistics
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            Seamless international trade services backed by decades of experience in global stone exports 
            and comprehensive logistics solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <service.icon className="h-7 w-7 text-stone-700 dark:text-stone-300" />
                </div>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                      <span className="text-sm text-stone-700 dark:text-stone-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Presence - Markets Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">
            Our Global Presence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, index) => (
              <Card
                key={index}
                className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-3">
                    <Globe className="h-5 w-5 text-stone-600 dark:text-stone-400 mr-2 mt-1 flex-shrink-0" />
                    <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                      {market.region}
                    </h4>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{market.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Logistics Advantage */}
        <Card className="border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 text-center">
              Why Choose Our Logistics Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">50+</div>
                <p className="text-sm text-stone-600 dark:text-stone-400">Years of Export Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">100%</div>
                <p className="text-sm text-stone-600 dark:text-stone-400">On-Time Delivery Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">24/7</div>
                <p className="text-sm text-stone-600 dark:text-stone-400">Shipment Tracking Support</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
