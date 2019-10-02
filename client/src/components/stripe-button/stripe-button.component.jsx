import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_7OlsOFTXsPdkWMK6MwoHalB1001ELeOFPT';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment successful');
      })
      .catch(error => {
        console.error('Payment error: ', JSON.parse(error));
        alert('Could not complete payment');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Zero to Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
