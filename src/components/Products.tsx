export default function Products() {
  const base = import.meta.env.BASE_URL;

  const productImages = [
    { image: `${base}assets/tan-brown-granite.jpg`, caption: 'Tan Brown Granite' },
    { image: `${base}assets/aish-grey-granite.jpg`, caption: 'Aish Grey Granite' },

    // ❌ Slate removed completely

    { image: `${base}assets/tandur-grey.jpg`, caption: 'Tandur Grey' },
    { image: `${base}assets/absolute-black-granite.jpg`, caption: 'Absolute Black Granite' },

    { image: `${base}assets/galaxy-black.jpg`, caption: 'Galaxy Black Granite' },
    { image: `${base}assets/kadappa-black.jpg`, caption: 'Kadappa Black' },

    { image: `${base}assets/calacatta-gold-marble.jpg`, caption: 'Calacatta Gold Marble' },
    { image: `${base}assets/carrara-italian-marble.jpg`, caption: 'Carrara Italian Marble' },

    { image: `${base}assets/ash-black-granite.jpg`, caption: 'Ash Black Granite' },
    { image: `${base}assets/engineered-quartz.jpg`, caption: 'Engineered Quartz' },
    { image: `${base}assets/botochino-italian-marble.jpg`, caption: 'Botochino Italian Marble' },
  ];

  return (
    <section id="products" className="py-14 sm:py-20 bg-white dark:bg-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4A5E] dark:text-stone-100 mb-4">
            Products & Services
          </h2>

          <p className="text-lg text-stone-600 dark:text-stone-300">
            Explore our premium collection of natural stones sourced from the finest quarries worldwide.
          </p>
        </div>

        {/* Gallery */}
<div className="flex flex-wrap justify-center gap-5">
  {productImages.map((product, index) => (
    <div
      key={index}
      className="
        group
        w-[calc(50%-10px)]
        md:w-[calc(33.33%-14px)]
        lg:w-[calc(25%-15px)]
        rounded-xl
        overflow-hidden
        bg-white
        dark:bg-stone-800
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.caption
          }
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="py-3">
                <p className="text-center text-sm font-semibold text-stone-800 dark:text-stone-100">
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
