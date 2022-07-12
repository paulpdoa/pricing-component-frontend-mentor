import { useContext } from 'react';
import { PriceContext } from '../helpers/PriceContext';

const Card = ({title,price: monthlyPrice,storage,users,sendUpTo}) => {

  const { isToggled } = useContext(PriceContext);

  const annualPrice = monthlyPrice.slice(0,2) + "9" + monthlyPrice.slice(2);
    
  return (
    <div className={ `${title === 'Professional' ? 'card-pro' : title === 'Basic' ? 'card-basic' : 'card-master'} card--custom `}>
        <div className="card__content">
            <h1 className="card__title">{title}</h1>
            <h2 className="card__price"><span className="card__dollar">$</span>{ isToggled ? monthlyPrice : annualPrice }</h2>
            <span className="card__storage">{storage}</span>
            <span className="card__users">{users}</span>
            <span className="card__sendUp">{sendUpTo}</span>
            <button className={ title !== 'Professional' ? 'card__btn' : 'card__btn-pro' }>Learn More</button>
        </div>
    </div>
  )
}

export default Card