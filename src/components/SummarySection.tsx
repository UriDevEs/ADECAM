import React, { useState } from 'react';
import Slider from 'react-slick';
import { X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SummarySection: React.FC = () => {
  // Obtener los archivos de la galería igual que en Gallery.tsx
  const imageFiles = [
    "1.jpeg","10.jpeg","11.jpeg","12.jpeg","13.jpeg","14.jpeg","15.jpeg","16.jpeg","17.jpeg","18.jpeg","19.jpeg","2.jpeg","20.jpeg","21.jpeg","22.jpeg","23.jpeg","24.jpeg","25.jpeg","26.jpeg","27.jpeg","28.jpeg","29.jpeg","3.jpeg","30.jpeg","31.jpeg","32.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","WhatsApp Image 2025-05-12 at 22.38.25.jpeg","WhatsApp Image 2025-05-13 at 22.27.34.jpeg","WhatsApp Image 2025-05-15 at 07.25.23.jpeg","WhatsApp Image 2025-05-15 at 23.04.38.jpeg"
  ];
  // Tomar las 4 imágenes más recientes
  const galleryImages = imageFiles.slice().reverse().slice(0, 4).map((file) => `src/uploads/galery/${file}`);
  const ArrowPrev = (props: any) => (
    <button 
      {...props}
      className="absolute left-0 top-1/2 z-50 -translate-y-1/2 transform bg-black/30 p-4 text-3xl text-white transition-all hover:bg-black/50 md:block"
      aria-label="Anterior"
    >
      ‹
    </button>
  );

  const ArrowNext = (props: any) => (
    <button 
      {...props}
      className="absolute right-0 top-1/2 z-50 -translate-y-1/2 transform bg-black/30 p-4 text-3xl text-white transition-all hover:bg-black/50 md:block"
      aria-label="Siguiente"
    >
      ›
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  // Estado del modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Handlers para abrir/cerrar el modal
  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };
  

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Academia</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En ADECAM TRIGUEROS combinamos tradición marcial con metodología moderna.
            Ofrecemos formación integral en Kick Boxing y Jiujitsu Brasileño para
            todas las edades y niveles, fomentando disciplina, respeto y superación personal.
          </p>
        </div>

        <div className="mb-12">
          <Slider {...sliderSettings}>
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="px-2 cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Galeria ${index + 1}`}
                  className="rounded-lg shadow-md h-64 object-cover w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/gallery"
            className="btn-corporativo bg-gold text-black hover:bg-gold-dark px-8 py-3"
          >
            Ver Galería Completa
          </a>
          <a
            href="/instructors"
            className="btn-corporativo border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3"
          >
            Conoce a los Instructores
          </a>
        </div>

        {/* Nueva equipación ADECAM */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nueva Equipación</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Descubre nuestra nueva línea de equipación oficial con tecnología Dry-Fit,
            diseñada para máximo rendimiento y comodidad durante los entrenamientos.
          </p>
          <img 
            src="src/uploads/camisetas.png"
            alt="Nueva equipación ADECAM TRIGUEROS"
            className="rounded-lg shadow-md mx-auto mb-6 max-w-3xl w-full object-contain"
          />
          <a
            href="/contact"
            className="btn-corporativo bg-gold text-black hover:bg-gold-dark px-8 py-3 text-lg"
          >
            ¡RESERVA LA TUYA!
          </a>
        </div>
      </div>
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-300"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagen ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default SummarySection;