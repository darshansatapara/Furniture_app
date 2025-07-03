import React, { useState, useEffect } from "react";
import {
  X,
  ZoomIn,
  Heart,
  Eye,
  Star,
} from "lucide-react";

const GalleryItem = ({ image, title, description, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Top Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
            <Heart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-500/10 to-transparent rounded-full translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-500" />
    </div>
  );
};

export default GalleryItem;
