import {logDOM} from "@testing-library/react";
import DrawerCartCard from "./DrawerCartCard";
import AppContext from "../../AppContext";
import React from "react";
import Massage from "../Massage";

const DrawerCart = ({onClickDelete, onClickOverlay, onClickCreateOrder, orderIsCreated, orderId}) => {
    const {cartItems} = React.useContext(AppContext)
    const cartPrice = cartItems.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    return (
        <div className="overlay d-flex">
            <div className={'cartGray'} onClick={onClickOverlay}></div>
            <div className="drawer d-flex flex-column">
                <div className={'d-flex justify-between'}>
                    <h2 className={'mb-30 mt-30'}>Корзина</h2>
                    <img className={'button cartRemoveButton'}
                         src="./img/btnKrest.svg" alt="Krest"
                         onClick={onClickOverlay}/>
                </div>
                <div className="cartItems">

                    {cartItems.length > 0 ?
                        cartItems.map((item, index) => {
                            return (
                                <DrawerCartCard
                                    key={index}
                                    item={item}
                                    onClickDelete={onClickDelete}
                                />
                            )
                        }) : <div className={'mt-50'}>
                            <Massage
                                imgSrc={orderIsCreated ? './img/orderCreate.png' : "./img/emptyCart.png"}
                                title={orderIsCreated ? 'Заказ оформлен' : 'Корзина пустая'}
                                text={orderIsCreated ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                                onClickFunction={onClickOverlay}
                            />
                        </div>

                    }

                </div>
                <ul className={'cartTotalBlock mb-20'}>
                    <li className={'d-flex mb-20'}>
                        <span>Итого:</span>
                        <div></div>
                        <b>{cartPrice} руб</b>
                    </li>
                    <li className={'d-flex'}>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{Math.round(cartPrice*0.05)} руб</b>
                    </li>
                </ul>
                <img onClick={onClickCreateOrder} className={'createOrderButton button'} src="./img/btnCreateOrder.svg"
                     alt="CreateOrder"/>

            </div>
        </div>
    )
}

export default DrawerCart;