import { MapPin, Package, Ship, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function GlobalReach() {
  const stats = [
    { icon: MapPin, value: '50+', label: 'Countries Served' },
    { icon: Package, value: '10,000+', label: 'Shipments Annually' },
    { icon: Ship, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Satisfied Clients' },
  ];

  const regions = [
    { name: 'North America', markets: 'USA, Canada, Mexico' },
    { name: 'Europe', markets: 'UK, Germany, France, Italy, Spain' },
    { name: 'Middle East', markets: 'UAE, Saudi Arabia, Qatar, Kuwait' },
    { name: 'Asia Pacific', markets: 'Singapore, Australia, Japan, South Korea' },
  ];

  return (
    <section id="global-reach" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Global Reach
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            From quarry to destination, we deliver premium natural stones to clients across the
            globe with unmatched reliability and expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <stat.icon className="h-6 w-6 text-stone-700 dark:text-stone-300" />
                </div>
                <div className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-600 dark:text-stone-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 bg-white">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <img
              src={`${import.meta.env.BASE_URL}Market_map-1.png`}
              alt="Global Presence Map"
              className="w-full rounded-xl shadow-lg"
              //srcSet="/assets/generated/world-map-highres-1920.png 1920w, /assets/generated/world-map-highres-1200.png 1200w, /assets/generated/world-map-transparent.dim_600x400.png 600w"
              //sizes="(min-width: 1024px) 100vw, 100vw"
              //alt="Market Map"
              //className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {region.name}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">{region.markets}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                Logistics & Delivery
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                Our comprehensive logistics network ensures timely and secure delivery of your
                natural stone orders. We partner with leading freight forwarders and handle all
                documentation, customs clearance, and shipping arrangements to provide you with a
                seamless experience from order to installation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
