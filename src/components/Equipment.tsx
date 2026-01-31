import { Cog, Factory, Gauge, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Equipment() {
  const equipment = [
    {
      icon: Factory,
      title: 'CNC Cutting Systems',
      description: 'State-of-the-art Computer Numerical Control machines for precision cutting and shaping of stone slabs with tolerances up to 0.1mm.',
      capabilities: ['Multi-axis cutting', 'Complex edge profiling', 'Automated operations'],
    },
    {
      icon: Cog,
      title: 'Gang Saw Operations',
      description: 'Industrial-grade gang saws capable of processing large stone blocks into multiple slabs simultaneously with consistent thickness.',
      capabilities: ['Block processing', 'Multiple slab production', 'Thickness control'],
    },
    {
      icon: Gauge,
      title: 'Waterjet Cutting',
      description: 'Advanced waterjet technology for intricate designs, inlays, and custom patterns without thermal stress on the stone.',
      capabilities: ['Precision cutting', 'Complex patterns', 'No heat damage'],
    },
    {
      icon: Wrench,
      title: 'Polishing & Finishing Units',
      description: 'Comprehensive finishing equipment including automatic polishing lines, honing machines, and surface treatment systems.',
      capabilities: ['Multiple finish types', 'Automated polishing', 'Quality consistency'],
    },
  ];

  const facilities = [
    'Modern processing plant spanning 50,000+ sq ft',
    'Climate-controlled storage facilities',
    'Quality inspection laboratories',
    'Packaging and crating workshops',
    'Material handling and logistics center',
    'Maintenance and calibration facilities',
  ];

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Equipment & Infrastructure
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            Our world-class processing facilities and advanced machinery ensure precision, quality, 
            and efficiency in every project we undertake.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800 mb-4">
                  <item.icon className="h-7 w-7 text-stone-700 dark:text-stone-300" />
                </div>
                <CardTitle className="text-2xl text-stone-900 dark:text-stone-100">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                    Key Capabilities:
                  </p>
                  <ul className="space-y-1">
                    {item.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-stone-600 dark:text-stone-400 mr-2">•</span>
                        <span className="text-sm text-stone-600 dark:text-stone-400">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Overview */}
        <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 text-center">
              Processing Facilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-stone-600 dark:text-stone-400 mr-3 mt-1">✓</span>
                  <span className="text-stone-700 dark:text-stone-300">{facility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Background Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/assets/generated/marble-quarry.dim_800x500.jpg"
            alt="Processing Facilities"
            className="w-full h-64 sm:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8">
              <p className="text-white text-lg sm:text-xl font-semibold mb-2">
                Advanced Infrastructure for Superior Results
              </p>
              <p className="text-stone-200 text-sm sm:text-base">
                Our investment in cutting-edge technology ensures we deliver the highest quality products 
                with precision and efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
