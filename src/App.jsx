import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.components';
import Checkout from './routes/checkout/checkout.component';
import CheckoutConfirm from './routes/checkout-confirmation/checkout-confirmation.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='checkout-confirmation' element={<CheckoutConfirm />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App;
