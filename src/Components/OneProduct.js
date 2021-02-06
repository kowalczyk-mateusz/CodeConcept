import React, { useEffect } from 'react'
import styled from 'styled-components'
import Headphones from '../Images/headphones.png'
import EditImage from '../Images/edit-img.png'
import XImage from '../Images/x-img.png'
import cart_products from '../Data/cart_products.json'
const OneProduct = ({incrementFunction,productName,setPrice, productPrice, id, decrementFunction,updateSubtotal, deleteProductFunction, productsNumber})=>{


    const found = cart_products.find(element=> element.productId == id);
    useEffect(()=>{
        setPrice(productPrice)
    },[])
    return(
        <>
        <ShoppingDetails>
        <ProductImage >
            <img onClick={deleteProductFunction} src={XImage} alt='x image'/>
            <img src={Headphones} alt="Headphones"/>
        </ProductImage>
        <ProductInfo>
        <ProductName>
            {productName}
        </ProductName>
        <ProductPrice>
            {productPrice}
        </ProductPrice>
            <ProductQty>
                <MinusButton onClick={productsNumber > 0 ? decrementFunction: null}>-</MinusButton>
                <Number>{productsNumber >= found.quantity ? found.quantity : productsNumber}</Number>
                <PlusButton onClick={productsNumber < found.quantity ? incrementFunction : null}>+</PlusButton>
                <EditButton onClick={updateSubtotal}>
                    <img src={EditImage} alt="EditImage"/>
                </EditButton>
            </ProductQty>
            </ProductInfo>
    </ShoppingDetails> 
    <Line/>
    </>
    )
}
const ShoppingDetails = styled.div`
padding: 3rem 0rem;
width: 100%;
display: flex;
align-items: center;
@media (max-width: 850px){
    flex-wrap: wrap;
}
`
const ProductImage = styled.div`
width: 40%;
display: flex;
@media (max-width: 850px){
    display: flex;
    min-width: 100%;
    order: 99;
    justify-content: center;
}
img:first-child{
   padding-right: 3rem;
    object-fit: contain;
}
img:last-child{
    object-fit: contain;
}
`
const ProductName = styled.div`
flex: 1;
font-size: 1.2rem;
color: gray;
font-weight: 400;
@media (max-width: 850px){
    font-size: 0.8rem;
    flex: 1
}
`
const ProductPrice = styled.div`
flex: 1;
font-size: 1.2rem;
color: gray;
font-weight: 400;
@media (max-width: 850px){
    font-size: 0.8rem;
    flex: 1
}
`
const ProductQty = styled.div`
flex: 1.2;
display: flex;
@media (max-width: 850px){
    flex: 1
}
`
const MinusButton = styled.button`
width: 35px;
height: 35px;
border-radius: 0px;
border: 1px solid gray;
background-color: #ececec;
color: gray;
font-weight: bold;
font-size: 1.3rem;
@media (max-width: 850px){
    width: 25px;
    height: 25px;
}
`
const Number = styled.div`
width: 40px;
height: 35px;
border-radius: 0px;
border: 2px solid gray;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
color: gray;
@media (max-width: 850px){
    width: 30px;
    height: 25px;
}
`
const PlusButton = styled.button`
width: 35px;
height: 35px;
border-radius: 0px;
border: 1px solid gray;
background-color:#ececec;
color: gray;
font-weight: bold;
font-size: 1.3rem;
@media (max-width: 850px){
    width: 25px;
    height: 25px;
}
`
const EditButton = styled.button`
width: 35px;
height: 35px;
background-color: transparent;
border: 0;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 850px){
    width: 25px;
    height: 25px;
}
&:hover{
    border: 1px solid gray;
}

`
const ProductInfo = styled.div`
display: flex;
width: 60%;
@media (max-width: 850px){
    width: 100%;

justify-content: space-between;
}

`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: gray;
`
export default OneProduct