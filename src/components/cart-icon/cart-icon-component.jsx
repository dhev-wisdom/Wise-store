import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = ({onClick}) => {
    const {cartItemsCount} = useContext(CartContext);
    return (
        <CartIconContainer onClick={onClick}>
            <ShoppingIcon />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;