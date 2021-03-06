import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51GtMqaH2NQCWTanjsdPAvSafbyEjfbCliquBM3cesgckIMgcNzsVZHiU2UosxpKG1sbFo3RyW6Xwar7XSDugxxb200s7BN5Mh6';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }
    return (
        <StripeCheckout
         label='Pay Now'
         name='Arhans CROWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount = {priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;