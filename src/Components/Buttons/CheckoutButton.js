import React from 'react'
import styled from 'styled-components'
const CheckoutButton = ({proceedFunction}) =>{
    return(
            <StyledCheckoutButton onClick={proceedFunction}>Proceed to checkout</StyledCheckoutButton>
    )
}

const StyledCheckoutButton = styled.button`
padding: 0.75rem 2rem;
color: #fff;
background-color: #000;
font-size: 1.2rem;
border: 0;
`


export default CheckoutButton