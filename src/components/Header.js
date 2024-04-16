import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
       
        <h1 class="text-2xl font-bold">Harshit's Todo App</h1>
        <nav>
            <ul class="flex space-x-4">
                <Link to = '/'><li className="hover:text-gray-300">Home</li></Link>
                <Link to = '/about'><li className="hover:text-gray-300">About</li></Link>
                <Link to = '/contact'><li className="hover:text-gray-300">Contact</li></Link>
            </ul>
        </nav>
    </div>
</header>

  )
}

export default Header;
