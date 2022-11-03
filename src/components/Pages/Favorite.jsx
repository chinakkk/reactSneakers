import Card from "../Card/Card";
import React from "react";

const Favorite = ({favorite=[],removeFromFavoriteBack}) => {
    return (
        <div className="content p-40">
            <h1>Избранное</h1>
            <div className={'d-flex flex-wrap'}>
                {
                    favorite
                    .map((item, index, obj) =>
                        <Card
                            isFavoriteProps={true}
                            key={index}
                            onClickFavoriteProps={() => removeFromFavoriteBack(item.id)}
                            {...item}
                        />)
                }
            </div>
        </div>
    )
}
export default Favorite;