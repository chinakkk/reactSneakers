const Header = (props) => {
    return (
        <header className={'d-flex justify-between p-40'}>
            <div className={'headerLeft d-flex align-center'}>
                <img className={'mr-20'} width={'40px'} height={'40px'} src={'./img/logo.png'} alt={'Logo'}/>
                <div className={'headerInfo'}>
                    <h3 className={'text-uppercase'}>React Sneakers</h3>
                    <p className={'opacity-5'}>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={'headerRight d-flex align-center mr-30'}>
                <li className={'mr-20 d-flex align-center cu-p'} onClick={props.onClickCart}>
                    <img className={'mr-10 button'} width={'18px'} height={'18px'} src={"./img/card.svg"} alt={'Card'}/>
                    <span>1205p</span>
                </li>
                <li className={'d-flex align-center mr-15'}>
                    <img className={'button'} width={'18px'} height={'18px'} src={'./img/favorite.svg'}
                         alt={'Favorite'}/>
                </li>

                <li className={'d-flex align-center'}>
                    <img className={'button'} width={'18px'} height={'18px'} src={'./img/user.svg'} alt={'User'}/>
                </li>

            </ul>
        </header>
    )
}

export default Header;


