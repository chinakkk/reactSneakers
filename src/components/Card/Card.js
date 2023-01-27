import React from "react";
import s from './Card.module.scss'
import AppContext from "../../AppContext";


const Card = ({
                  onClickPlusProps,
                  onClickFavoriteProps,
                  src,
                  name,
                  price,
                  inFavorite = false
              }) => {


    const {itemIsAddedCart, itemIsAddedFavorite, orderIsCreated} = React.useContext(AppContext)
    const [isAddedInFavorite, setIsAddedInFavorite] = React.useState(itemIsAddedFavorite(name))
    const onClickPlus = () => {
        onClickPlusProps()
    }

    const onClickFavorite = () => {
        onClickFavoriteProps()
        setIsAddedInFavorite(!isAddedInFavorite)
    }
    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img onClick={onClickFavorite}
                     src={`img/btnHeart${(inFavorite || isAddedInFavorite) ? '1' : '0'}.svg`}
                     alt="Like"/>
            </div>
            <img width={133} height={112} src={src} alt={'Sneakers'}/>
            <h5>{name}</h5>
            <div className={s.cardBottom}>
                <div className={s.price}>
                    <p>Цена</p>
                    <b>{price} р.</b>
                </div>
                <img
                    src={'img/btn' + ((itemIsAddedCart(name) && !orderIsCreated) ? 'Added' : 'Plus') + '.svg'}
                    onClick={onClickPlus}/>
            </div>

        </div>

    )
}

export default Card;


