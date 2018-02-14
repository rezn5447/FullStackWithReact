import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Amounts are in cents
class Payments extends Component {
  render() {
    return (
      <button type="button" className="btn" style={{ marginRight: '10px' }}>
        Add Credits
      </button>
    );
  }
}

export default connect(null, actions)(Payments);
