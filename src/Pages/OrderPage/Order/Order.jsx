import s from './Order.module.scss'
import React from "react";
import OrderCard from "./OrderCard";



const Order = ({orderItem,orderId,onClickDeleteOrder}) => {
    return (
        <div className={s.order}>
            <div className={s.header}>
                <h2>Заказ №{orderId}</h2>
                <img onClick={() => {onClickDeleteOrder(orderId)}}
                     src="img/btnKrest.svg"
                     alt="Delete"/>

            </div>
            <div className={s.orderCards}>
                {orderItem.map((item, index) => {
                    return (
                        <OrderCard
                            key={index}
                            {...item}
                        />
                    )
                })}
            </div>


        </div>
    )
}
export default Order;