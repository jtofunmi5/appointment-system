import React from 'react';

const Card = ({ title, text, link, image }) => {
  return (
    <div className="relative w-80 h-[400px] bg-slate-50 rounded-2xl shadow-md overflow-hidden group flex flex-col items-center p-4 transition-all duration-500">
      
      {/* Animated Background Header */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-400 transition-all duration-500 group-hover:h-32 z-0" />

      {/* Image Container */}
      <div className="relative z-10 w-full h-44 mt-4 overflow-hidden rounded-xl shadow-lg bg-blue-gray-500 transition-transform duration-500 group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="z-10 mt-6 flex flex-col items-center gap-3 px-2 transition-all duration-500 group-hover:-translate-y-2">
        <span className="text-xl font-bold text-slate-800">{title}</span>
        <p className="text-sm text-slate-600 line-clamp-3">
          {text}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-auto mb-2 z-10">
        <a 
          href={link || "#"} 
          className="inline-block bg-blue-600 px-6 py-2 text-white text-sm font-medium rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-95"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default Card;