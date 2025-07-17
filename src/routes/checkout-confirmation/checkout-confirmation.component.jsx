import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { Link } from 'react-router-dom';
import './checkout-confirmation.styles.scss';

const CheckoutConfirm = () => {
    return (
        <div className="checkout-confirm-container">
        <p className="main-header">Thank you for shopping with <span>Wise Cloth Store</span></p>
        <p className="smaller-header">We hope to see you soon</p>
        <div className='button-container'>
            <Link to='/'><Button>GO HOME</Button></Link>
            <Link to='/shop'><Button buttonType={BUTTON_TYPE_CLASSES.inverted}>SHOP MORE</Button></Link>
        </div>
        </div>
    )
}

export default CheckoutConfirm;