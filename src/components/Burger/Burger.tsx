import React from "react";
import { IngredientState } from "../../types";
import Price from "./Price.tsx";
import BurgerIngredients from "./BurgerIngredients.tsx";

interface BurgerProps {
  ingredients: IngredientState[];
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  return (
    <div
      style={{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <BurgerIngredients ingredients={ingredients} />
        <div className="BreadBottom"></div>
      </div>
      <Price ingredients={ingredients} />
    </div>
  );
};

export default Burger;