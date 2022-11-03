import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";
import Home from "./components/Pages/Home";
import Favorite from "./components/Pages/Favorite";
import {logDOM} from "@testing-library/react";

function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [searchInput, setSearchInput] = React.useState('')
    const [items, setItems] = React.useState([])
    const [favorite, setFavoriteItems] = React.useState([])


    React.useEffect(() => {

        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })
        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/favorite').then(res => {
            setFavoriteItems(res.data)
        })


    }, [])

    const onClickAddToCart = (item) => {

        if (cartItems.find((cartItem) => cartItem.name === item.name)) {
            removeFromCartBack(cartItems.find((cartItem) => cartItem.name === item.name).id)
        } else {
            axios.post(`https://631a621adc236c0b1edd3f63.mockapi.io/cart`, item)
            setCartItems(prevState => [...prevState, item])
        }
        console.log(cartItems)
    }
    // const onClickAddToCart = (item) => {
    //     axios.post('https://631a621adc236c0b1edd3f63.mockapi.io/cart', item)
    //     setCartItems(
    //         cartItems.find((cartItem) => cartItem.name === item.name)
    //             ? prevState => [...prevState.filter((cartItem) => cartItem.name !== item.name)]
    //             : prevState => [...prevState, item]
    //     )
    // }
    const addToFavoriteView = (item) => {
        axios.post('https://631a621adc236c0b1edd3f63.mockapi.io/favorite', item)
        setFavoriteItems(
            favorite.find((favoriteItem) => favoriteItem === item.name)
                ? prevState => [...prevState.filter((favoriteItem) => item.name !== favoriteItem)]
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
        setFavoriteItems(prevState => [prevState.filter(item => item.id !== id)])
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <DrawerCart cartItems={cartItems}
                                       onClickDelete={removeFromCartBack}
                                       onClickOverlay={() => setCartOpened(false)}
            />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <Routes>
                <Route path={'/'} element={
                    <Home
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        items={items}
                        addToFavoriteView={addToFavoriteView}
                        addToCartView={onClickAddToCart}
                    />
                }/>
                <Route path='/favorite' element={
                    <Favorite
                        favorite={favorite}
                        removeFromFavoriteBack={removeFromFavoriteBack}

                    />
                }/>
            </Routes>


        </div>

    );
}

export default App;
