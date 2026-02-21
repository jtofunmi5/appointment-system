import React from 'react'
import Navbar from '../ExternalComponent/Navbar';
import Emergency from '../component/Emergency';
import NeedHealp from '../ExternalComponent/NeedHealp';
import Footer from '../component/Footer';

const About = () => {
  return (
    <div>   
      <Emergency />
      <Navbar />

      {/* HERO */}
      <div className="w-full relative h-64 sm:h-80 md:h-[28rem]">
        <div
          className="bg-center bg-cover absolute inset-0"
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/736x/6a/59/ae/6a59aebd11fd08d28aae4ce742ea1678.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-sans">
            About Us
          </h4>
        </div>
      </div>

      {/* INTRO TEXT */}
      <div className="leading-relaxed font-normal text-base sm:text-lg md:text-2xl lg:text-3xl px-4 sm:px-8 md:px-10 lg:px-16 py-6">
        <h4>
          We are committed to providing exceptional patient care and promoting
          wellness in our community. We offer personalized care plans tailored
          to meet the unique needs of each patient.
        </h4>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center px-4 sm:px-8 md:px-12 py-6">
        <img
          className="w-full max-w-5xl border rounded-3xl"
          src="https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/about-us.jpg"
          alt="hospital"
        />
      </div>

      {/* DESCRIPTION SECTIONS */}
      <div className="space-y-6 px-4 sm:px-8 md:px-12 lg:px-20 py-6 text-sm sm:text-base md:text-lg leading-relaxed">
        <p>
          General Hospital is a luxury medical facility that is dedicated to
          providing the highest quality medical care to its patients...
        </p>

        <p>
          Welcome to the General Hospital, a luxury medical facility that offers
          world-class medical services to ensure the well-being of our
          patients...
        </p>
      </div>

      
      <div className="bg-cyan-50 space-y-20 pt-10 pb-10">
        <div className="border-b-2 border-gray-700 ">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 p-6 md:p-10 text-gray-700">
            <p className="font-semibold">VISION</p>
            <p className="leading-relaxed md:max-w-3xl">
              To be the premier healthcare provider, recognized for exceptional
              patient-centered care, medical innovation, and positive community
              impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-start p-6 md:p-10 text-gray-700 justify-between ">
          <p className="font-semibold">MISSION</p>
          <p className="leading-relaxed md:max-w-4xl">
            Our mission is to improve and transform lives through compassionate and comprehensive healthcare services. We are committed to delivering exceptional medical care, promoting wellness, and advancing medical knowledge through innovation and research. We strive to be the trusted partner in our community's health and well-being.
          </p>
        </div>
      </div>

      < NeedHealp />
      <Footer />
    </div>
  )
}

export default About;
