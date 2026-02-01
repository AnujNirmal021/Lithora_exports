import { Building, Building2, Handshake, MapPin, Package2, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function B2B() {
  const solutions = [
    {
      icon: Building2,
      title: 'Contractors & Developers',
      description: 'Tailored stone supply solutions for construction projects of all scales, from residential developments to commercial complexes.',
      services: [
        'Project-based pricing',
        'Volume discounts',
        'Scheduled deliveries',
        'Technical support',
        'Sample provision',
      ],
    },
    {
      icon: Building,
      title: 'Government Bodies',
      description: 'Reliable partner for government infrastructure projects, public buildings, and institutional developments.',
      services: [
        'Tender participation',
        'Compliance documentation',
        'Quality certifications',
        'Transparent pricing',
        'Long-term contracts',
      ],
    },
    {
      icon: Users,
      title: 'Architects & Designers',
      description: 'Collaborative partnerships with design professionals to bring creative visions to life with premium natural stones.',
      services: [
        'Material consultation',
        'Custom specifications',
        'Sample libraries',
        'Project visualization',
        'Technical drawings',
      ],
    },
  ];

  const offerings = [
    {
      icon: Package2,
      title: 'Bulk Procurement',
      description: 'Competitive pricing and reliable supply for large-volume orders with flexible payment terms.',
    },
    {
      icon: TrendingUp,
      title: 'Custom Supply Solutions',
      description: 'Tailored sourcing and processing to meet specific project requirements and specifications.',
    },
    {
      icon: Handshake,
      title: 'Partnership Programs',
      description: 'Long-term collaboration frameworks with preferred pricing and priority service.',
    },
  ];

  const primaryMarkets = ['Vietnam', 'Dubai', 'London', 'Turkey'];
  const europeanMarkets = ['Germany', 'Italy', 'Spain', 'Switzerland'];
  const emergingMarkets = ['Belgium', 'Netherlands', 'France', 'Poland', 'USA', 'Canada', 'Australia', 'Qatar', 'Saudi Arabia', 'Oman'];

  return (
    <section id="b2b" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            B2B & B2G Solutions
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            Specialized trade solutions for businesses and government organizations, backed by decades 
            of experience in large-scale stone supply and project execution.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <solution.icon className="h-7 w-7 text-stone-700 dark:text-stone-300" />
                </div>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    Our Services:
                  </p>
                  <ul className="space-y-2">
                    {solution.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-stone-600 dark:text-stone-400 mr-2">✓</span>
                        <span className="text-sm text-stone-600 dark:text-stone-400">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <offering.icon className="h-6 w-6 text-stone-700 dark:text-stone-300" />
                </div>
                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {offering.title}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-400">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Presence Map */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4 text-center">
            Our Global Presence
          </h3>
          <p className="text-center text-stone-700 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
            Lithora Exports serves clients across multiple continents, delivering premium natural stones 
            to key markets worldwide.
          </p>
          
          <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 mb-8">
            <CardContent className="p-8">
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}Market_map-1.png`}
                  alt="Global Presence Map"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Primary Markets
                  </h4>
                </div>
                <ul className="space-y-2">
                  {primaryMarkets.map((market, idx) => (
                    <li key={idx} className="text-sm text-stone-700 dark:text-stone-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                      {market}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    European Markets
                  </h4>
                </div>
                <ul className="space-y-2">
                  {europeanMarkets.map((market, idx) => (
                    <li key={idx} className="text-sm text-stone-700 dark:text-stone-300 flex items-center">
                      <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-2"></span>
                      {market}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    Emerging Markets
                  </h4>
                </div>
                <ul className="space-y-2 max-h-40 overflow-y-auto">
                  {emergingMarkets.map((market, idx) => (
                    <li key={idx} className="text-sm text-stone-700 dark:text-stone-300 flex items-center">
                      <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full mr-2"></span>
                      {market}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Benefits */}
        <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 text-center">
              Partnership Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  For Businesses
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Dedicated account management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Priority processing and delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Flexible payment terms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Volume-based pricing advantages
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">
                  For Government
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Full regulatory compliance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Transparent procurement process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Quality assurance documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                    <span className="text-sm text-stone-700 dark:text-stone-300">
                      Long-term supply agreements
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
