import React from 'react';
import './Card.css';



const Card = (props) => {
    return (
        <div className="card custom__card">
            <div className='card__img__container'>
                <img src={props.image} className="card__img__top" alt="..." />
                <p className='card__footer'>
                    <small className='footer__copyright'>Powered by HTML.COM</small>
                </p>
            </div>
            <div className="card__body">
                <p className="card__text">{props.text}</p>
                <div className='card__button__container'>
                    <a href="/" className="btn btn--primary">READ MORE</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
