import React from 'react';
import './Header.css';


const Header = () => {

    return (
        <header className='header'>
            <h1 className='header__title'>Hello Developer!</h1>
            <p className='header__content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className='header__footer'>
                <small className='footer__copyright'>Powered by HTML.COM</small>
            </p>
        </header>
    );
};

export default Header;