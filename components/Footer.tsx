import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-yellow-600 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p className="font-heading text-yellow-500 text-lg mb-2">Deco Flights</p>
        <p className="text-sm">
          &copy; {currentYear} Deco Flights Mockup. All rights reserved (not really, it's a mockup!).
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="#" legacyBehavior>
            <a className="hover:text-yellow-400 transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:text-yellow-400 transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:text-yellow-400 transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 