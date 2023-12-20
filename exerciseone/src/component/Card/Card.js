import React from 'react';
import './Card.css';
import image1 from '../../assets/01.jpg';


const Card = () => {
    return (
        <div className="card custom__card">
            <div className='card__img__container'>
                <img src={image1} className="card__img__top" alt="..." />
                <p className='card__footer'>
                    <small className='footer__copyright'>Powered by HTML.COM</small>
                </p>
            </div>
            <div className="card__body">
                <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>
                <div className='card__button__container'>
                    <a href="/" className="btn btn--primary">READ MORE</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
