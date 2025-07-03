import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Sparkles,
  Home,
  Sofa,
  Bed,
  Archive,
  Table,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

const CategoryCard = ({ title, image, icon: Icon, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-xl">
            <Icon className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

const HomeSection = () => {
  const categories = [
    {
      title: "Sofas",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Sofa,
      description: "Comfortable seating for every occasion",
    },
    {
      title: "Beds",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Bed,
      description: "Dreamy designs for restful nights",
    },
    {
      title: "Almari",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Archive,
      description: "Elegant storage solutions",
    },
    {
      title: "Tables",
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Table,
      description: "Functional beauty for dining & work",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Collections</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Furniture Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of handcrafted furniture, designed
              to elevate every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories?.map((cat, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard
                  title={cat.title}
                  image={cat.image}
                  icon={cat.icon}
                  description={cat.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
