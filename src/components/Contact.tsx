import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      title: 'Email',
      content: 'santoshharlekar@gmail.com',
      subtitle: 'For inquiries and quotations',
      link: 'mailto:santoshharlekar@gmail.com',
    },
    {
      icon: Phone,
      iconColor: 'text-pink-600',
      iconBg: 'bg-pink-100',
      title: 'Phone',
      content: '+91 98223 46820',
      subtitle: 'Business hours: 9 AM - 6 PM IST',
      link: 'tel:+919822346820',
    },
    {
      icon: MapPin,
      iconColor: 'text-pink-600',
      iconBg: 'bg-pink-100',
      title: 'Location',
      content: 'Santosh Harlekar',
      subtitle: 'CS No. 222, Flat No. 504, 5th Floor, The Landmark Apartment, Near LFC School, Gandhi Nagar, Solapur North, Solapur, Maharashtra, 413003',
      link: null,
    },
  ];

  const certifications = [
    {
      title: 'Import-Export Certificate (IEC)',
      subtitle: 'IEC: AAMFL8734C',
      description: 'Issued by: Directorate General of Foreign Trade, Government of India. Valid and verified certificate for B2B trading operations.',
      buttonText: 'View Certificate',
      link: 'https://drive.google.com/drive/folders/15f9FXMrnyxEuO7m4b0PiVJg1sNUArUzC',
    },
    {
      title: 'Business Registration Certificate',
      subtitle: 'Registration Certificate',
      description: 'Firm Name: LITHORA EXPORTS LLP. Valid business registration and compliance documentation.',
      buttonText: 'View Registration',
      link: 'https://drive.google.com/drive/folders/15f9FXMrnyxEuO7m4b0PiVJg1sNUArUzC',
    },
  ];

  const portfolioEmbedUrl = "https://drive.google.com/file/d/1AUCvmBZgM132IttlSpsn8qYaScD-KIOo/preview";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300 mb-4">
            Ready to start your next project or explore partnership opportunities? 
            We're here to help you find the perfect natural stone solution.
          </p>
          <p className="text-xl font-semibold text-stone-800 dark:text-stone-200">
            Request a Quote | Partner With Us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${info.iconBg} mb-4`}>
                  <info.icon className={`h-6 w-6 ${info.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium block mb-2"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-stone-900 dark:text-stone-100 font-semibold mb-2">{info.content}</p>
                )}
                <p className="text-sm text-stone-600 dark:text-stone-400">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-stone-200 mb-3">
              Credentials & Portfolio
            </h2>
            <p className="text-stone-600 dark:text-stone-400">
              Official Import-Export Certificate, Business Credentials, and Project Portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            {/* Certifications Section */}
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
                      {cert.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
                      {cert.description}
                    </p>
                    <Button
                      //asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        {cert.buttonText}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Portfolio Section */}
            <div className="lg:sticky lg:top-24">
              <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Project Portfolio
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
                    Explore our comprehensive portfolio showcasing premium natural stone products and completed projects.
                  </p>
                  <div className="relative w-full bg-stone-100 dark:bg-stone-950 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800">
                    <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                      <iframe
                        src={portfolioEmbedUrl}
                        className="absolute top-0 left-0 w-full h-full border-none"
                        allow="autoplay"
                        title="Lithora Exports Portfolio"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Video Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4 text-center">
                  Company Overview
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 text-center">
                  Watch our video to learn more about Lithora Exports and our operations.
                </p>
                <div className="relative w-full bg-stone-100 dark:bg-stone-950 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://drive.google.com/file/d/1glVxxZqJ99oeNFlPhlcGgD98WV5aJcxM/preview"
                      className="absolute top-0 left-0 w-full h-full border-none"
                      allow="autoplay"
                      title="Lithora Exports Company Overview"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
