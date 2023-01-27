import style from '../OrderPage.module.scss'
import Card from "../../../components/Card/Card";
import React from "react";
import AppContext from "../../../AppContext";
import OrderCard from "./OrderCard";


const Order = ({orderItem,orderId,onClickDeleteOrder}) => {
    return (
        <div className={style.orderCard}>
            <div className={style.header}>
                <h2>Заказ №{orderId}</h2>
                <img onClick={() => {onClickDeleteOrder(orderId)}}
                     className={'button cartRemoveButton mb-10'}
                     src="img/btnKrest.svg"
                     alt="Krest"/>

            </div>
            <div className={'d-flex flex-wrap'}>
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