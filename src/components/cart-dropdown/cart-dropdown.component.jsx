import {CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';


const CartDropdown = () => {
    const {cartItems, itemsTotalAmount, setOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
        setOpen(false);
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length > 0 ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) : 
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
                <b>Total - ${itemsTotalAmount}</b>
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;