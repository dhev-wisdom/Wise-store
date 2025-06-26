import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const {increaseProductCount, decreaseProductCount, removeFromCart} = useContext(CartContext);

    const increaseCount = () => {
        increaseProductCount(cartItem);
    }

    const decreaseCount = () => {
        decreaseProductCount(cartItem);
    }
    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => decreaseCount()} className="arrow">&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => increaseCount()} className="arrow">&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <span className='subTotal'>${(price * quantity).toFixed(2)}</span>
            <div className="remove-button" onClick={() => removeFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;