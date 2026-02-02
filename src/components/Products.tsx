export default function Products() {
  const base = import.meta.env.BASE_URL;

  const productImages = [
    {
      image: `${base}assets/tan-brown-granite.jpg`,
      alt: 'Tan Brown Granite',
      caption: 'Tan Brown Granite',
    },
    {
      image: `${base}assets/aish-grey-granite.jpg`,
      alt: 'Aish Grey Granite',
      caption: 'Aish Grey Granite',
    },
    {
      image: `${base}assets/kadappa-black.jpg`,
      alt: 'Slate',
      caption: 'Slate',
    },
    {
      image: `${base}assets/tandur-grey.jpg`,
      alt: 'Tandur Grey',
      caption: 'Tandur Grey',
    },
    {
      image: `${base}assets/absolute-black-granite.jpg`,
      alt: 'Absolute Black Granite',
      caption: 'Absolute Black Granite',
    },
    {
      image: `${base}assets/galaxy-black.jpg`,
      alt: 'Galaxy Black Granite',
      caption: 'Galaxy Black Granite',
    },
    {
      image: `${base}assets/slate.jpg`,
      alt: 'Kadappa Black',
      caption: 'Kadappa Black',
    },
    {
      image: `${base}assets/calacatta-gold-marble.jpg`,
      alt: 'Calacatta Gold Marble',
      caption: 'Calacatta Gold Marble',
    },
    {
      image: `${base}assets/carrara-italian-marble.jpg`,
      alt: 'Carrara Italian Marble',
      caption: 'Carrara Italian Marble',
    },
    {
      image: `${base}assets/ash-black-granite.jpg`,
      alt: 'Ash Black Granite',
      caption: 'Ash Black Granite',
    },
    {
      image: `${base}assets/engineered-quartz.jpg`,
      alt: 'Engineered Quartz',
      caption: 'Engineered Quartz',
    },
    {
      image: `${base}assets/botochino-italian-marble.jpg`,
      alt: 'Botochino Italian Marble',
      caption: 'Botochino Italian Marble',
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-16 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300">
            Explore our premium collection of natural stones sourced from the finest quarries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productImages.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-stone-100 dark:bg-stone-950"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-white dark:bg-stone-800">
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100 text-center">
                  {product.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
