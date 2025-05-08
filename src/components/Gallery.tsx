import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = Array.from({ length: 31 }, (_, i) => ({
    src: `src/uploads/galery/${i + 1}.jpeg`,
    alt: `Foto de la galería número ${i + 1} en ADECAM TRIGUEROS`
  }));

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galería</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre nuestra academia y el ambiente de entrenamiento a través de estas imágenes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
              onClick={() => openModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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

export default Gallery;