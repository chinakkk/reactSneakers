import {forwardRef} from "react";
import React from "react";
import style from './Card.module.scss'

const Card=(props)=>{

    const [isAdded,setIsAdded]=React.useState(false)
    const onClickPlus=()=>{
        props.onClickPlus()
        setIsAdded(!isAdded)
    }

    return (
        <div className={'mr-20 ml-20 mb-40'}>
            <div className={style.card}>
                <div className={style.favorite} onClick={props.onClickFavorite}>
                    <img src="./img/btnHeart0.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src={props.src} alt={'Sneakers'}/>
                <h5>{props.name}</h5>
                <div className={style.cardBottom+` d-flex justify-between align-center`}>
                    <div className={'d-flex flex-column'}>
                        <p>Цена</p>
                        <b>{props.price} р.</b>
                    </div>
                    <img className={'d-flex align-center m-5 cu-p'} src={'./img/btn'+(isAdded?'Added':'Plus')+'.svg'} onClick={onClickPlus} />
                </div>
            </div>

        </div>
    )
}

export default Card;

