import styled from "styled-components";
import { Button } from "../UI/Button";

export const OrderItem = (props) => {
    const {id, amout, title, price} = props;

    return (
        <OrderBox>
        <div>{title}</div>
       <OrderBoxAction>
       <OrderDescription>
            <div>${price}</div>
            <span>x{amout}</span>
        </OrderDescription>
        <OrderItemButtons>
            <Button variant="withIcon" icon="+"/>
            <Button variant="withIcon" icon="-"/>

        </OrderItemButtons>
       </OrderBoxAction>
    </OrderBox>
    )
};

const OrderBox = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(214, 214, 214);
    box-shadow: 0px 6px 12px 0px rgba(36, 36, 36, 0.08);
    padding: 23px 0 23px 0;
`

const OrderBoxAction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
`
const OrderDescription = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 200px;
    div{
        color: rgb(173, 85, 2);
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        
    }
    span{
        padding: 6px 14px;
        border-radius: 6px;
        border: 1px solid rgb(214, 214, 214);
        text-align: center;
    }
`
const OrderItemButtons = styled.div`
    display: flex;
    gap: 14px;
`