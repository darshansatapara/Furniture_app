import React, { useState, useEffect } from "react";
import {
  X,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
} from "lucide-react";
import GalleryItem from "../components/GalleryItem";

const ImageModal = ({
  image,
  title,
  description,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 w-full h-full flex items-center justify-center">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] animate-modal-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Living Room Set",
      description:
        "Contemporary sofa and coffee table combination perfect for modern homes. Crafted with premium materials and attention to detail.",
      category: "sofa",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Bedroom Suite",
      description:
        "Elegant bedroom furniture set including bed frame, nightstands, and dresser. Designed for comfort and style.",
      category: "bed",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dining Table Collection",
      description:
        "Handcrafted dining table with matching chairs. Perfect for family gatherings and dinner parties.",
      category: "table",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Comfortable Armchair",
      description:
        "Ergonomic armchair with premium upholstery. Ideal for reading corners and relaxation spaces.",
      category: "sofa",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Walk-in Wardrobe",
      description:
        "Custom-built wardrobe with ample storage space. Organized sections for all your clothing needs.",
      category: "almari",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Office Desk Setup",
      description:
        "Professional office desk with storage drawers. Designed for productivity and organization.",
      category: "table",
    },
  ];

  const categories = [
    { id: "all", name: "All Items", count: galleryItems.length },
    {
      id: "sofa",
      name: "Sofas",
      count: galleryItems.filter((item) => item.category === "sofa").length,
    },
    {
      id: "bed",
      name: "Beds",
      count: galleryItems.filter((item) => item.category === "bed").length,
    },
    {
      id: "table",
      name: "Tables",
      count: galleryItems.filter((item) => item.category === "table").length,
    },
    {
      id: "almari",
      name: "Almari",
      count: galleryItems.filter((item) => item.category === "almari").length,
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="mx-auto px-4 pt-6 sm:px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          {/* Header */}
          <div className="text-center lg:text-left lg:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-4">
              Furniture Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Discover our exquisite collection of handcrafted furniture pieces,
              each telling a story of craftsmanship and design excellence.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex overflow-x-auto gap-3 py-2 px-1 w-full lg:w-auto">
            {categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`whitespace-nowrap px-5 py-2.5 text-sm md:text-base rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-orange-600 shadow-sm"
                }`}
              >
                {category.name}
                <span className="ml-1 text-xs md:text-sm opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GalleryItem
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => openModal(item, index)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 sm:py-24">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage?.image}
        isOpen={!!selectedImage}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
