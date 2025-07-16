import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Auth from './routes/auth/auth.component';
import Shop from './routes/shop/shop.components';
import Checkout from './routes/checkout/checkout.component';
import Test from './routes/test/test2.component.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='test' element={<Test />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
