import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context.jsx';
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CategoriesProvider>
    <CartProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CartProvider>      
    </CategoriesProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
