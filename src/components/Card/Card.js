import {forwardRef} from "react";
import React from "react";
import style from './Card.module.scss'

const Card = ({
                  onClickPlusProps,
                  onClickFavoriteProps,
                  id,
                  src,
                  name,
                  price,
                  isFavoriteProps = false,
                  isAddedProps = false
              }) => {

    const [isAdded, setIsAdded] = React.useState(isAddedProps)
    const [isFavorite, setIsFavorite] = React.useState(isFavoriteProps)
    const onClickPlus = () => {
        onClickPlusProps()
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onClickFavoriteProps()
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={'mr-20 ml-20 mb-40'}>
            <div className={style.card}>
                <div className={style.favorite}>
                    <img onClick={onClickFavorite} src={`./img/btnHeart${isFavorite ? '1' : '0'}.svg`} alt="Like"/>
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

        </div>
    )
}

export default Card;


