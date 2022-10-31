import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";

// [
//     {"name": "Мужские Кроссовки Nike Air Max 270", "price": "2000", "src": "./img/sneakers/1.jpg"},
//     {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": "8500", "src": "./img/sneakers/2.jpg"},
//     {"name": "Мужские Кроссовки Adidas Full Lox", "price": "3000", "src": "./img/sneakers/3.jpg"},
//     {"name": "Мужские Кроссовки Puma Like Pyma", "price": "1999", "src": "./img/sneakers/4.jpg"},
//     {"name": "Мужские Кроссовки abibas none name", "price": "1999", "src": "./img/sneakers/5.jpg"},
//     {"name": "Мужские Кроссовки Puma Like dd", "price": "1999", "src": "./img/sneakers/6.jpg"},
//     {"name": "Мужские Кроссовки Puma Like S102", "price": "1999", "src": "./img/sneakers/7.jpg"},
//     {"name": "Мужские Кроссовки Xiaomi", "price": "1999", "src": "./img/sneakers/8.jpg"},
// ]

function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [searchInput, setSearchInput] = React.useState('')
    const [items, setItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])


    React.useEffect(() => {

        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })


    }, [])

    const addToFavoriteView = (item) => {
        axios.post('https://631a621adc236c0b1edd3f63.mockapi.io/favorite', item)
        setFavorites(
            favorites.find((favoritesItem) => favoritesItem === item.name)
                ? prevState => [...prevState.filter((favoritesItem) => item.name !== favoritesItem)]
                : prevState => [...prevState, item]
        )
    }
    const addToCartView = (item) => {
        axios.post('https://631a621adc236c0b1edd3f63.mockapi.io/cart', item)
        setCartItems(
            cartItems.find((cartItem) => cartItem.name === item.name)
                ? prevState => [...prevState.filter((cartItem) => cartItem.name !== item.name)]
                : prevState => [...prevState, item]
        )
    }
    const removeFromCartBack = (id) => {
        axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/cart/${id}`)
        setCartItems(prevState => prevState.filter(item => item.id !== id))
    }
    //нужно запихать внутри окна фаворита
    const removeFromFavoriteBack = (id) => {
        axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/favorite/${id}`)
        setFavorites(prevState => [prevState.filter(item=>item.id!==id)])
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <DrawerCart cartItems={cartItems}
                                       onClickDelete={removeFromCartBack}
                                       onClickOverlay={() => setCartOpened(false)}
            />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <Routes>
                <Route path='favorite' element={<Card />}/>
            </Routes>

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
        </div>

    );
}

export default App;
