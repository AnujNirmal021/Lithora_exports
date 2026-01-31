export default function Products() {
  const productImages = [
    {
      image: '/assets/Tan Brown Granite.jpg',
      alt: 'Tan Brown Granite',
      caption: 'Tan Brown Granite',
    },
    {
      image: '/assets/Aish grey granite.jpg',
      alt: 'Aish Grey Granite',
      caption: 'Aish Grey Granite',
    },
    {
      image: '/assets/11.-Kadappa-Black-Limestone-rotated-1.jpg',
      alt: 'Slate',
      caption: 'Slate',
    },
    {
      image: '/assets/Grey Tandur.jpg',
      alt: 'Tandur Grey',
      caption: 'Tandur Grey',
    },
    {
      image: '/assets/Absolute black granite-1.jpg',
      alt: 'Absolute Black Granite',
      caption: 'Absolute Black Granite',
    },
    {
      image: '/assets/Galaxy black granite.jpg',
      alt: 'Galaxy Black Granite',
      caption: 'Galaxy Black Granite',
    },
    {
      image: '/assets/Slate.jpg',
      alt: 'Kadappa Black',
      caption: 'Kadappa Black',
    },
    {
      image: '/assets/Calacatta gold marble.jpg',
      alt: 'Calacatta Gold Marble',
      caption: 'Calacatta Gold Marble',
    },
    {
      image: '/assets/Calacatta italian marble.jpg',
      alt: 'Calacatta Italian Marble',
      caption: 'Calacatta Italian Marble',
    },
    {
      image: '/assets/Ash Black Granite.jpg',
      alt: 'Ash Black Granite',
      caption: 'Ash Black Granite',
    },
    {
      image: '/assets/Engineered Quartz.jpg',
      alt: 'Engineered Quartz',
      caption: 'Engineered Quartz',
    },
    {
      image: '/assets/Botochino Italian Marble.jpg',
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

        {/* Product Gallery - Compact Grid Layout */}
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
