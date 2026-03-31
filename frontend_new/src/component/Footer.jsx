 import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='pb-16 bg-gray-100'>
      
      {/* Main Footer Content */}
      <div className='flex flex-col lg:flex-row pt-20 px-6 lg:px-10 justify-between items-start gap-10'>

        {/* Logo + Contact */}
        <div className='space-y-2'>
          <img
            className='w-36'
            src='https://jbsgerontologycentre.com/wp-content/uploads/2024/10/jbs_logo.png'
            alt='logo'
          />
          <p>1234 Washington Ave. Manchester,<br />Kentucky 39495.</p>
          <p>(406) 555-0120</p>
        </div>

        {/* Patient Info */}
        <ul className='flex flex-col space-y-1 cursor-pointer'>
          <h1 className='font-semibold'>PATIENT INFORMATION</h1>
          <li>Find a Doctor</li>
          <li>Health Library</li>
          <li>Clinical Trials</li>
          <li>Newsroom</li>
        </ul>

        {/* Research & Education */}
        <ul className='flex flex-col space-y-2 cursor-pointer'>
          <h1 className='font-semibold'>RESEARCH & EDUCATION</h1>
         <li>School of Medicine</li>
          <li>Research</li>
          <li>School of Nursing</li>
        </ul>

        {/* Health Professionals */}
        <ul className='flex flex-col space-y-2 cursor-pointer'>
          <h1 className='font-semibold'>FOR HEALTH PROFESSIONALS</h1>
          <li>Transfer a patient</li>
          <li>Mount Sinai Connect</li>
          <li>Nursing</li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col lg:flex-row justify-between items-center px-6 lg:px-10 pt-10 space-y-4 lg:space-y-0'>
        <div className='flex items-center space-x-2'>
          <BiCopyright />
          <p className='text-sm'>2025 JBS GERONTOLOGY HOSPITAL</p>
        </div>
        <p className='text-sm cursor-pointer'>PRIVACY POLICY</p>
      </div>
    </div>
  )
}

export default Footer
