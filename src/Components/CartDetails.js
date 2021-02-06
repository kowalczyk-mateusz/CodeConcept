import React, {useState} from 'react'
import styled from 'styled-components'
import UpdateButton from './Buttons/UpdateButton'
import products from '../Data/products.json'
import OneProduct from './OneProduct'
const CartDetails = ({productsNumber, setPrice, incrementFunction, decrementFunction, deleteProductFunction, deleteProduct , updateSubtotal, proceed})=>{
    return(
        <StyledCartDetails>

            <ShoppingLabels>
                <Emptyspace>

                </Emptyspace>
                <ProductNameLabel>
                    Product Name
                </ProductNameLabel>
                <UnitPriceLabel>
                Unit Price
                </UnitPriceLabel>    
                <QtyLabel>
                    Qty
                </QtyLabel>
            </ShoppingLabels>
            <Line/>
            {deleteProduct === false ? products.map((product)=>(
                <OneProduct 
                incrementFunction={incrementFunction}
                decrementFunction={decrementFunction}
                deleteProductFunction={deleteProductFunction}
                proceed={proceed}
                productsNumber={productsNumber}
                updateSubtotal={updateSubtotal}
                productName={product.name}
                productPrice={product.price}
                key={product.id}
                id={product.id} 
                setPrice={setPrice}/>

                
                )) : <h2>Your basket is emtpy!</h2>}

            

            <Update>
                <UpdateButton productsNumber={productsNumber} updateSubtotal={updateSubtotal}/>
            </Update>

        </StyledCartDetails>
    )
}

const StyledCartDetails = styled.div`
min-width: 1000px;
border: 1px solid gray;
height: auto;
display: flex;
flex-direction: column;
padding: 3rem 2rem;
h2{
    padding: 2rem 0rem;
    text-align: center;
    font-size: 2rem;
}
@media (max-width: 1100px){
min-width: 100%;
}
@media (max-width: 850px){
    padding: 1rem 0.25rem;
}

`

const ShoppingLabels = styled.div`
display: flex;
width: 100%;
padding-bottom: 1rem;
`
const Emptyspace = styled.div`
width: 40%;
@media (max-width: 850px){
    display: none;
}
`
const ProductNameLabel = styled.div`
font-size: 1.2rem;
color: gray;
font-weight: bold;
flex: 1;
@media (max-width: 850px){
    font-size: 0.8rem;
    text-align: left;
    flex: 1;
}
`
const UnitPriceLabel = styled.div`
font-size: 1.2rem;
color: gray;
font-weight: bold;
flex: 1;
@media (max-width: 850px){
    font-size: 0.8rem;
    text-align: left;
    flex: 1;
}
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: gray;
`
const QtyLabel = styled.div`
font-size: 1.2rem;
color: gray;
font-weight: bold;
flex: 1.2;
@media (max-width: 850px){
    flex: 1;
    font-size: 0.8rem;
    text-align: left;
}
`

const Update = styled.div`
display: flex;
justify-content: flex-end;
padding-top: 1rem;
padding-right: 1rem;
`

export default CartDetails