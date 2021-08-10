import React from 'react';
import './app-menu.css';
import MenuItem from './app-menu-item';

const Menu = ({menu}) => {

    const elements = menu.map((item) => { 

        return (
            <MenuItem
                title={item.title}
                info={item.info}
                content={item.content}
            />
        )
    });

    return (
        <>
            {elements}
        </>
    )

}

export default Menu;