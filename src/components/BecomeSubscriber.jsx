import React from 'react'
import { Elements, injectStripe } from 'react-stripe-elements'
import PaymentForm from './PaymentForm'
import Subscriptions from "../modules/subscriptions"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


const BecomeSubscriber = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const submitPayment = async (stripeToken) => {

    let paymentStatus = await Subscriptions.create(stripeToken)
    if (paymentStatus.success) {
      dispatch({
        type: "USER_IS_SUBSCRIBER",
        payload: {
          role: "subscriber"
        }
      })
      history.push("/", {message: paymentStatus.message })
    } else {

    }
  }

  return (
    <Elements>
      <PaymentForm submitPayment={submitPayment} />
    </Elements>
  )
}

export default BecomeSubscriber;
