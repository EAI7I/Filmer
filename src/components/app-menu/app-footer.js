import React,{Component} from 'react';
import './app-footer.css';

export default class Footer extends Component {

    render = () => {
        const {footer} = this.props;
        const item = footer.map(el => {
            const {point1,point2,point3,point4} = el;
            return (
                <div className='footer-item1'>
                    <ul>
                        <li><a href='ggg'>{point1}</a></li>
                        <li><a href='ggg'>{point2}</a></li>
                        <li><a href='ggg'>{point3}</a></li>
                        <li><a href='ggg'>{point4}</a></li>                       
                    </ul>
                </div>   
            )
        })

        return(
            <>
                <div className='footer'>
                    <div className='footer-item'>
                        <div className='footer-text'>Есть вопросы? Звоните по номеру 8-800-100-9669</div>
                        {item}
                    </div>
                </div>
            </>
        )
    }  
}

