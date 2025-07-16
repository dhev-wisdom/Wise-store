import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
    const {cartItems, itemsTotalAmount, cartItemsCount} = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Desc</span>
                </div>
                <div className="header-block">
                    <span>Qty</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="hide header-block">
                    <span>SubTotal</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}

            <p>You have picked {cartItems.length} different items</p>
            <p>Total number of items in cart - {cartItemsCount}</p>

            <h2 className='total'>Total - ${itemsTotalAmount}</h2>

            <PaymentForm />
        </div>
    )
}

export default Checkout;