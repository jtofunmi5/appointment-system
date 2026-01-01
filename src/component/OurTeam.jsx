import React from 'react'

const PrimaryCard = ({ title, text, image }) => (
  <div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
    <img src={image} alt={title} className='w-full h-64 object-cover' />
    <div className='p-6 space-y-2'>
      <h3 className='font-bold text-xl'>{title}</h3>
      <p className='text-gray-600'>{text}</p>
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
        <PrimaryCard title='Floyd Miles' text='Director of Operations' image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/team-skip-01.jpg' />
        <PrimaryCard title='Jacob Jones' text='Medical or HEALTH Services Manager' image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/team-skip-02.jpg'/>
        <PrimaryCard title='Devon Lane' text='Medical Manager' image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/team-skip-04.jpg' />
        <PrimaryCard title='Courtney Henry' text='Assistant Admissions Director' image='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/team-skip-03.jpg'/>
    </div>
</div>
  )
}

export default OurTeam