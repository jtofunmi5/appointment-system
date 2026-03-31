import React from 'react'
import Card from './Cards'

const Secondsection = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
        
        <Card 
          title='FIND A DOCTOR' 
          description='Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields.' 
          linkText='Doctors Schedule'  
        />
        
        <Card 
          title='Make an Appointment' 
          description='Schedule an appointment with our top medical professionals at General Hospital through our online booking service.' 
          linkText='Contact Us'
        />
        
        <Card 
          title='Find a Condition' 
          description='Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital' 
          linkText='Need Help'
        />
        
      </div>
    </div>
  )
}

export default Secondsection