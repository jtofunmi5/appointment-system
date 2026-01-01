import React from 'react'
import PrimaryCard from './PrimaryCard'

const Primary = () => {
  return (
    <div className='container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
      
      {/* Header Section */}
      <div className='flex flex-col items-center space-y-2 sm:space-y-3 pt-4 sm:pt-6 md:pt-8 lg:pt-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
        <span className='text-slate-400 font-serif text-xs sm:text-sm md:text-base tracking-wider uppercase'>PRIMARY CARE</span>
        <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center px-4'>Medical Advancements</h2>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-all duration-300'>
        
        <div className='hover:scale-[1.02] transition-transform duration-300'>
          <PrimaryCard 
            title='Medical Advancements' 
            text='Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction' 
            link='Learn More' 
            image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-03.jpg'
          />
        </div>

        <div className='hover:scale-[1.02] transition-transform duration-300'>
          <PrimaryCard 
            title='Counselling' 
            text='Our qualified therapists provide personalized counselling services to help you overcome lifes challenges' 
            link='Learn More' 
            image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-04.jpg' 
          />
        </div>

        <div className='hover:scale-[1.02] transition-transform duration-300 md:col-span-2 lg:col-span-1'>
          <PrimaryCard 
            title='Family Medicine' 
            text='Our team of experienced physicians provides comprehensive medical care for individuals and families.' 
            link='Learn More' 
            image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-05.jpg'
          />
        </div>

      </div>
    </div>
  )
}

export default Primary