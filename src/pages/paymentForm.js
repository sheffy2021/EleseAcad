import React from 'react'
import PaymentForm from '../components/paymentForm/PaymentForm'
import HiddenRouterBar from '../components/routerBars/hiddenRouterBar'
import TopRouterBar from '../components/routerBars/topRouterBar'

const PaymentFormPage = () => {
    return (
        <>
            <TopRouterBar menuLogo="Boiler" menuLogoSpan='Plate' />
            <HiddenRouterBar menuLogo="Boiler" menuLogoSpan='Plate' />
            <PaymentForm />
        </>
    )
}

export default PaymentFormPage
