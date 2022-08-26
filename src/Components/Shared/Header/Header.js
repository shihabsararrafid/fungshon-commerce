import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='h-[75px] w-full flex'>
            <div className='flex lg:w-[80%] mx-auto justify-between items-center'>
            <h1 className='title text-3xl'><Link to="/">Funshion</Link></h1>
            <div className='navigation-bar '>
      <ul className='font-thin flex items-center'>
    <li className='mx-2'><Link to="/home">Home</Link> </li>
    <li className='mx-2'><Link to="/about">About</Link></li>
    <li className='mx-2'><Link to="/shop">Shop</Link></li>
    <li className='mx-2'><Link to="/pages">Pages</Link></li>
    <li className='mx-2'><Link to="blog">Blog</Link></li> 
    </ul>
    <ul className='icon'>


    </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;