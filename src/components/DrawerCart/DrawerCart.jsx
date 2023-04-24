import {logDOM} from "@testing-library/react";
import DrawerCartCard from "./DrawerCartCard/DrawerCartCard";
import AppContext from "../../AppContext";
import React from "react";
import Message from "../Message/Message";
import s from "./DrawerCart.module.scss"

const DrawerCart = ({onClickDelete, onClickOverlay, onClickCreateOrder, orderIsCreated, orderId,cartOpened}) => {
    const {cartItems} = React.useContext(AppContext)
    const cartPrice = cartItems.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    return (
        <div className={`${s.overlay} ${cartOpened && s.overlayVisible}`} >
            <div className={s.cartGray} onClick={onClickOverlay}></div>
            <div className={`${s.drawer} ${cartOpened&&s.drawerVisible}`}>
                <div className={s.drawerHeader}>
                    <h2 >Корзина</h2>
                    <img className={s.cartRemoveButton}
                         src="img/btnKrest.svg" alt="Close"
                         onClick={onClickOverlay}/>
                </div>
                <div className={s.cartItems}>
                    {(cartItems.length > 0&&!orderIsCreated) ?
                        cartItems.map((item, index) => {
                            return (
                                <DrawerCartCard
                                    key={index}
                                    item={item}
                                    onClickDelete={onClickDelete}
                                />
                            )
                        }) : <div className={s.message}>
                            <Message
                                imgSrc={orderIsCreated ? 'img/orderCreate.png' : "img/emptyCart.png"}
                                title={orderIsCreated ? 'Заказ оформлен' : 'Корзина пустая'}
                                text={orderIsCreated ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                                onClickFunction={onClickOverlay}
                            />
                        </div>
                    }

                </div>
                <ul className={s.cartTotalBlock}>
                    <li className={s.resultPrice}>
                        <span>Итого:</span>
                        <div></div>
                        <b>{!orderIsCreated? cartPrice:'0'} руб</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{ !orderIsCreated? Math.round( cartPrice*0.05):'0'} руб</b>
                    </li>
                </ul>
                <img onClick={onClickCreateOrder} className={cartItems.length<1||orderIsCreated ? s.buttonIsOffline : s.createOrderButton}
                     src="img/btnCreateOrder.svg"
                     alt="CreateOrder"
                />

            </div>
        </div>
    )
}

export default DrawerCart;