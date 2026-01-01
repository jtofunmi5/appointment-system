import React from 'react'

const NeedHelp = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://websitedemos.net/general-hospital-04/wp-content/uploads/sites/1482/2023/07/footer-bg.jpg)',
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-6 py-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <div className="space-y-4 lg:w-1/3">
          <span className="font-semibold font-serif text-3xl lg:text-5xl">Need help?</span>
          <p>
            If you're experiencing a medical emergency, <br /> call emergency
            services immediately.
          </p>
        </div>

        <div className="space-y-2 lg:w-1/3">
          <p className="font-semibold text-lg leading-7">
            For Enquiries, Please call <br /> (406) 555-0120
          </p>
        </div>
[18:21, 01/01/2026] ChatGPT: <div className="space-y-2 lg:w-1/3">
          <p className="font-semibold text-lg leading-7">
            For appointments<br /> (406) 555-0120
          </p>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp