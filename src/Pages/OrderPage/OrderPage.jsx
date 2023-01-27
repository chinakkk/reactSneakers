import React from "react";
import axios from "axios";
import AppContext from "../../AppContext";
import Message from "../../components/Message/Message";
import Order from "./Order/Order";
import s from './OrderPage.module.scss'

const OrderPage = () => {

    const {orderItems, setOrderItems, setOrderId} = React.useContext(AppContext)


    const onClickDeleteOrder = (id) => {
        try {
            axios.delete(`https://63c1bc2b376b9b2e648305db.mockapi.io/order/${id}`)
            setOrderItems(prevState => [...prevState.filter(item => item.id !== id)])
            setOrderId(prevState => prevState - 1)

        } catch (error) {
            alert('Не удалось удалить заказ')
        }

    }
    return (
        <div className="content p-40">
            <h1>Все заказы</h1>
            <div className={s.orders}>
                {
                    orderItems.length > 0 ?
                        orderItems.map((orderItem, index) => {
                                return (
                                    <Order
                                        onClickDeleteOrder={onClickDeleteOrder}
                                        key={index}
                                        orderId={orderItem.id}
                                        orderItem={orderItem.items}
                                    />
                                )
                            }
                        )
                        :
                        <Message
                            imgSrc={"img/emptyFavorite.png"}
                            title={'Заказов нет'}
                            text={'Вы еще не совершили заказ'}
                            onClickFunction={() => {
                            }}
                        />

                }
            </div>
        </div>
    )
}
export default OrderPage;