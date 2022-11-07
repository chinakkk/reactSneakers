const CartCard = ({item, onClickDelete}) => {
    return (
        <div className={'cartItem d-flex align-center'}>
            <img className={'mb-20 mr-20'} height={70} width={70} src={item.src}
                 alt="SneakersCard"/>
            <div>
                <p className={'mb-5 mr-20'}>{item.name}</p>
                <b>{item.price} руб.</b>
            </div>

            <img onClick={() => onClickDelete(item.id)}
                 className={'button cartRemoveButton'}
                 src="./img/btnKrest.svg"
                 alt="Krest"/>
        </div>
    )
}
export default CartCard;