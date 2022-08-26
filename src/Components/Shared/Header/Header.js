import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='title'><Link to="/">Funshion</Link></h1>
            <div className='navigation-bar'>
      <ul className='font-thin'>
       <li><Link to="/home">Home</Link> </li>
      <li><Link to="/about">About</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/pages">Pages</Link></li>
    <li><Link to="blog">Blog</Link></li>
    
    </ul>
            </div>
        </div>
    );
};

export default Header;