import classes from './CartButton.module.css';
import { buttonActions } from '../../store/buttonSlice';
import { useSelector, useDispatch } from 'react-redux';

const CartButton = (props) => {
  
  const dispatchFn = useDispatch()
  const numOfOrders = useSelector(state => state.items.numberOfOrders);  

  const toogleCart = () => {
    console.log("toggled");
    dispatchFn(buttonActions.toggleIt())
  }

  return (
    <button className={classes.button} onClick={toogleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{numOfOrders}</span>
    </button>
  );
};

export default CartButton;
