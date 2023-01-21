import React from "react";
import Massage from "../../components/Massage";
import axios from "axios";
import Order from "./Order/Order";

const OrderPage = () => {

    const [orderItems,setOrderItems]=React.useState([])

    React.useEffect(() => {
        (async () => {
            try {
                const orderRes=await axios.get('https://63c1bc2b376b9b2e648305db.mockapi.io/order')
                setOrderItems(orderRes.data)
            }
            catch (error){
                alert('Не удалось загрузить заказы')
            }

        })()
    },[])

    const onClickDeleteOrder = (id) => {
        axios.delete(`https://63c1bc2b376b9b2e648305db.mockapi.io/order/${id}`)
        setOrderItems(prevState => [...prevState.filter(item => item.id !== id)])
    }
    return (
        <div className="content p-40">
            <h1>Все заказы</h1>
            <div className={'d-flex flex-wrap mt-30'}>
                {
                    orderItems.length>0?
                        orderItems.map((item, index) => {
                                return (
                                    <Order
                                        onClickDeleteOrder={onClickDeleteOrder}
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
                            onClickFunction={() => {}}
                        />

                }
            </div>
        </div>
    )
}
export default OrderPage;