import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


NProgress.configure({ showSpinner: false, speed: 500 });

const AppointmentLoader = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* 1. Header Skeleton */}
      <div className="space-y-3 animate-pulse">
        <div className="h-8 w-64 bg-gray-200 rounded-lg"></div>
        <div className="h-4 w-40 bg-gray-100 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 2. Left Side: Calendar Skeleton (7 columns) */}
        <div className="md:col-span-2 space-y-6 animate-pulse">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-32 bg-gray-200 rounded"></div>
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
           
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-50 rounded w-full mb-2"></div>
            ))}
        
            {[...Array(31)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-xl w-full"></div>
            ))}
          </div>
        </div>

      
        <div className="space-y-6 animate-pulse">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 bg-blue-50/50 rounded-xl border border-blue-100 w-full"></div>
            ))}
          </div>
          
          
          <div className="h-14 w-full bg-gray-300 rounded-2xl mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentLoader;