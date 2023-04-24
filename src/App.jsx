import ContentLoader from "react-content-loader";
import {logDOM} from "@testing-library/react";
import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import DrawerCart from "./components/DrawerCart/DrawerCart";
import Home from "./Pages/Home/Home";
import Favorite from "./Pages/Favorite/Favorite";
import OrderPage from "./Pages/OrderPage/OrderPage";
import s from "./App.module.scss"
import AppContext from "./AppContext";


function App() {
    const [favoriteItems, setFavoriteItems] = React.useState([])
    const [orderItems, setOrderItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [items, setItems] = React.useState([])
    const [searchInput, setSearchInput] = React.useState('')
    const [orderId, setOrderId] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(true)
    const [orderIsCreated, setOrderIsCreated] = React.useState(false)
    const [cartOpened, setCartOpened] = React.useState(false)


    React.useEffect(() => {
            const responded = async () => {

                try {
                    const [itemsRes, cartRes, favoriteRes, orderRes] = await Promise.all([
                        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/items'),
                        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/cart'),
                        axios.get('https://631a621adc236c0b1edd3f63.mockapi.io/favorite'),
                        axios.get('https://63da0275b28a3148f67cfe09.mockapi.io/order')
                    ])
                    setIsLoading(false)

                    setCartItems(cartRes.data)
                    setFavoriteItems(favoriteRes.data)
                    setItems(itemsRes.data)
                    setOrderItems(orderRes.data)
                    orderRes.data.length && setOrderId(Number(orderRes.data[orderRes.data.length - 1].id))
                } catch (error) {
                    alert('Не удалось отправить запросы')
                    console.error(error)
                }

            }
            responded()
        }

        , []
    )

    const onClickCreateOrder = async () => {
        try {
            if (cartItems.length) {
                setOrderId(orderItems < 1 ? 1 : Number(orderItems[orderItems.length - 1].id) + 1)
                setOrderIsCreated(true)

                const {data} = await axios.post(`https://63da0275b28a3148f67cfe09.mockapi.io/order`, {
                    items: [...cartItems]
                })
                setOrderItems(prevState => [...prevState, data])
                setCartItems([])
                for (let i = 0; i < cartItems.length; i++) {
                    await axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/cart/${cartItems[i].id}`)
                }
            }
        } catch (error) {
            alert('Не удалось создать заказ')
            console.error(error)

        }
    }
    const removeFromDrawerCart = async (id) => {

        try {
            setCartItems(prevState => [...prevState.filter(item => item.id !== id)])
            await axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/cart/${id}`)
        } catch (error) {
            alert('Не удалось удалить из корзины')
            console.error(error)

        }

    }

    const onClickAddToCart = async (item) => {
        try {
            const foundedItem = cartItems.find((cartItem) => cartItem.name === item.name)
            if (foundedItem) {
                axios.delete(`https://631a621adc236c0b1edd3f63.mockapi.io/cart/${foundedItem.id}`)
                setCartItems(prevState => [...prevState.filter(item => item.id !== foundedItem.id)])

            } else {
                setCartItems(prevState => [...prevState, item])
                const {data} = await axios.post(`https://631a621adc236c0b1edd3f63.mockapi.io/cart`, item)
                // setCartItems(prevState => [...prevState.slice(0, -1), data])
                setCartItems(prevState => [...prevState.map((cartItem) => {
                    if (cartItem.name===item.name)return data
                    return cartItem
                })])
            }
        } catch (error) {
            alert('Не удалось добавить в корзину')
            console.error(error)

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
            alert('Товар не добавился в Favorite')
            console.error(error)

        }

    }

    const itemIsAddedCart = (name) => {
        return cartItems.some((cartItem) => cartItem.name === name)
    }
    const itemIsAddedFavorite = (name) => {
        return favoriteItems.some((favoriteItem) => favoriteItem.name === name)
    }

    return (

        <AppContext.Provider value={{
            cartItems,
            favoriteItems,
            itemIsAddedCart,
            itemIsAddedFavorite,
            onClickAddToCart,
            orderIsCreated,
            setOrderIsCreated,
            orderItems,
            setOrderItems,
            setOrderId
        }}>

            <div className={s.wrapper}>
                <DrawerCart orderIsCreated={orderIsCreated}
                            orderId={orderId}
                            cartOpened={cartOpened}
                            onClickDelete={removeFromDrawerCart}
                            onClickCreateOrder={onClickCreateOrder}
                            onClickOverlay={() => {
                                setCartOpened(false)
                                setOrderIsCreated(false)
                            }
                            }
                />


                <Header onClickCart={() => setCartOpened(true)}
                        cartItems={cartItems}
                        orderIsCreated={orderIsCreated}
                />

                <Routes>
                    <Route path={"/"} element={

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
                    <Route path="/favorite" element={
                        <Favorite
                            onClickAddToFavorite={onClickAddToFavorite}
                            onClickAddToCart={onClickAddToCart}
                        />
                    }/>
                    <Route path={"/order"} element={
                        <OrderPage
                        />
                    }/>
                </Routes>
            </div>

        </AppContext.Provider>

    );
}

export default App;
