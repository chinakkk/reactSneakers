import style from './OrderCart.module.scss'
import Card from "../../components/Card/Card";
import React from "react";
import AppContext from "../../AppContext";


const OrderCart = ({item,orderId}) => {
    const {onClickAddToFavorite,onClickAddToCart,favoriteItems}=React.useContext(AppContext)
    return (
        <div className={style.orderCard}>
            <h2>Заказ №{orderId}</h2>
            <div className={'d-flex flex-wrap'}>
                {item.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            addedInFavorite={favoriteItems.some((favoriteItem) => favoriteItem.name === item.name)}
                            onClickFavoriteProps={() => onClickAddToFavorite(item, false)}
                            onClickPlusProps={() => onClickAddToCart(item)}
                            {...item}
                        />
                    )
                })}
            </div>


        </div>
    )
}
export default OrderCart;