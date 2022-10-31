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
                            key={index}
                            name={item.name}
                            price={item.price}
                            src={item.src}
                            onClickFavorite={() => removeFromFavoriteBack(item.id)}
                        />)
                }
            </div>
        </div>
    )
}
export default Favorite;