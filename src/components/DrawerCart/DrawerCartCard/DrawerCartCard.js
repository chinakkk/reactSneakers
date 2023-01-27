import s from './DrawerCartCard.module.scss'

const DrawerCartCard = ({item, onClickDelete}) => {

    const onClickCross = (item) => {
        onClickDelete(item.id)

    }

    return (
        <div className={s.cartItem}>
            <img className={s.sneakers} height={70} width={70} src={item.src}
                 alt="SneakersCard"/>
            <div>
                <p>{item.name}</p>
                <b>{item.price} руб.</b>
            </div>

            <img onClick={() => onClickCross(item)}
                 className={s.cartRemoveButton}
                 src="img/btnKrest.svg"
                 alt="Delete"/>
        </div>
    )
}
export default DrawerCartCard;