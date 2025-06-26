import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addProductToCart} = useContext(CartContext);

    const addToCart = () => {
        addProductToCart(product);
    }

    return (
        <div className="product-card-component">
            <img className="shop-img" src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>

            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addToCart()}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;