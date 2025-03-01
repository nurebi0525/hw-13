import { TotalAmount } from "./TotalAmount"
import { OrderItem } from "./OrderItem";
import styled from "styled-components";

export const ORDERED_MEALS = [
    {
      id: 1,
      title: "Sushi",
      amout: 1,
      price: 22.99,
    },
    {
      id: 2,
      title: "Pizza",
      amout: 1,
      price: 16.0,
    },
  ];
  

export const OrderBasket = ({onClose}) => {
    return (
        <div>
           <OrderBox>
           {ORDERED_MEALS.map((item) => {
                return <OrderItem key={item.id} {...item} />
            })}
           </OrderBox>
            <TotalAmount onClose={onClose} orders={ORDERED_MEALS}/>
        </div>
    )
}

const OrderBox  = styled.div`
    max-width: 320px;
    overflow: auto;
`