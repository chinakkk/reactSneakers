import Card from "../Card/Card";
import React from "react";

const Home = ({
                  searchInput,
                  setSearchInput,
                  items,
                  addToFavoriteView,
                  addToCartView
              }) => {
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
                {items
                    .filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map(({name, price, src}, index, obj) =>
                        <Card
                            key={index}
                            name={name}
                            price={price}
                            src={src}
                            onClickFavorite={() => addToFavoriteView({name, price, src})}
                            onClickPlus={() => addToCartView({name, price, src})}
                        />)
                }
            </div>
        </div>
    )
}
export default Home;