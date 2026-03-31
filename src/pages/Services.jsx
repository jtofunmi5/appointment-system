import React from "react";
import Emergency from "../component/Emergency";
import Navbar from "../ExternalComponent/Navbar";
import NeedHealp from "../ExternalComponent/NeedHelp";
import Footer from "../component/Footer";
import Take from "../component/Take";
import PrimaryCard from "../component/PrimaryCard";
import Card from "../component/Cards";
import serviceProvided from '../assets/servicesProvided.png'
import advanceClinical1 from '../assets/advanceClinical1.png'
import pcPone from '../assets/pcPone.png'
import advanceClinical2 from '../assets/advanceClinical2.png'
import pcPtwo from '../assets/pcPtwo.png'
import advanceClinical3 from '../assets/advanceClinical3.png'
import pcPthree from '../assets/pcPthree.png'

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
              `url(${serviceProvided})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-sans text-center">
            Services We Provide
          </h4>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PrimaryCard
            title="General Medical Consultations"
            text="Whether you need joint replacements or sports injury treatments, our skilled orthopedic surgeons and staff are here to help you on the path to recovery at General Hospital."
            link="Learn More"
            image={advanceClinical1}
          />

          <PrimaryCard
            title="Counseling & Mental Health Services"
            text="Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction."
            link="Learn More"
            image={pcPone}
          />

          <PrimaryCard
            title="Comprehensive Inpatient Care"
            text="Our team of experienced physicians provides comprehensive medical care for individuals and families."
            link="Learn More"
            image={advanceClinical2}     
           />

          <PrimaryCard
            title="Pathology & Advanced Diagnostics"
            text="Our team of experienced physicians provides comprehensive medical care for individuals and families."
            link="Learn More"
            image={pcPtwo}
             />

          <PrimaryCard
            title="Medical Imaging & Radiology"
            text="Our team of experienced physicians provides comprehensive medical care for individuals and families."
            link="Learn More"
            image={advanceClinical3}    
             />

          <PrimaryCard
            title="Internal Medicine & Chronic Care"
            text="Our team of experienced physicians provides comprehensive medical care for individuals and families."
            link="Learn More"
            image={pcPthree}   
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
  );
};

export default Services;
