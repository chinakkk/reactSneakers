const DrawerCart = ({onClickOverlay, cartItems=[]}) => {
    return (
        <div className="overlay d-flex">
            <div className={'cartGray'} onClick={onClickOverlay}></div>
            <div className="drawer d-flex flex-column">
                <div className={'d-flex justify-between'}>
                    <h2 className={'mb-30 mt-30'}>Корзина</h2>
                    <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"
                         onClick={onClickOverlay}/>
                </div>
                <div className="cartItems">
                    {cartItems.map((item) => {
                        return (
                            <div className={'cartItem d-flex align-center'}>
                                <img className={'mb-20 mr-20'} height={70} width={70} src={item.src}
                                     alt="SneakersCard"/>
                                <div>
                                    <p className={'mb-5 mr-20'}>{item.name}</p>
                                    <b>{item.price} руб.</b>
                                </div>

                                <img className={'button cartRemoveButton'} src="./img/btnKrest.svg" alt="Krest"/>
                            </div>
                        )
                    })}
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