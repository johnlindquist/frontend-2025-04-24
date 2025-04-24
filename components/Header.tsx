import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa'; // Import a user icon

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 shadow-lg border-b-2 border-yellow-600">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-4xl text-yellow-400 font-heading cursor-pointer">Deco Flights</a>
        </Link>
        <nav className="hidden md:flex space-x-6 font-heading text-lg">
          <Link href="/#" legacyBehavior>
            <a className="text-yellow-400 hover:text-white border-b-2 border-transparent hover:border-yellow-400 transition">Flights</a>
          </Link>
          <Link href="/#hotels" legacyBehavior> {/* Assuming links might target sections or future pages */}
            <a className="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-yellow-400 transition">Hotels</a>
          </Link>
          <Link href="/#packages" legacyBehavior>
            <a className="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-yellow-400 transition">Packages</a>
          </Link>
        </nav>
        <div className="text-yellow-400">
          <FaUserCircle size={32} /> {/* Use React Icon, adjusted size */} 
        </div>
      </div>
    </header>
  );
};

export default Header; 