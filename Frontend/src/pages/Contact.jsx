import React from 'react'
import Emergency from '../component/Emergency';
import Navbar from '../ExternalComponent/Navbar';
import Form_Card from '../ExternalComponent/Form_Card'
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <div>
      <Emergency />
      <Navbar />

   
      <div className="w-full relative h-64 sm:h-80 md:h-[28rem]">
        <div
          className="bg-center bg-cover absolute inset-0"
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/1200x/00/0f/12/000f1297367b6a2f5f2218fc9112c985.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-sans">
            Contact
          </h4>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-start px-4 sm:px-6 md:px-10 py-10 max-w-7xl mx-auto">
        {/* LEFT INFO */}
        <div className="space-y-10 w-full lg:w-1/2 text-sm sm:text-base">
          <div className="space-y-2">
            <h1 className="font-bold text-lg sm:text-xl">General Information</h1>
            <p>1234 Washington Ave. Manchester, Kentucky 39495.</p>
            <p className="text-blue-800">(406) 555-0120</p>
          </div>

          <div className="space-y-2">
            <h1 className="font-bold text-lg sm:text-xl">Find a Doctor</h1>
            <p>
              For help finding a doctor, please search for a specific doctor or
              call:
            </p>
            <p className="text-blue-800">(406) 555-0120</p>
          </div>

          <div className="space-y-2">
            <h1 className="font-bold text-lg sm:text-xl">Patient Relations</h1>
            <p>General Hospital Kentucky</p>
            <p className="text-blue-800">(406) 555-0120</p>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2">
          <Form_Card />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;
