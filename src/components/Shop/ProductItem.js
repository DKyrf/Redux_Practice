import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import {itemsActions} from  "../../store/itemsSlice"
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const { _id, title, price, description } = props;

  const dispathFn = useDispatch(); 

  const handleAdd = () => {
    const data = {
      _id,
      name: title,
      amount: 1,
      price,
      description
    }

    dispathFn(itemsActions.addOrder(data))

  };


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
