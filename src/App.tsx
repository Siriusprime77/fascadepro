import React, { useState, FormEvent } from 'react';
import { Building2, Phone, Mail, Clock, MapPin, ChevronRight, SprayCan as Spray, Square, Maximize as WindowMaximize, DoorClosed, Eraser, Hammer, Building, Sailboat } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { PhotoGallery } from './components/PhotoGallery';

function App() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'algis0189@gmail.com',
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success(t('contact.success'));
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Spray className="w-12 h-12 text-red-600" />,
      title: t('services.coating.title'),
      description: t('services.coating.description')
    },
    {
      icon: <Square className="w-12 h-12 text-red-600" />,
      title: t('services.panels.title'),
      description: t('services.panels.description')
    },
    {
      icon: <WindowMaximize className="w-12 h-12 text-red-600" />,
      title: t('services.windows.title'),
      description: t('services.windows.description')
    },
    {
      icon: <DoorClosed className="w-12 h-12 text-red-600" />,
      title: t('services.doors.title'),
      description: t('services.doors.description')
    },
    {
      icon: <Eraser className="w-12 h-12 text-red-600" />,
      title: t('services.cleaning.title'),
      description: t('services.cleaning.description')
    },
    {
      icon: <Hammer className="w-12 h-12 text-red-600" />,
      title: t('services.damage.title'),
      description: t('services.damage.description')
    },
    {
      icon: <Building className="w-12 h-12 text-red-600" />,
      title: t('services.renovation.title'),
      description: t('services.renovation.description')
    },
    {
      icon: <Sailboat className="w-12 h-12 text-red-600" />,
      title: t('services.yacht.title'),
      description: t('services.yacht.description')
    }
  ];

  // Project galleries - each project has its own set of images
  const projectGalleries = [
    // Project 1 - Your provided images
    [
      "https://i.ibb.co/VZ2txR9/image.jpg",
      "https://i.ibb.co/VYqFgD64/image.jpg",
      "https://i.ibb.co/SDq8LxnZ/image.jpg",
      "https://i.ibb.co/KcWJVmJq/image.jpg",
      "https://i.ibb.co/fRkWq2G/image.jpg",
      "https://i.ibb.co/jvwtg1Q2/image.jpg",
      "https://i.ibb.co/Ghzx2y8/image.jpg",
      "https://i.ibb.co/5gFmKdL4/image.jpg",
      "https://i.ibb.co/cKgkpH3L/image.jpg",
      "https://i.ibb.co/zTNrgyfG/image.jpg",
      "https://i.ibb.co/4RmFzhbG/image.jpg",
      "https://i.ibb.co/JW1SZkCV/image.jpg",
      "https://i.ibb.co/1GgGLkJQ/image.jpg",
      "https://i.ibb.co/Mx8kPRxb/image.jpg",
      "https://i.ibb.co/39nKzJV4/image.jpg",
      "https://i.ibb.co/601rKBnf/image.jpg",
      "https://i.ibb.co/zThQKmBr/image.jpg"
    ],
    // Other projects with placeholder images
    ["https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80"],
    ["https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80"],
  ];

  const portfolioImages = [
    "https://i.ibb.co/tp7sJNmN/Algis.webp", // Project 1 main image
    "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80",  
  ];

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-center" />
      
      {/* Photo Gallery Modal */}
      <PhotoGallery
        images={projectGalleries[selectedProject] || []}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={0}
      />

      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/VcL5qcLM/main-page.gif"
            alt="Industriekletterer bei der Fassadenrenovierung eines Hochhauses"
            className="w-full h-full object-cover opacity-60 contrast-125 brightness-90 saturate-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <nav className="relative z-10 flex justify-between items-center px-8 py-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">FacaDePro</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#services" className="hover:text-red-600 transition-colors">{t('nav.services')}</a>
            <a href="#portfolio" className="hover:text-red-600 transition-colors">{t('nav.portfolio')}</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">{t('nav.contact')}</a>
            <LanguageSwitcher />
          </div>
        </nav>
        <div className="relative z-10 flex flex-col justify-center h-full max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">{t('hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-300">{t('hero.subtitle')}</p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg w-fit hover:bg-red-700 transition-colors flex items-center gap-2">
            {t('hero.cta')}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800 p-8 rounded-lg hover:bg-zinc-700 transition-colors">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('portfolio.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openGallery(index)}
              >
                <img 
                  src={image} 
                  alt={`${t('project.label')} ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-lg font-semibold">{t('project.label')} {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t('contact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span>+49 (172) 10-02-555</span>
                  <span>+49 (172) 10-02-555</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <span>algis0189@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <span>Mo-Fr: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span>26892, Dörpen</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">{t('contact.name')}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-red-600 focus:outline-none"
                  required 
                />
              </div>
              <div>
                <label className="block mb-2">{t('contact.phone')}</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-red-600 focus:outline-none"
                  required 
                />
              </div>
              <div>
                <label className="block mb-2">{t('contact.message')}</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-red-600 focus:outline-none h-32"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-red-600 text-white px-8 py-4 rounded-lg w-full hover:bg-red-700 transition-colors disabled:bg-red-800 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-red-600" />
            <span className="text-xl font-bold">FacaDePro</span>
          </div>
          <p className="text-gray-400">© 2024 FacaDePro. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
