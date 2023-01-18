import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../AppContext";
import Massage from "../components/Massage";

const Favorite = ({onClickAddToFavorite, onClickAddToCart}) => {
    const {favoriteItems} = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <h1>Избранное</h1>
            <div className={'d-flex flex-wrap mt-30'}>
                {
                    favoriteItems.length>0? favoriteItems
                        .map((item, index, obj) => {
                                return (
                                    <Card
                                        addedInFavorite
                                        key={index}
                                        onClickFavoriteProps={() => onClickAddToFavorite(item, false)}
                                        onClickPlusProps={() => onClickAddToCart(item)}
                                        {...item}
                                        inFavorite={true}
                                    />)
                            }
                        )
                        :
                        <Massage
                            imgSrc={"./img/emptyFavorite.png"}
                            title={'Закладок нет'}
                            text={'Вы ничего не добавили в закладки'}
                            onClickFunction={onClickAddToFavorite}
                        />


                }
            </div>
        </div>
    )
}
export default Favorite;