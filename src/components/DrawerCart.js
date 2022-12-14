import {logDOM} from "@testing-library/react";
import CartCard from "./DrawerCard/CartCard";
import AppContext from "../AppContext";
import React from "react";

const DrawerCart = ({onClickDelete, onClickOverlay}) => {
    const {cartItems}=React.useContext(AppContext)

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
                        cartItems.map((item,index) => {
                        return (
                            <CartCard
                                key={index}
                                item={item}
                                onClickDelete={onClickDelete}
                            />
                        )
                    }) : <div className={'cartIsClear'}>
                            <h2>Корзина пуста</h2>
                            <button onClick={onClickOverlay}>Вернуться назад</button>
                        </div>
                    }

                </div>
                <ul className={'cartTotalBlock mb-20'}>
                    <li className={'d-flex mb-20'}>
                        <span>Итого:</span>
                        <div></div>
                        <b>21999р</b>
                    </li>
                    <li className={'d-flex'}>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>2000р</b>
                    </li>
                </ul>
                <img className={'createOrderButton button'} src="./img/btnCreateOrder.svg" alt="CreateOrder"/>

            </div>
        </div>
    )
}

export default DrawerCart;