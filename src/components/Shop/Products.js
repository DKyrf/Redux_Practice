import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions } from '../../store/itemsSlice';
import classes from './Products.module.css';


const Products = () => {

  const products = useSelector(state => state.items.orders);
  const dispathFn = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const fethed = await fetch("https://salty-lowlands-62353.herokuapp.com/products");
      const data = await fethed.json();

      return await data
    }
    getData()
    .then(res => dispathFn(itemsActions.initiallyAdd(res)))
    .catch(err => console.log("ERR >>> ", err));

  }, [dispathFn]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {products.map(el => 
        <ProductItem
          _id={el._id}
          key={el._id}
          title={el.title}
          price={el.price}
          description={el.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
