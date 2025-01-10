import INGREDIENTS from "../../ingredients.ts";
import { IngredientState } from "../../types";
import Ingredient from "./Ingredient/Ingredient.tsx";
import React from "react";

interface IngredientsListProps {
  ingredients: IngredientState[];
  onAddCount: (ingredientIndex: number) => void;
  onDelete: (ingredientIndex: number) => void;
}

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  onAddCount,
  onDelete,
}) => {
  return (
    <div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
      {INGREDIENTS.map((item, index) => {
        const countArr = ingredients.filter(
          (ingredient) => ingredient.name === item.name,
        )[0];

        return (
          <Ingredient
            key={index}
            ingredientImg={item.image}
            ingredientName={item.name}
            ingredientCount={countArr.count}
            onAddCount={() => onAddCount(index)}
            onDelete={() => onDelete(index)}
          />
        );
      })}
    </div>
  );
};

export default IngredientsList;
