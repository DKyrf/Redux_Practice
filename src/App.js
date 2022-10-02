import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';


function App() {
  
  const isToggled = useSelector(state => state.button.isToggled);


  return (
    <Layout>
      {isToggled && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
