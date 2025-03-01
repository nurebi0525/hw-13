import {Button} from "../UI/Button"
import styled from "styled-components"

export const TotalAmount = ({onClose, orders}) => {

    const totalAmout = orders.reduce((prevValue, currentvalue) => {
        if(currentvalue.amount > 1) {
            return prevValue + currentvalue.price * currentvalue.amount
        }
        return prevValue + currentvalue.price;

    }, 0)

    return <StyledTotalAmountBox>
        <TotalAmountContent>
            <p>Total Amount</p>
            <p>${totalAmout}</p>
        </TotalAmountContent>
        <TotalAmountActions>
            <Button variant="outline" onClick={onClose}>close</Button>
            {!!orders.lenght && <Button>Order</Button>}
        </TotalAmountActions>
    </StyledTotalAmountBox>
}

const StyledTotalAmountBox = styled.div`
    padding: 30px 32px;
`;

const TotalAmountContent = styled.div`
    display: flex;
    align-items: center;
justify-content: space-between;
p:nth-child(1) {
    color: rgb(34, 34, 34);
    font-size: 20px;
    font-weight: 700;

}
p:nth-child(2) {
    color: rgb(34, 34, 34);
    font-size: 22px;
    font-weight: 600;
    text-align: left;
}
`

const TotalAmountActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 16px;
`