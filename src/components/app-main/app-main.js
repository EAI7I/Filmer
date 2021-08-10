import React from 'react';
import './app-main.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

function Main() {

    return (
        <div className='main'>
            <div className="header">
                <div className="header__logo">
                    <Link to='/enter'><img src={logo} alt='logo'/></Link>
                </div>
                <div></div>
                <div className="header__lang">
                    <button className="header_button__language" onClick={openLang} > Русский </button>
                    <div className='header__lang_en'><p>English</p></div>
                </div>
                <div className="header__button">
                    <button className="header_button btn"><Link to='/films'>НАЖМИ</Link></button>
                </div>
            </div>
            <div className='main__description'>
                <div className='main__description-level1'>
                    <h1>Фильмы, сериалы и многое другое без ограничений.</h1>
                </div>
                <div className='main__description-level2'>
                    <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
                </div>
                <div className='main__description-level3'>
                    <h3>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</h3>
                </div>
                <div className='main__description-form'>
                    <input placeholder="Адрес электронной почты" />
                    <button>Начать смотреть {'>'} </button>
                </div>
            </div>
            <div className='separation'/>
        </div>
    )
}

const openLang = () => {
    const lang = document.querySelector('.header__lang_en');
    lang.classList.toggle('show');
}

export default Main;