import React from "react";
import { IngredientState } from "../../types";

interface BurgerIngredientsProps {
  ingredients: IngredientState[];
}

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ ingredients }) => {
  return (
    <>
      {ingredients.reduce<JSX.Element[]>((acc, ingredient) => {
        if (ingredient.count > 0) {
          for (let i = 0; i < ingredient.count; i++) {
            acc.push(
              <div key={i + ingredient.name} className={ingredient.name}></div>,
            );
          }
        }
        return acc;
      }, [])}
    </>
  );
};

export default BurgerIngredients;
