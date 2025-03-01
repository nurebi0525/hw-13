
import { MealForm } from "./MealForm";
import styled from "styled-components";

export const MealItem = (props) => {
  const { title, description, price } = props;
  return (
    <StyledItem>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice>${price}</StyledPrice>
      </div>
      <MealForm />
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-weight: 700;
`;

const StyledDescription = styled.p`
  font-style: italic;
`;
const StyledPrice = styled.p`
  color:rgba(173, 85, 2, 1);
  font-weight: bolder;
`;
