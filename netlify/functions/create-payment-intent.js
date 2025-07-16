// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// exports.handler = async(event) => {
//     try{
//         const { amount } = JSON.parse(event.body);
//         const paymentIntent = await stripe.paymentIntent.create({
//             amount,
//             currency: "usd",
//             payment_method_types: ["card"],
//         })

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ paymentIntent })
//         }
//     } catch (error) {
//         console.error({ error });
//         return {
//             statusCode: 400,
//             body: JSON.stringify({ error }),
//         }
//     }
// }

// Use import/export syntax
import 'dotenv/config'; // Modern way to load dotenv in ESM
import Stripe from 'stripe'; // Import Stripe as a default export

// Initialize Stripe outside the handler for performance (re-use across invocations)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => { // Use named export
    // Ensure this is a POST request
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const { amount } = JSON.parse(event.body);

        // Basic validation (important for production!)
        if (typeof amount !== 'number' || amount <= 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid amount provided.' }),
            };
        }

        // Corrected API call: stripe.paymentIntents.create (not stripe.paymentIntent.create)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Ensure amount is in cents
            currency: "usd",
            // For PaymentElement, it's recommended to use automatic_payment_methods: { enabled: true }
            // instead of payment_method_types: ["card"] for broader payment method support.
            automatic_payment_methods: {
                enabled: true,
            },
            // If you have a customer or need to attach metadata, do it here.
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' }, // Always include content-type for JSON responses
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret }), // Return clientSecret, not the whole paymentIntent object
        };
    } catch (error) {
        console.error('Stripe function error:', error); // More descriptive log
        return {
            statusCode: 500, // Use 500 for server-side errors
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message || 'Internal server error' }), // Return error message
        };
    }
};