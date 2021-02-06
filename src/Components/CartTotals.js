import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import CheckoutButton from './Buttons/CheckoutButton'
const CartTotals = ({subtotal, productsNumber,price, proceedFunction, deleteProduct}) =>{
    const [shippingPrice, setShippingPrice] = useState(23.80)
    const [grandtotal, setGrandtotal] = useState(0.00)

    useEffect(()=>{
        setGrandtotal(shippingPrice + (productsNumber * price ))
    
        if(productsNumber * price <= 100){
            setShippingPrice(23.80);
    
        }
        else{
            setShippingPrice(0);
        }
    },[subtotal, shippingPrice])

    return(
        <StyledCart>
            <StyledShipping>
                <ShippingHeadline>
                    SHIPPING
                </ShippingHeadline>
                <ShippingValue>
                ${shippingPrice}
                </ShippingValue>
            </StyledShipping>
            <StyledCartTotals>
            <CartTotalHeadline>
                CART TOTALS
            </CartTotalHeadline>
            <CartInfo>
                <Subtotal>
                    <p>Subtotal</p>
                    <p>${deleteProduct === false ? subtotal : 0}</p>
                </Subtotal>
                <Line/>
                <GrandTotal>
                    <p>GrandTotal</p>
                    <p>${deleteProduct === false ? grandtotal: 0}</p>
                </GrandTotal>
        <CheckoutButton proceedFunction={proceedFunction}/>
            </CartInfo>
            </StyledCartTotals>
        </StyledCart>
    )
}

const StyledCart = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 350px;
justify-content: space-between;
@media (max-width: 1400px){
    margin-top: 1rem;
}
`
const StyledShipping = styled.div`
border: 1px solid gray;
width: 100%;
height: 15%;
background-color: #dbdbdb;
display: flex;
padding: 0rem 1rem;
justify-content: space-between;
align-items: center;
font-weight: bold;
`
const StyledCartTotals = styled.div`
width: 100%;
height: calc(95% - 15%);
border: 1px solid gray;
`
const ShippingHeadline = styled.div`

`
const CartTotalHeadline = styled.div`
width: 100%;
height: 15%;
border-bottom: 1px solid gray;
background-color: #dbdbdb;
padding-left: 1rem;
display: flex;
align-items: center;
font-weight: bold;
`
const ShippingValue = styled.div`

`
const CartInfo = styled.div`
width: 100%;
height: calc(100% - 15%);
padding: 2rem 1rem;
display: flex;
justify-content: space-between;
flex-direction: column;
`
const Subtotal = styled.div`
display: flex;
justify-content: space-between;
padding: 0rem 1rem;
p{
    font-size: 1.2rem;
    color: gray;
}
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: gray;
`
const GrandTotal = styled.div`
display: flex;
justify-content: space-between;
padding: 0rem 1rem;
p{
    font-size: 1.2rem;
    color: gray;
}
`
export default CartTotals