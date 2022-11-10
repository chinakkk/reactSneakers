import {forwardRef} from "react";
import React from "react";
import style from './Card.module.scss'
import ContentLoader from "react-content-loader";

const Card = ({
                  onClickPlusProps,
                  onClickFavoriteProps,
                  id,
                  src,
                  name,
                  price,
                  addedInFavorite = false,
                  addedInCart = false,
                  isLoading
              }) => {

    console.log(addedInCart)
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
        <div className={'mr-20 ml-20 mb-40'}>
            <div className={style.card}>
                {
                    isLoading ?
                        <ContentLoader
                            speed={2}
                            width={180}
                            height={235}
                            viewBox="0 0 160 185"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="10" ry="10" width="150" height="90"/>
                            <rect x="0" y="105" rx="3" ry="3" width="150" height="15"/>
                            <rect x="0" y="125" rx="3" ry="3" width="93" height="15"/>
                            <rect x="0" y="155" rx="5" ry="5" width="80" height="25"/>
                            <rect x="118" y="148" rx="5" ry="5" width="32" height="32"/>
                        </ContentLoader>
                        :
                        <>
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
                        </>
                }
            </div>

        </div>
    )
}

export default Card;


