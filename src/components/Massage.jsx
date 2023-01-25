import React from "react";


const Massage = ({imgSrc, title, text, onClickFunction}) => {
    return (
        <div className={'cartIsClear'}>
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
            <h4>{text}</h4>
            <button onClick={onClickFunction}>Вернуться назад</button>
        </div>
    )
}
export default Massage;