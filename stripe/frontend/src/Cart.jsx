import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Pw92LKDOFX7yDxqnqiVLHW96S1kTJMmb4pSQROVTbgAhp4kHSylDgDHdpqEhS6uNdY0J9k7ZxoqQ4cOeLyn2TqK00uwbJRZ56'); // Replace with your Stripe publishable key

function Cart({ cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Create a checkout session on the backend
    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart,
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Display error.message to your customer
      alert(result.error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, index) => (
              <li key={index} className="p-3 bg-gray-200 rounded-md">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>

            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
            >
              Checkout
            </button>
          </div>
        </>
      )}
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}

export default Cart;
