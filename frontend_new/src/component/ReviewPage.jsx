import React from 'react'

const Review = ({circle, name, review, text}) => {
  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-lg bg-white p-4 md:p-6 space-y-3 md:space-y-4">
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center bg-red-500 text-white text-base md:text-lg font-semibold rounded-full flex-shrink-0">
          {circle}
        </div>
        <div>
          <div className="text-gray-900 font-medium text-base md:text-lg">{name}</div>
        </div>
      </div>
      <div className="flex text-red-500 text-lg md:text-xl">{review}</div>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
       {text}
      </p>
    </div>
  );
}

const ReviewPage = () => {
  return (
<div className='pt-10 md:pt-20 px-5 md:px-10'>
    <div className='flex flex-col space-y-4 md:space-y-6 mb-10 md:mb-0 md:pl-10'>
        <p className='font-semibold text-gray-400 text-sm md:text-base'>PATIENT STORIES</p>
        <span className='font-semibold text-3xl md:text-4xl lg:text-5xl font-serif'>What Our Patients are Saying</span>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2 p-5 md:p-10 lg:p-20 gap-6 md:gap-10 lg:gap-20'>
        <Review circle='OF' name='Oloyede Flavour' review='⭐⭐⭐⭐' text='"I brought my mum here and we were treated with such kindness and professionalism. The nurses are attentive, and the facility is well-equipped. Highly recommend!"'/>
         <Review text='"From the moment I walked in, the staff made me feel at ease. The doctors took their time to explain everything clearly. Clean environment, fast service — truly a hospital that cares!"' review='⭐⭐⭐⭐⭐' circle='DJ' name='Donald Jessica' />
          <Review circle='AA' name='Adebisi Adedayo' review='⭐⭐⭐⭐⭐' text='"Exceptional service! The emergency team responded quickly and efficiently. I was admitted, treated, and discharged with complete confidence in their care."'/>
           <Review circle='BM' name='Bamidele Malik' review='⭐⭐⭐⭐' text='"This hospital combines modern technology with genuine compassion. Appointments run on time, and every member of staff was courteous and helpful throughout my stay."'/>
    </div>

 </div>
  )
}

export default ReviewPage