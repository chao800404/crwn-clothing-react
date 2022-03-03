/** @format */
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishalbKey =
    "pk_test_51KZDsJLVr9h1Udi2pQ8Dgj8DnFY7bOQtWxmB7hU8NN864LZB9EeCsZpppnK1bVlveYd8LOKCyilL0xlRn3kSTAo700OSYreBTn";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      name="Crwn Clothing Ltd"
      token={onToken}
      stripeKey={publishalbKey}
      panelLabel="Pay Money"
      label="Pay Now"
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
    />
  );
};

export default StripButton;
