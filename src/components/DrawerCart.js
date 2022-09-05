

const DrawerCart =()=>{
    return(
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <div className={'d-flex justify-between'}>
                    <h2 className={'mb-30 mt-30'}>Корзина</h2>
                    <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>

                </div>
                <div className="cartItems">
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
                        <div>
                            <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999</b>
                        </div>

                        <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                    </div>
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
                        <div>
                            <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999</b>
                        </div>

                        <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                    </div>
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
                        <div>
                            <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999</b>
                        </div>

                        <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                    </div>
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
                        <div>
                            <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999</b>
                        </div>

                        <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                    </div>
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
                        <div>
                            <p className={'mb-5 mr-20'}>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999</b>
                        </div>

                        <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                    </div>
                    <div className={'cartItem d-flex align-center'}>
                        <img className={'mb-20 mr-20'} height={70} width={70} src="./img/sneakers/1.jpg"
                             alt="SneakersCard"/>
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
    )
}

export default DrawerCart;