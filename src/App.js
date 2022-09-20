import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";

// [
//     {name: 'Мужские Кроссовки Nike Air Max 270', price: 12000, src: './img/sneakers/1.jpg'},
//     {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8500, src: './img/sneakers/2.jpg'},
//     {name: 'Мужские Кроссовки Adidas Full Lox', price: 3000, src: './img/sneakers/3.jpg'},
//     {name: 'Мужские Кроссовки Puma Like Pyma', price: 1999, src: './img/sneakers/4.jpg'},
//     {name: 'Мужские Кроссовки abibas none name', price: 1999, src: './img/sneakers/5.jpg'},
//     {name: 'Мужские Кроссовки Puma Like dd', price: 1999, src: './img/sneakers/6.jpg'},
//     {name: 'Мужские Кроссовки Puma Like S102', price: 1999, src: './img/sneakers/7.jpg'},
//     {name: 'Мужские Кроссовки Xiaomi', price: 1999, src: './img/sneakers/8.jpg'},
//
// ]

function App() {
    const [cartOpened, setCartOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://631a621adc236c0b1edd3f63.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(json => {
                return setItems(json)
            })

    }, [])

    const addToCart = (item) => {
        setCartItems(
            cartItems.find((cartItem) => cartItem.name === item.name)
                ? prevState => [...prevState.filter((cartItem) => cartItem.name !== item.name)]
                : prevState => [...prevState, item]
        )
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <DrawerCart cartItems={cartItems} onClickOverlay={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className={'d-flex align-center mb-40 justify-between mr-25 ml-25'}>
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock d-flex align-center">
                        <img className={'mr-5'} src="/img/search.svg" alt="Search"/>
                        <input placeholder={'Поиск...'}/>
                    </div>
                </div>

                <div className={'d-flex flex-wrap'}>
                    {items.map(({name, price, src}, obj) =>
                        <Card name={name}
                              price={price}
                              src={src}
                              onClickFavorite={() => console.log('favorite')}
                              onClickPlus={() => addToCart({name, price, src})}
                        />)
                    }

                </div>

            </div>
        </div>

    );
}

export default App;
