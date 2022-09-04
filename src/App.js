import Card from "./components/Card";


function App() {
    return (
        <div className="wrapper clear">
            <header className={'d-flex justify-between p-40'}>
                <div className={'headerLeft d-flex align-center'}>
                    <img className={'mr-20'} width={'40px'} height={'40px'} src={'./img/logo.png'}/>
                    <div className={'headerInfo'}>
                        <h3 className={'text-uppercase'}>React Sneakers</h3>
                        <p className={'opacity-5'}>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className={'headerRight d-flex align-center '}>
                    <li className={'mr-30 d-flex align-center'}>
                        <img className={'mr-10'} width={'18px'} height={'18px'} src="./img/card.svg"/>

                        <span>1205p</span>
                    </li>
                    <li className={'d-flex align-center'}>
                        <img width={'18px'} height={'18px'} src={'./img/user.svg'}/>
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className={'d-flex align-center mb-40 justify-between mr-25 ml-25'}>
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock d-flex align-center">
                        <img className={'mr-5'} src="/img/search.svg" alt="Search"/>
                        <input placeholder={'Поиск...'}/>
                    </div>
                </div>
                <div style={{display:'none'}} className="overlay">
                    <div className="drawer d-flex flex-column">
                        <div className={'d-flex justify-between'}>
                            <h2 className={'mb-30 mt-30'}>Корзина</h2>
                            <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>

                        </div>
                        <div className="cartItems">
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg" alt="Sneakers"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                                    <b>12999</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                        </div>
                        <ul className={'cartTotalBlock mb-20'}>
                            <li className={'d-flex mb-20'}>
                                <span>Итого:</span>
                                <div></div>
                                <b>21999р</b>
                            </li>
                            <li className={'d-flex'}>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>2000р</b>
                            </li>
                        </ul>
                        <img className={'createOrderButton button'} src="./img/btnCreateOrder.svg" alt="CreateOrder"/>

                    </div>
                </div>
                <div className={'d-flex justify-around mb-40'}>
                    <Card sale={'12999'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/1.jpg'}/>
                    <Card sale={'14000'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/2.jpg'}/>
                    <Card sale={'15499'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/3.jpg'}/>
                    <Card sale={'10000'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/4.jpg'}/>
                    <Card sale={'10000'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/4.jpg'}/>
                    <Card sale={'10000'} nameSneakers={'Мужские Кроссовки Nike Blazer Mid Suede'} linkSneakers={'./img/sneakers/4.jpg'}/>
                </div>



            </div>
        </div>
    );
}

export default App;
