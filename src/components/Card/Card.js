import React from "react";
import style from './Card.module.scss'
import AppContext from "../../AppContext";


const Card = ({
                  onClickPlusProps,
                  onClickFavoriteProps,
                  src,
                  name,
                  price,
                  addedInFavorite = false,
                  inFavorite = false
              }) => {


    const {itemIsAdded} = React.useContext(AppContext)
    const [addedInCart, setAddedInCart] = React.useState(itemIsAdded(name))
    const [isAddedInFavorite, setIsAddedInFavorite] = React.useState(addedInFavorite)
    const onClickPlus = () => {
        onClickPlusProps()
        setAddedInCart(!addedInCart)
    }

    const onClickFavorite = () => {
        onClickFavoriteProps()
        setIsAddedInFavorite(!isAddedInFavorite)
    }
    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img onClick={onClickFavorite}
                     src={`./img/btnHeart${(inFavorite || isAddedInFavorite) ? '1' : '0'}.svg`}
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
                     src={'./img/btn' + ((itemIsAdded(name)) ? 'Added' : 'Plus') + '.svg'} onClick={onClickPlus}/>
            </div>

        </div>

    )
}

export default Card;


