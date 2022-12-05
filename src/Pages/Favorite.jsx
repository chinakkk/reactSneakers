import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../AppContext";

const Favorite = ({onClickAddToFavorite, onClickAddToCart}) => {
    const {favoriteItems} = React.useContext(AppContext)

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