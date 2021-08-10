import React, {Component} from 'react';
import './app-menu.css';

export default class MenuBlock extends Component {

    constructor(props) {
        super(props);
        this.Open = this.Open.bind(this); 
    }

    Open(id) {

        const {info} = this.props;
        const index = info.findIndex(el => el.id === id);
        const classNames = document.querySelectorAll('.answer-block');
        if(index == id){
            classNames[index].classList.toggle('show');
            info.forEach((item,i) => {
                if(item.answer != info[index].answer) {
                    classNames[i].classList.remove('show'); 
                }
            })
        }        
    }

    render() {
        const {info} = this.props;
        const items = info.map((item) => {

            return(
                <>
                    <div className='question-block'><p>{item.question}</p><button onClick={() => {this.Open(item.id)}}>+</button></div>
                    <div className='answer-block hidden'><p>{item.answer}</p></div>  
                </>
            )
        })

        return (
            <>
                <div className='menu__menu-block'>
                    <div className='menu__answer-block'>
                        <div className='heading'>Распространенные вопросы</div>
                        {items}
                    </div>
                </div>
                <hr/>   
            </>
        )
    }
}


