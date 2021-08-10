import React from 'react';
import './navBar.css';
import logo from '../app-main/logo.png';
import avatar from '../navBar/avatar.png';

const NavBar = () => {
 return (
     <>
        <div className='navBar'>
            <div className='navBar__content'>
                <div className='navBar__content-logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <div className='navBar__content-wrapper'>
                    <div className='navigation'><a href='#'>Мое кино</a></div>
                    <div className='navigation'><a href='#'>Магазин</a></div>
                    <div className='navigation'><a href='#'>Буду смотреть</a></div>
                    <div className='navigation'><a href='#'>Покупки</a></div>
                </div>
                <div className='navBar__content-user'>
                    <div className='user-tv'><a href='#'><img src='https://avatars.mds.yandex.net/get-bunker/118781/1bed25da2e176ee99658eafff85ebe9a80ca0601/orig' alt='TV'/>Установить на ТВ</a></div>
                    <div className='user'><img src={avatar} alt='avatar'/></div>
                </div>
            </div>
        </div>
     </>
 )
}

export default NavBar;
