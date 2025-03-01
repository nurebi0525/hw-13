import React from 'react'
import CartIcon from "../assets/basketIcon.svg"
import styled from 'styled-components'

export const Basket = () => {
  return (
   <BasketWrapper>
    <div>
    <img src={CartIcon} alt="" />
    <p>Your Cart</p>
    </div>
    <span>7</span>
   </BasketWrapper>
  )
}

const BasketWrapper = styled.div`
    border-radius: 30px;
    background: rgb(90, 31, 8);
    padding: 17px 32px;
    color: white;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    gap: 25px;
    user-select: none;
    span {
        border-radius: 30px;
        background: rgb(138,43,6);
        padding: 4px 20px;
        display: flex;
        align-items: center;
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    div {
       display: flex;
       gap: 13px;
       align-items: center;
    }
`

