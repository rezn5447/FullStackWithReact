import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Amounts are in cents
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button type="button" className="btn" style={{ marginRight: '10px' }}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;
