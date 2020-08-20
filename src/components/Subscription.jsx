import React, { Component } from "react";
import axios from "axios";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";

class Subscription extends Component {
  payWithStripe = async (event) => {
    event.preventDefault();
    let stripeResponse = await this.props.stripe.createToken();

    stripeResponse.token && this.performPayment(stripeResponse.token.id);
  };

  performPayment = async (stripeToken) => {
    let headers = await getAuthHeaders();
    let response = await axios.post(
      "/subscriptions",
      {
        stripeToken: stripeToken,
      },
      {
        headers: headers,
      }
    );

    if (response.data.paid === true) {
      this.setState({ message: response.data.message });
    }
  };

  render() {
    let message;

    this.state.message &&
      (message = <p id="payment-message">{this.state.message}</p>);

    return (
      <form onSubmit={this.payWithStripe} id="payment-form">
        <label>Card number</label>
        <CardNumberElement />

        <label>Expiry Date</label>
        <CardExpiryElement />

        <label>CVC</label>
        <CardCVCElement />

        <button id="submit-payment" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default injectStripe(Subscription);