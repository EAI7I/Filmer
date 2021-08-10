import React from 'react';
import './app-menu.css';

const MenuItem = ({title,info,content}) => {
    return (
        <>
            <div className='main__menu-item'>
                <div className='main__menu-content'>
                    <div className='menu-info'><h1>{title}</h1><h2>{info}</h2></div>
                    <div className='menu-image'><img src={content} alt='content'/></div>
                </div>
                <hr/>
            </div> 
        </>
    )
};

export default MenuItem;
