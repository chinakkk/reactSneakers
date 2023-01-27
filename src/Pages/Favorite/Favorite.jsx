import Card from "../../components/Card/Card";
import React from "react";
import AppContext from "../../AppContext";
import Message from "../../components/Message/Message";
import s from './Favorite.module.scss'

const Favorite = ({onClickAddToFavorite, onClickAddToCart}) => {
    const {favoriteItems} = React.useContext(AppContext)

    return (
        <div className={s.favoiteContent}>
            <h1>Избранное</h1>
            <div className={s.favoriteCard}>
                {
                    favoriteItems.length > 0 ? favoriteItems
                            .map((item, index, obj) => {
                                    return (

                                        <Card
                                            key={index}
                                            onClickFavoriteProps={() => onClickAddToFavorite(item, false)}
                                            onClickPlusProps={() => onClickAddToCart(item)}
                                            {...item}
                                            inFavorite={true}
                                        />)
                                }
                            )
                        :
                        <Message
                            imgSrc={"img/emptyFavorite.png"}
                            title={'Закладок нет'}
                            text={'Вы ничего не добавили в закладки'}
                            onClickFunction={() => {
                            }}
                        />
                }
            </div>
        </div>
    )
}
export default Favorite;