import React from "react";
import s from '../../../components/Card/Card.module.scss'



const OrderCard = ({
                       src,
                       name,
                       price
                   }) => {


    return (
        <div className={s.card}>
            <img width={133} height={112} src={src} alt={'Sneakers'}/>
            <h5>{name}</h5>
            <div className={s.cardBottom}>
                <div className={s.price}>
                    <p>Цена</p>
                    <b>{price} р.</b>
                </div>
            </div>

        </div>

    )
}

export default OrderCard;


