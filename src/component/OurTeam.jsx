import React from 'react'
import ourTeam1 from '../assets/ourTeam1.png'
import ourTeam2 from '../assets/ourTeam2.png'
import ourTeam3 from '../assets/ourTeam3.png'
import ourTeam4 from '../assets/ourTeam4.png'

const PrimaryCard = ({ title, text, image }) => (
  <div className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100'>
    {/* Aspect Ratio Container: ensures all images are exactly the same size */}
    <div className='aspect-[3/4] overflow-hidden'>
      <img 
        src={image} 
        alt={title} 
        className='w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500' 
      />
    </div>
    
    <div className='p-5 text-center bg-white'>
      <h3 className='font-bold text-lg text-gray-800 group-hover:text-teal-600 transition-colors'>
        {title}
      </h3>
      <p className='text-sm text-gray-500 font-medium mt-1'>{text}</p>
    </div>
  </div>
)

const OurTeam = () => {
  return (
<div className='bg-teal-50 space-y-12 md:space-y-20 p-6 md:p-10 lg:p-20'>
    <div className='flex flex-col items-center px-4 md:p-10'>
        <span className='font-normal text-gray-400 text-base md:text-lg'>OUR TEAM</span>
        <p className='font-bold text-3xl md:text-5xl lg:text-6xl text-center'>Meet Our Professionals</p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10'>
        <PrimaryCard title='Floyd Miles' 
        text='Director of Operations' 
        image={ourTeam1} />

        <PrimaryCard title='Jacob Jones'
         text='Medical or HEALTH Services Manager'
          image={ourTeam2} />

        <PrimaryCard title='Devon Lane' 
        text='Medical Manager' 
        image={ourTeam3} />

        <PrimaryCard title='Courtney Henry'
         text='Assistant Admissions Director'
          image={ourTeam4} />
    </div>
</div>
  )
}

export default OurTeam