import ContentLoader from "react-content-loader";
import React from "react";
import style from "./Card.module.scss";

const SkeletCard = () => {
    return (
        <div className={style.card}>
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
                <rect x="0" y="160" rx="5" ry="5" width="80" height="25"/>
                <rect x="118" y="160" rx="5" ry="5" width="25" height="25"/>
            </ContentLoader>

        </div>
    )
}
export default SkeletCard;