import Card from "../components/Card/Card";
import ContentLoader from "react-content-loader";

import React from "react";

const Home = ({
                  searchInput,
                  setSearchInput,
                  items,
                  onClickAddToFavorite,
                  onClickAddToCart,
                  cartItems,
                  favoriteItems,
                  isLoading
              }) => {

    const renderItems = () => {
        const filterItems = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
        return ((isLoading?[...Array(4)]:filterItems)
            .map((item, index) =>
                    <Card
                        {...item}
                        key={index}
                        onClickFavoriteProps={() => onClickAddToFavorite(item)}
                        onClickPlusProps={() => onClickAddToCart(item)}
                        addedInFavorite={favoriteItems.some((favoriteItem) => favoriteItem.name === item.name)}
                        addedInCart={cartItems.some((cartItem) => cartItem.name === item.name)}
                        isLoading={isLoading}
                    />

        ))
//(isLoading ? [...Array(4)] :
    }
    return (
        <div className="content p-40">
            <div className={'d-flex align-center mb-40 justify-between mr-25 ml-25'}>
                <h1>{searchInput ? `Поиск по запросу: "${searchInput}"` : "Все кроссовки"}</h1>
                <div className="searchBlock d-flex align-center">
                    <img className={'mr-5'} src="/img/search.svg" alt="Search"/>
                    <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)}
                           placeholder={'Поиск...'}/>
                    {searchInput && <img onClick={() => setSearchInput('')} className={'button searchButton'}
                                         src={'/img/btnKrest.svg'}/>}
                </div>
            </div>

            <div className={'d-flex flex-wrap'}>
                {renderItems()}
            </div>
        </div>
    )
}
export default Home;