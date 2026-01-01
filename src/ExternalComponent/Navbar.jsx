import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../component/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-2xl bg-white">
      <div className="flex justify-between items-center p-6">
        <img
          src="https://jbsgerontologycentre.com/wp-content/uploads/2024/10/jbs_logo.png"
          alt="jbsLogo"
          className="h-10 md:h-12"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm">
          <Link to='/'>
            <li className='font-semibold hover:text-blue-700 cursor-pointer'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='font-semibold hover:text-blue-700 cursor-pointer'>About Us</li>
          </Link>
          <Link to='/contact'>
            <li className='font-semibold hover:text-blue-700 cursor-pointer'>Contact</li>
          </Link>
          <Link to='/services'>
            <li className='font-semibold hover:text-blue-700 cursor-pointer'>Services</li>
          </Link>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block text-xs">
          <Button body='Book Appointment' />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <ul className="flex flex-col space-y-1 p-4">
            <Link to='/' onClick={toggleMenu}>
              <li className='font-semibold hover:text-blue-700 hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                Home
              </li>
            </Link>
            <Link to='/about' onClick={toggleMenu}>
              <li className='font-semibold hover:text-blue-700 hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                About Us
              </li>
            </Link>
            <Link to='/contact' onClick={toggleMenu}>
              <li className='font-semibold hover:text-blue-700 hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                Contact
              </li>
            </Link>
            <Link to='/services' onClick={toggleMenu}>
              <li className='font-semibold hover:text-blue-700 hover:bg-gray-50 p-3 rounded-lg transition-colors'>
                Services
              </li>
            </Link>
          </ul>
          <div className="p-4 pt-2">
            <Button body='Book Appointment' />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;