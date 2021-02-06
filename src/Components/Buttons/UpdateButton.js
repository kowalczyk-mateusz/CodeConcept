import React from 'react'
import styled from 'styled-components'
const UpdateButton = ({updateSubtotal}) =>{
    return(
        <StyledUpdateButton onClick={updateSubtotal}>Update Shopping Cart</StyledUpdateButton>
    )

}

const StyledUpdateButton = styled.button`
color: white;
background-color: black;
border: 0;
font-size: 1.2rem;
padding: 0.5rem 0.75rem;
text-align: center;
`

export default UpdateButton