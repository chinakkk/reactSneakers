import React from "react";
import {Link} from 'react-router-dom';
import s from './Message.module.scss'


const Massage = ({imgSrc, title, text, onClickFunction}) => {
    return (
        <div className={s.cartIsClear}>
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
            <h4>{text}</h4>
            <Link to='/'>
                <button onClick={onClickFunction}>Вернуться назад</button>

            </Link>
        </div>
    )
}
export default Massage;