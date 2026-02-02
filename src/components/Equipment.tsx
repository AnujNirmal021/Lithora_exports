import { Cog, Factory, Gauge, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Equipment() {
  const equipment = [
    {
      icon: Factory,
      title: 'CNC Cutting System',
      description:
        'State-of-the-art Computer Numerical Control machines for precision cutting and shaping of stone slabs with tolerances up to 0.1mm.',
      capabilities: ['Multi-axis cutting', 'Complex edge profiling', 'Automated operations'],
    },
    {
      icon: Cog,
      title: 'Gang Saw Operations',
      description:
        'Industrial-grade gang saws capable of processing large stone blocks into multiple slabs simultaneously with consistent thickness.',
      capabilities: ['Block processing', 'Multiple slab production', 'Thickness control'],
    },
    {
      icon: Gauge,
      title: 'Waterjet Cutting',
      description:
        'Advanced waterjet technology for intricate designs, inlays, and custom patterns without thermal stress on the stone.',
      capabilities: ['Precision cutting', 'Complex patterns', 'No heat damage'],
    },
    {
      icon: Wrench,
      title: 'Polishing & Finishing Units',
      description:
        'Comprehensive finishing equipment including automatic polishing lines, honing machines, and surface treatment systems.',
      capabilities: ['Multiple finish types', 'Automated polishing', 'Quality consistency'],
    },
  ]

  const facilities = [
    'Modern processing plant spanning 50,000+ sq ft',
    'Climate-controlled storage facilities',
    'Quality inspection laboratories',
    'Packaging and crating workshops',
    'Material handling and logistics center',
    'Maintenance and calibration facilities',
  ]

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Equipment & Infrastructure
          </h2>
          <p className="text-lg text-stone-700">
            Our world-class processing facilities and advanced machinery ensure precision,
            quality, and efficiency in every project we undertake.
          </p>
        </div>


        {/* ================= EQUIPMENT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="border-stone-200 bg-white hover:shadow-xl transition"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 mb-4">
                  <item.icon className="h-7 w-7 text-stone-700" />
                </div>

                <CardTitle className="text-2xl text-stone-900">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-stone-700 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-1">
                  {item.capabilities.map((capability, idx) => (
                    <li key={idx} className="text-sm text-stone-600 flex items-start">
                      • {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* ================= FACILITIES LIST ================= */}
        <Card className="border-stone-200 bg-white mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">
              Processing Facilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span className="text-stone-700">{facility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        {/* ================= IMAGE BANNER (FIXED PROPERLY) ================= */}
        <div className="relative rounded-2xl overflow-hidden h-[450px]">

          {/* background image */}
          <img
            src={`${import.meta.env.BASE_URL}assets/equipment-facility.jpg`}
            alt="Processing Facilities"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* text */}
          <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
            <h3 className="text-3xl font-bold mb-3">
              Advanced Infrastructure for Superior Results
            </h3>
            <p className="text-stone-200 max-w-2xl">
              Our investment in cutting-edge technology ensures we deliver the highest quality
              products with precision and efficiency.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
