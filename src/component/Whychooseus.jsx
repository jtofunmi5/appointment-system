import React from 'react'

const Whychooseus = () => {
  return (
 <div className='flex flex-col lg:flex-row pt-10 px-5 md:px-10 items-center justify-between gap-10 lg:gap-16 pb-20'>
     <div className='space-y-8 lg:space-y-10 w-full lg:w-1/2'>
        <div className='space-y-4 lg:space-y-7'>
            <span className='font-bold text-4xl md:text-5xl lg:text-6xl block'>Why Choose Us</span>
            <p className='font-light text-base md:text-lg'>Our Goal is to provide Excellent In-Patient, and Out-patient Healthcare for the Older age group while promoting and facilitating Healthy Aging Initiatives for middle-aged Adults</p>
        </div>
           
        <div className='space-y-3 border-b-2 pb-8 lg:pb-10'>
              <span className='font-semibold text-lg md:text-xl block'>20+ years of services</span>
            <p className='font-light text-base'>General Hospital boasts over 20 years of exceptional healthcare services, making it a top choice in the industry.</p>
        </div>
            
        <div className='space-y-3 border-b-2 pb-8 lg:pb-10'>
            <span className='font-semibold text-lg md:text-xl block'>Leading health provider</span>
            <p className='font-light text-base'>JBS Gerontology - a leading healthcare provider delivering top-notch medical care.</p>
        </div>
            
        <div className='space-y-3'>
             <span className='font-semibold text-lg md:text-xl block'>Patient-centric care</span>
            <p className='font-light text-base'>Jbs Gerontology - patient-centric care is at the core of our values.</p>
        </div>
            
    </div>

        <div className='w-full lg:w-1/2'>
            <img className='rounded-3xl w-full h-auto object-cover' src='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/why-us.jpg' alt='Medical staff consultation' />
        </div>
</div>
  )
}

export default Whychooseus