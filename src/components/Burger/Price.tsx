import React from "react";
import INGREDIENTS from "../../ingredients.ts";
import { IngredientState } from "../../types";

interface BurgerIngredientsPrice {
  ingredients: IngredientState[];
}

const Price: React.FC<BurgerIngredientsPrice> = ({ ingredients }) => {
  return (
    <>
      price: {ingredients.reduce((acc, ingredient) => {
        const priceIngredient = INGREDIENTS.filter(
          (item) => item.name === ingredient.name,
        )[0];
        if (ingredient.count > 0) {
          acc = acc + ingredient.count * priceIngredient.price;
        }
        return acc;
      }, 30)} KGS
    </>
  );
};

export default Price;
