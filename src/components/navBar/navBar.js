import React from 'react';
import './navBar.css';
import {Link} from 'react-router-dom';
import logo from '../app-main/logo.png';
import avatar from '../navBar/avatar.png';

const NavBar = () => {
 return (
     <>
        <div className='navBar'>
            <div className='navBar__content'>
                <div className='navBar__content-logo'>
                    <Link to='/enter'><img src={logo} alt='logo'></img></Link>
                </div>
                <div className='navBar__content-wrapper'>
                <div className='navigation'><Link to='/my-films'><p>Мое кино</p></Link></div>
                <div className='navigation'><Link to='/films'><p >Магазин</p></Link></div>
                    <div className='navigation'><p>Буду смотреть</p></div>
                    <div className='navigation'><p>Покупки</p></div>
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
