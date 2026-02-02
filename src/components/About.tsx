import { Award, Building2, Globe2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const timeline = [
    {
      year: '1968',
      title: 'Foundation',
      description: 'Mr. Iranna Laxman Harlekar started buisness in timber/wood trading.',
    },
    {
      year: '1972',
      title: 'Expansion Phase-1',
      description: 'Entry into natural stones with Rough Shahbadi-Yellow Limestone.',
    },
    {
      year: '1980',
      title: 'Expansion Phase-2',
      description: 'Expansion into Tandur Grey and Kadappa Black limestone.',
    },
    {
      year: '1997',
      title: 'Carrying Legacy Forward',
      description: 'Mr. Santosh Harlekar joined the buisness, initiating diversification and modernization.',
    },
    {
      year: '2003',
      title: 'Transformation',
      description: 'Transition into direct exports and global sourcing of natural stones, marbles, granites and interior materials.',
    },
    {
      year: 'Present',
      title: '50+ Years of Excellence',
      description: 'Leading Maharashtra\'s natural stone industry with global presence and unwavering commitment to quality.',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Heritage & Quality',
      description: 'Five decades of expertise in sourcing and delivering premium natural stones',
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Established presence across Vietnam, Dubai, Europe, London, and Turkey',
    },
    {
      icon: Building2,
      title: 'Maharashtra Roots',
      description: 'Proud to represent Maharashtra\'s excellence in global stone trading',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through transparency and exceptional service',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            About Lithora Exports
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            Since 1968, Lithora Exports has been at the forefront of Maharashtra's natural stone industry, 
            combining traditional expertise with modern innovation to serve global markets with distinction.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                Our Mission
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                To be the global leader in natural stone trading, delivering exceptional quality and service 
                while upholding Maharashtra's rich heritage in stone craftsmanship. We strive to connect the 
                world's finest quarries with discerning clients through ethical practices and unwavering commitment to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                Our Vision
              </h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                To expand our global footprint while maintaining the personal touch and quality standards that 
                have defined us for over 50 years. We envision a future where Lithora Exports continues to set 
                industry benchmarks in sustainability, innovation, and customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Spotlight */}
        <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={`assets/owner-logo.jpg`}
                  alt="Lithora Exports"
                  className="h-20 sm:h-28 lg:h-36 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                  Foundation  of Lithora Exports
                </h3>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
                  In 1968, Mr. Iranna Harlekar, f/o Mr. Santosh Harlekar established Lithora Exports with a vision to showcase Maharashtra's 
                  natural stone excellence to the world. His pioneering spirit and commitment to quality laid the 
                  foundation for what has become one of the region's most respected stone trading enterprises.
                </p>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Under his leadership, Lithora Exports evolved from a local operation to an international trading 
                  powerhouse, always maintaining the core values of integrity, quality, and customer satisfaction 
                  that defined its inception.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">
            Our Journey Through the Decades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <Card
                key={index}
                className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-stone-600 dark:text-stone-400 mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <value.icon className="h-8 w-8 text-stone-700 dark:text-stone-300" />
                </div>
                <h4 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quarry Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="assets/marble-quarry.png"
            alt="Marble Quarry Operations"
            className="w-full h-64 sm:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8">
              <p className="text-white text-lg sm:text-xl font-semibold mb-2">
                Sourced from the Finest Quarries Worldwide
              </p>
              <p className="text-stone-200 text-sm sm:text-base">
                Our partnerships with premium quarries ensure consistent quality and sustainable sourcing practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
