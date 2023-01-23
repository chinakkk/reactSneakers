import {Link} from 'react-router-dom';


const Header = ({cartItems, onClickCart,orderIsCreated}) => {

    const cartPrice = cartItems.reduce((sum, item) => {
        return sum + Number(item.price)
    }, 0)

    return (
        <header className={'d-flex justify-between p-40'}>
            <Link to='/'>
                <div className={'headerLeft d-flex align-center'}>
                    <img className={'mr-20'} width={'40px'} height={'40px'} src={'./img/logo.png'} alt={'Logo'}/>
                    <div className={'headerInfo'}>
                        <h3 className={'text-uppercase'}>React Sneakers</h3>
                        <p className={'opacity-5'}>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className={'headerRight d-flex align-center mr-30'}>
                <li className={'mr-20 d-flex align-center cu-p'} onClick={onClickCart}>
                    <img className={'mr-10 button'} width={'18px'} height={'18px'} src={"./img/card.svg"} alt={'Card'}/>
                    <span>{!orderIsCreated?cartPrice:'0'} руб.</span>
                </li>

                <li className={'d-flex align-center mr-15'}>
                    <Link to='/favorite'>
                        <img className={'button d-flex align-center'} width={'18px'} height={'18px'}
                             src={'./img/favorite.svg'}
                             alt={'Favorite.jsx'}/>
                    </Link>

                </li>

                <li className={'d-flex align-center'}>
                    <Link to={'/order'}>
                        <img className={'button'} width={'18px'} height={'18px'} src={'./img/user.svg'} alt={'User'}/>
                    </Link>
                </li>

            </ul>
        </header>
    )
}

export default Header;


