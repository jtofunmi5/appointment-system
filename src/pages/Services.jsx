import React from 'react'
import Emergency from '../component/Emergency'
import Navbar from '../ExternalComponent/Navbar'
import NeedHealp from '../ExternalComponent/NeedHealp'
import Footer from '../component/Footer'
import Take from '../component/Take'
import PrimaryCard from '../component/PrimaryCard'
import Card from '../component/Cards'

const Services = () => {
  return (
    <div>
      <Emergency />
      <Navbar />

      <div className="w-full relative h-64 sm:h-80 md:h-[28rem]">
        <div
          className="bg-center bg-cover absolute inset-0"
          style={{
            backgroundImage:
              'url(https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/services-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-sans text-center">
            Condition We Treat
          </h4>
        </div>
      </div>

    
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PrimaryCard
            title="Orthopedics"
            text="Whether you need joint replacements or sports injury treatments, our skilled orthopedic surgeons and staff are here to help you on the path to recovery at General Hospital."
            link="Learn More"
            image="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-03.jpg"
          />

          <PrimaryCard
            title="Counseling"
            text="Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction."
            link="Learn More"
            image="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-04.jpg"
          />

          <PrimaryCard
            title="Dental"
            text="Our team of experienced physicians provides comprehensive medical care for individuals and families."
            link="Learn More"
            image="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/service-05.jpg"
          />
        </div>
      </div>

      <Take />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
        <Card
          title="Visitor Policy"
          description="General Hospital welcomes visitors with its visitor policy to ensure patient privacy."
          linkText="Learn More"
        />

        <Card
          title="Make an Appointment"
          description="Schedule an appointment with our top medical professionals at General Hospital through our online booking service."
          linkText="Contact Us"
        />

        <Card
          title="Find a Condition"
          description="Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital."
          linkText="Need Help"
        />
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mb-10">
        <Card
          title="Find a Doctor"
          description="Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields."
          linkText="Doctors Schedule"
        />

        <Card
          title="Make an Appointment"
          description="Schedule an appointment with our top medical professionals at General Hospital through our online booking service."
          linkText="Contact Us"
        />

        <Card
          title="Find a Condition"
          description="Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital."
          linkText="Need Help"
        />
      </div>

      <NeedHealp />
      <Footer />
    </div>
  )
}

export default Services
