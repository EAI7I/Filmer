import {React, Component} from 'react';
import './content.css';
import img1 from './slide1.jpg';
import img2 from './slide2.jpg';
import img3 from './slide3.jpg';
import play from './play.png';
import info from './info.png';
import bookmark from './bookmark.png';
import Switch from '../slider/slider';


export default class Content extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <>
                <div className='content'>
					<Switch slide1={img1} slide2={img2} slide3={img3}/>
					<div className='content__panel'>
						<div className='content__panel-btn'><button className='btn-play'><img src={play} alt='play' className='img-play'/> Смотреть фильм</button></div>
						<div className='content__panel-btn'><button className='btn-info'><img src={info} alt='information' className='img-info'/> О фильме</button></div>
						<div className='content__panel-btn'><button className='btn-bookmark'><img src={bookmark} alt='information' className='img-bookmark'/></button></div>
					</div>	
                    
                </div>
            </>
        )
    }

}
