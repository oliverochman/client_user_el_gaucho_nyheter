import React from 'react'
import {
  CardExpiryElement,
  CardCVCElement,
  CardNumberElement
} from 'react-stripe-elements'

const PaymentForm = ({ payWithStripe }) => {
  return (
    <form onSubmit={submitPayment}>
      <div data-cy="card-number">
        <label>Card Number</label>
        <CardNumberElement />
      </div>

      <div data-cy="card-expiry">
        <label>Card Expiry</label>
        <CardExpiryElement />
      </div>

      <div data-cy="card-cvc">
        <label>Card CVC</label>
        <CardCVCElement />
      </div>

      <button>Start your subscription</button>
    </form>
  )
}

export default PaymentForm
