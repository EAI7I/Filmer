import React from"react";
import './content-item.css';

const ContentItem =({rec, title}) => {

    const filmsList = rec.map((item, i) => {
        return (
            <>
                <img src={item.img} alt='film-cover'/>
            </>
        )
    })

    return (
        <>
            <div className='movie'>
                <div className='movie__text'>
                    <h1>{title}</h1>
                </div>

                <div className='movie__cover'>
                        {filmsList}
                </div>
            </div>
        </>
    )

}

export default ContentItem;
