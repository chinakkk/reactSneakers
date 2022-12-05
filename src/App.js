import React from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import {logDOM} from "@testing-library/react";
import AppContext from "./AppContext";

function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [searchInput, setSearchInput] = React.useState('')
    const [items, setItems] = React.useState([])
    const [favoriteItems, setFavoriteItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(() => {
        const responded = async () => {


            const itemsRes = await axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/items')
            const cartRes = await axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/cart')
            const favoriteRes = await axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/favorite')
            setIsLoading(false)

            setCartItems(cartRes.data)
            setFavoriteItems(favoriteRes.data)
            setItems(itemsRes.data)

        }
        responded()
    }, [])

    const removeFromDrawerCart = (id) => {
        axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/cart/${id}`)
        setCartItems(prevState => [...prevState.filter(item => item.id !== id)])

    }

    const onClickAddToCart = async (item) => {

        try {
            const foundedItem = cartItems.find((cartItem) => cartItem.name === item.name)
            if (foundedItem) {
                removeFromDrawerCart(foundedItem.id)
            } else {
                const {data} = await axios.post(`https://631a621adc236c0b1edd3f63.mockapi.io/cart`, item)
                setCartItems(prevState => [...prevState, data])
            }
        } catch (error) {
            alert('Не удалось добавить в корзину')
        }
    }

    const onClickAddToFavorite = async (item, inFavoritePage = false) => {
        try {
            const foundedItem = favoriteItems.find((favoriteItem) => favoriteItem.name === item.name)
            if (foundedItem) {
                axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/favorite/${foundedItem.id}`)
                if (!inFavoritePage) setFavoriteItems(prevState => [...prevState.filter(item => item.name !== foundedItem.name)])

            } else {
                const {data} = await axios.post('https://631a621adc236c0b1edd3f63.mockapi.io/favorite', item)
                setFavoriteItems(prevState => [...prevState, data])
            }
        } catch (error) {
            alert('Товар не добавился в Favorites')
        }

    }
    return (

        <AppContext.Provider value={{cartItems,favoriteItems}}>
            <div className="wrapper clear">
                {cartOpened && <DrawerCart cartItems={cartItems}
                                           onClickDelete={removeFromDrawerCart}
                                           onClickOverlay={() => setCartOpened(false)}
                />}

                <Header onClickCart={() => setCartOpened(true)}/>

                <Routes>
                    <Route path={'/'} element={
                        <Home
                            cartItems={cartItems}
                            favoriteItems={favoriteItems}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            items={items}
                            onClickAddToFavorite={onClickAddToFavorite}
                            onClickAddToCart={onClickAddToCart}
                            isLoading={isLoading}
                        />
                    }/>
                    <Route path='/favorite' element={
                        <Favorite
                            favoriteItems={favoriteItems}
                            onClickAddToFavorite={onClickAddToFavorite}
                            onClickAddToCart={onClickAddToCart}
                        />
                    }/>
                </Routes>
            </div>

        </AppContext.Provider>

    );
}

export default App;
