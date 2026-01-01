import React from 'react';
import Button from './Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";

const Transforming = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/home-bg.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-8 space-y-4 sm:space-y-5 md:space-y-6 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl">
          Transforming Lives Through <br className="hidden sm:block" /> Excellence In Health Care
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl lg:max-w-2xl">
          We are committed to providing exceptional patient care and promoting wellness in our community.
        </p>
        <div className="pt-2">
          <Button body='Book Appointment' />
        </div>
      </div>

      {/* Contact Info Footer */}
      <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 text-white text-xs sm:text-sm md:text-base">
          
          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-base sm:text-lg flex-shrink-0" />
            <p className="line-clamp-1">1234 Washington Ave. Manchester, Kentucky 39495</p>
          </div>

          {/* Phone */}
          <div className='flex items-center space-x-2'>
            <IoIosCall className="text-base sm:text-lg flex-shrink-0" />
            <p>(+234) 807 390 3035</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Transforming;