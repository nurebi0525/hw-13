import React from "react";
import { DUMMY_MEALS } from "../../styles/availableMeal";
import { MealItem } from "./MealItem";
import styled from "styled-components";
export const AvailableMeals = () => {
  console.log(DUMMY_MEALS);
  return (
    <StyledAvailabelMeals>
      {DUMMY_MEALS.map((food) => {
        return (
          <div>
            <MealItem
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <StyledLine></StyledLine>
          </div>
        );
      })}
    </StyledAvailabelMeals>
  );
};

const StyledAvailabelMeals = styled.div`
  padding: 10px;
  background-color: #ffffff;
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 20px;
`;
const StyledLine = styled.div`
  background-color: rgba(214, 214, 214, 1);
  width: 100%;
  height: 2px;
`;
