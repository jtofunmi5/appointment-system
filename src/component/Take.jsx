import React from 'react'
import Button from './Button'

const Take = () => {
  return (
    <div className='flex flex-col md:flex-row p-6 md:p-10 justify-between items-center gap-6 md:gap-4 bg-blue-500 py-12 md:pt-20 md:pb-20 animate-pulse'>
        <p className='font-bold text-2xl md:text-4xl text-white text-center md:text-left'>
            Take the first step towards better health. Book your appointment now!
        </p>

        <Button body='Book An Appointment' />
    </div>
  )
}

export default Take