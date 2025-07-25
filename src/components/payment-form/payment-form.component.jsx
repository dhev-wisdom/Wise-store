import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.styles.jsx';

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { setCartItems, itemsTotalAmount } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const navigate = useNavigate();

    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const res = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: itemsTotalAmount * 100})
        })

        console.log("First res: ", res);

        setIsProcessingPayment(true);

        const response = await res.json();

        const clientSecret = response.clientSecret;
        console.log("clientSecret: ", clientSecret);
        // const clientSecret = response.paymentIntent.client_secret;
        // const {paymentIntent: { client_secret }} = response; // this destructure also works fine

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
             }
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) alert(paymentResult.error)
        else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert(`Payment of $${itemsTotalAmount} was successful`);
                setCartItems([]);
                navigate('/checkout-confirmation');
            }
        }
        
        };


    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;