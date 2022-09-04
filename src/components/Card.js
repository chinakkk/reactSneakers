import {forwardRef} from "react";


const Card=(props)=>{
    return (
        <div>
            <div className="card d-block">
                <div className={'favorite'}>
                    <img src="./img/btnHeart0.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src={props.linkSneakers} alt={'Sneakers'}/>
                <h5>{props.nameSneakers}</h5>
                <div className={'cardBottom d-flex justify-between align-center'}>
                    <div className={'d-flex flex-column'}>
                        <p>Цена</p>
                        <b>{props.sale} р.</b>
                    </div>
                    <img className={'d-flex align-center m-5'}
                         src="./img/btnPlus.svg"/>
                </div>
            </div>

        </div>
    )
}

export default Card;


