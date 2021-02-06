import React,{useState} from 'react'
import styled from 'styled-components'
import CartTotals from './CartTotals'
import CartDetails from './CartDetails'
import CheckoutButton from './Buttons/CheckoutButton'
const ShopingCart = ( ) =>{
    const [productsNumber, setProductsNumber] = useState(0)
    const [subtotal, setSubtotal] = useState(0.00)
    const [proceed, setProceed] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [price, setPrice] = useState(0.00)
    const proceedToCheckoutHandler = ()=>{
        setProceed(true)
    }
    const incrementProductsNumber = ()=>{
        setProductsNumber(productsNumber + 1)
    }
    const decrementProductsNumber = ()=>{
            setProductsNumber(productsNumber - 1)
    }
    
    const updateSubtotal = ()=>{
        setSubtotal(productsNumber * price)
        
    }
    const deleteProductHandler = ()=>{
            setDeleteProduct(true)
            
    }
    return(
         <StyledShoppingCart>
                        {!proceed ? 
            <>
             <ShoppingCartHeader>

        <h1>Shopping Cart</h1>
        <CheckoutButton proceedFunction={proceedToCheckoutHandler}/>
                         
        </ShoppingCartHeader>
        <StyledCart>
 
            <CartDetails 
        incrementFunction={incrementProductsNumber}
         decrementFunction={decrementProductsNumber}
         productsNumber={productsNumber}
         updateSubtotal={updateSubtotal}
         proceed={proceed}
         deleteProductFunction={deleteProductHandler}
         deleteProduct={deleteProduct}
         setPrice={setPrice}
         
         />
        
        <CartTotals subtotal={subtotal}
         productsNumber={productsNumber}
          proceedFunction={proceedToCheckoutHandler}
          deleteProduct={deleteProduct}
          price={price}
          />
 
          
        </StyledCart>   
        </>
         : <h1>Your order has been submitted successfully</h1>}  
        </StyledShoppingCart>
    )
}
const StyledShoppingCart = styled.div`
padding: 0rem 2rem;
min-width: 70%;
margin: 0 auto;
display: flex;
flex-direction: column;
h1{
    color: green;
    font-size: 4rem;
    text-align: center;

}
`
const ShoppingCartHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0rem;
h1{
    color: gray;
    font-size: 1.7rem;
    font-weight: normal;
}
@media (max-width: 800px){
    flex-direction: column;
    align-items: flex-start;
}
`
const StyledCart = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 1400px){
    flex-direction: column;
    align-items: center;
}

`
export default ShopingCart