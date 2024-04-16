import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Harshit's Todo App</h1>
        <nav>
          <ul className="flex space-x-4">
            <Link to='/'><li className="hover:text-gray-300">Home</li></Link>
            <Link to='/about'><li className="hover:text-gray-300">About</li></Link>
            <Link to='/contact'><li className="hover:text-gray-300">Contact</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
