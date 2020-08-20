import React, { Component } from "react";
import axios from "axios";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import { Link } from "react-router-dom";

class Subscription extends Component {
  state = {
    message: null
  }

  payWithStripe = async (event) => {
    event.preventDefault();
    let stripeResponse = await this.props.stripe.createToken();

    stripeResponse.token && this.performPayment(stripeResponse.token.id);
  };

  performPayment = async (stripeToken) => {
    let headers = await JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
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
      (message = (
        <>
          <p id="payment-message">{this.state.message}</p>
          <Link id="back-to-root-path" to={{ pathname: "/" }}>Go back to reading news</Link>
        </>
      ));

    return (
      <div>
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

        {message}
      </div>
    );
  }
}

export default injectStripe(Subscription);