import React from 'react'
import { Elements, injectStripe } from 'react-stripe-elements'
import PaymentForm from './PaymentForm'


const BecomeSubscriber = () => {
  const payWithStripe = async (e) => {
    e.preventDefault()

    let stripeReponse = await this.props.stripe.createToken()

    stripeReponse.token && (
      this.performPayment(stripeReponse.token.id)
    )  
  }

  const performPayment = (stripetoken) => {

  }

  return (
    <Elements>
      <PaymentForm payWithStripe={payWithStripe} />
    </Elements>
  )
}

export default BecomeSubscriber
