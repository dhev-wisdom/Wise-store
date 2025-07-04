import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const {cartItems, itemsTotalAmount, cartItemsCount} = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>SubTotal</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) =>  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}

            <small>You have picked {cartItemsCount} items from {cartItems.length} categories</small>

            <h2 className='total'>Total - ${itemsTotalAmount}</h2>
        </div>
    )
}

export default Checkout;