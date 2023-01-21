import Card from "../../components/Card/Card";
import React from "react";
import Massage from "../../components/Massage";
import axios from "axios";
import OrderCart from "./OrderCart";

const Order = ({onClickAddToFavorite, onClickAddToCart}) => {

    const [orderItems,setOrderItems]=React.useState([])

    React.useEffect(() => {
        (async () => {
            const orderRes=await axios.get('https://63c1bc2b376b9b2e648305db.mockapi.io/order')
            setOrderItems(orderRes.data)
        })()
    },[])
    return (
        <div className="content p-40">
            <h1>Все заказы</h1>
            <div className={'d-flex flex-wrap mt-30'}>
                {
                    orderItems.length>0?
                        orderItems.map((item, index, obj) => {
                                return (
                                    <OrderCart
                                        key={index}
                                        orderId={item.id}
                                        item={item.items}
                                    />
                                )
                            }
                        )
                        :
                        <Massage
                            imgSrc={"./img/emptyFavorite.png"}
                            title={'Заказов нет'}
                            text={'Вы еще не совершили заказ'}
                            onClickFunction={onClickAddToFavorite}
                        />

                }
            </div>
        </div>
    )
}
export default Order;