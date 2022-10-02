import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../../store/itemsSlice';
import { Fragment, useEffect } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {

  const {_id, amount, price} = props.item;
  const data = { _id, total: amount * price };
  
  const orders = useSelector(state => state.items.orders);
  const thisOrder = orders.find(el => el._id === _id);
  
  useEffect(() => {
    fetch("https://salty-lowlands-62353.herokuapp.com/products", {
        method: "PATCH",
        body: JSON.stringify(
          {...thisOrder}
        ),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(data => console.log(data)).catch(err => console.log("ERR >>> ", err))
    
  }, [thisOrder])

  
  const dispatchFn = useDispatch()

  const addHandler = () => {
    dispatchFn(itemsActions.addOrder(data));

  }

  const removeHandler = () => {
    dispatchFn( itemsActions.removeOrder(data))
  }

  return (
  <Fragment>
    { amount !== 0 && <li className={classes.item}>
      <header>
        <h3>{thisOrder.title}</h3>
        <div className={classes.price}>
          ${Number(thisOrder.price * thisOrder.amount).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${thisOrder.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{thisOrder.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>}
  </Fragment>  
  )
};

export default CartItem;
