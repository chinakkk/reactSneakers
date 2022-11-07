import Card from "../Card/Card";
import React from "react";

const Favorite = ({favoriteItems = [], onClickAddToFavorite, onClickAddToCart}) => {
    return (
        <div className="content p-40">
            <h1>Избранное</h1>
            <div className={'d-flex flex-wrap'}>
                {
                    favoriteItems
                        .map((item, index, obj) => {
                                return (
                                    <Card
                                        addedInFavorite
                                        key={index}
                                        onClickFavoriteProps={() => onClickAddToFavorite(item, true)}
                                        onClickPlusProps={() => onClickAddToCart(item)}
                                        {...item}
                                    />)
                            }
                        )


                }
            </div>
        </div>
    )
}
export default Favorite;