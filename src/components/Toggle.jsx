import { useContext } from 'react';
import { PriceContext } from '../helpers/PriceContext';
const Toggle = () => {

  const { isToggled,setIsToggled } = useContext(PriceContext);

  return (
    <div className="toggle">
        <span className="toggle__subscription">Annually</span>
        <div className="switch">
            <div onClick={() => setIsToggled(!isToggled)} className={ isToggled ? "switch__circle__monthly" : "switch__circle__annual"}></div>
        </div>
        <span className="toggle__subscription">Monthly</span>
    </div>
  )
}

export default Toggle