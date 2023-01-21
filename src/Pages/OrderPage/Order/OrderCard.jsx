import React from "react";
import style from '../../../components/Card/Card.module.scss'


const OrderCard = ({
                       src,
                       name,
                       price
                   }) => {


    return (
        <div className={style.card}>

            <img width={133} height={112} src={src} alt={'Sneakers'}/>
            <h5>{name}</h5>
            <div className={style.cardBottom + ` d-flex justify-between align-center`}>
                <div className={'d-flex flex-column'}>
                    <p>Цена</p>
                    <b>{price} р.</b>
                </div>
            </div>

        </div>

    )
}

export default OrderCard;


