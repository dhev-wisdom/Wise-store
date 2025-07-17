import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { Link } from 'react-router-dom';
import './checkout-confirmation.styles.scss';

const CheckoutConfirm = () => {
    return (
        <div className="checkout-confirm-container">
        <p className="main-header">Thank you for shopping with <span>Wise Cloth Store</span></p>
        <p className="smaller-header">We hope to see you soon</p>
        <div className='button-container'>
            <Button><Link to='/'>GO HOME</Link></Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}><Link to='/shop'>SHOP MORE</Link></Button>
        </div>
        </div>
    )
}

export default CheckoutConfirm;