import React from "react";
import style from './Card.module.scss'

const Card = ({
                  onClickPlusProps,
                  onClickFavoriteProps,
                  src,
                  name,
                  price,
                  addedInFavorite = false,
                  addedInCart = false,
              }) => {


    const [isAdded, setIsAdded] = React.useState(addedInCart)
    const [isFavorite, setIsFavorite] = React.useState(addedInFavorite)
    const onClickPlus = () => {
        onClickPlusProps()
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onClickFavoriteProps()
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img onClick={onClickFavorite} src={`./img/btnHeart${isFavorite ? '1' : '0'}.svg`}
                     alt="Like"/>
            </div>
            <img width={133} height={112} src={src} alt={'Sneakers'}/>
            <h5>{name}</h5>
            <div className={style.cardBottom + ` d-flex justify-between align-center`}>
                <div className={'d-flex flex-column'}>
                    <p>Цена</p>
                    <b>{price} р.</b>
                </div>
                <img className={'d-flex align-center m-5 cu-p'}
                     src={'./img/btn' + (isAdded ? 'Added' : 'Plus') + '.svg'} onClick={onClickPlus}/>
            </div>
        </div>

    )
}

export default Card;


