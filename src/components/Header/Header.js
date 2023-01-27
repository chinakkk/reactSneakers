import {Link} from 'react-router-dom';
import s from "./Header.module.scss"

const Header = ({cartItems, onClickCart,orderIsCreated}) => {

    const cartPrice = cartItems.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    return (
        <header className={s.header}>
            <Link to='/'>
                <div className={s.headerLogo}>
                    <img width={'40px'} height={'40px'} src={'img/logo.png'} alt={'Logo'}/>
                    <div className={s.headerInfo}>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className={s.headerNavigation}>
                <li className={s.card} onClick={onClickCart}>
                    <img width={'18px'} height={'18px'} src={"img/card.svg"} alt={'Card'}/>
                    <span>{!orderIsCreated?cartPrice:'0'} руб.</span>
                </li>

                <li className={s.favorites}>
                    <Link to='/favorite'>
                        <img width={'18px'} height={'18px'}
                             src={'img/favorite.svg'}
                             alt={'Favorite.jsx'}/>
                    </Link>

                </li>

                <li className={s.order}>
                    <Link to={'/order'}>
                        <img width={'18px'} height={'18px'} src={'img/user.svg'} alt={'Order'}/>
                    </Link>
                </li>

            </ul>
        </header>
    )
}

export default Header;


