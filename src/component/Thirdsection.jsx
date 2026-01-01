import React from 'react'
import Button from './Button'

const Thirdsection = () => {
  return (
   <div className='bg-blue-50 '>
    <div className='flex flex-col items-center space-y-4 mt-10 p-10'>
      <p className='font-semibold text-gray-500'>ABOUT US</p>
      <span className='font-bold text-6xl'>We always delivers expertise <br/> and compassion in every interaction.</span>
    </div>

    <div className='flex space-x-6 p-10'>
      <img className='rounded-xl' src='https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/aboutus.jpg' alt='logo'/>
      <div className='mt-20 space-y-10'>
        <p className='font-bold'>Experience exceptional medical care at the General Hospital, a luxury hotel designed to provide comfortable and personalized healthcare services to its guests.</p>
        <p>JBS Hospital is a luxury medical facility that provides top-notch medical care to its patients. With state-of-the-art technologies and experienced medical professionals, we offer personalized treatment options for all kinds of medical conditions. Our facility is equipped with comfortable and spacious rooms.</p>
        <p>"Experience top-notch medical care at General Hospital, where our expert team of doctors and modern facilities ensure your well-being. Rest easy in our luxurious accommodations and ease your worries."</p>
        <Button body='Read More' />
      </div>
    </div>
  </div>
  )
}

export default Thirdsection