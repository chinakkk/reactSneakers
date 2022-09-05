import Card from "./components/Card";
import Header from "./components/Header";
import DrawerCart from "./components/DrawerCart";

const arr=[
    {name:'Мужские Кроссовки Nike Air Max 270', price:12000, src:'./img/sneakers/1.jpg'},
    {name:'Мужские Кроссовки Nike Blazer Mid Suede', price:8500, src:'./img/sneakers/2.jpg'},
    {name:'Мужские Кроссовки Adidas Full Lox', price:3000, src:'./img/sneakers/3.jpg'},
    {name:'Мужские Кроссовки Puma Like Pyma', price:1999, src:'./img/sneakers/4.jpg'},

]


function App() {
    return (
        <div className="wrapper clear">
            <DrawerCart/>
            <Header/>
            <div className="content p-40">
                <div className={'d-flex align-center mb-40 justify-between mr-25 ml-25'}>
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock d-flex align-center">
                        <img className={'mr-5'} src="/img/search.svg" alt="Search"/>
                        <input placeholder={'Поиск...'}/>
                    </div>
                </div>
                <div className={'d-flex justify-between'}>
                    {arr.map(({name,price, src})=><Card name={name} price={price} src={src}/>)}

                </div>

            </div>
        </div>
    );
}

export default App;
