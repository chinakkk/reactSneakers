import React from "react";
import Card from "../../components/Card/Card";
import SkeletCard from "../../components/Card/SkeletCard";
import s from './Home.module.scss'
const Home = ({
                  searchInput,
                  setSearchInput,
                  items,
                  onClickAddToFavorite,
                  onClickAddToCart,
                  favoriteItems,
                  isLoading
              }) => {


    const renderItems = () => {
        const filterItems = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
        return (isLoading ? ([...Array(8)].map((value,index) =>
                <SkeletCard
                    key={index}
                />
            )
        ) : (
            filterItems
                .map((item, index) =>
                    <Card
                        {...item}
                        key={index}
                        onClickFavoriteProps={() => onClickAddToFavorite(item)}
                        onClickPlusProps={() => onClickAddToCart(item)}
                        isLoading={isLoading}
                    />
                )))
    }


    return (
        <div className={s.content}>
            <div className={s.search}>
                <h1>{searchInput ? `Поиск по запросу: "${searchInput}"` : "Все кроссовки"}</h1>
                <div className={s.searchBlock}>
                    <img src="img/search.svg" alt="Search"/>
                    <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)}
                           placeholder={'Поиск...'}/>
                    {searchInput && <img onClick={() => setSearchInput('')} className={s.searchButton}
                                         src={'img/btnKrest.svg'}/>}
                </div>
            </div>

            <div className={s.items}>
                {renderItems()}
            </div>
        </div>
    )
}
export default Home;