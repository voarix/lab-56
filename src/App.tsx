import "./App.css";
import { useState } from "react";
import INGREDIENTS from "./ingredients.ts";
import Ingredient from "./components/Ingredient.tsx";

interface IngredientState {
  name: string;
  count: number;
}

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientState[]>([
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
  ]);

  const onAddCount = (ingredientIndex: number) => {
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (ingredientIndex === index) {
          return {
            ...ingredient,
            count: ingredient.count + 1,
          };
        }
        return ingredient;
      }),
    );
  };

  const onDelete = (ingredientIndex: number) => {
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (ingredientIndex === index && ingredient.count !== 0) {
          return {
            ...ingredient,
            count: ingredient.count - 1,
          };
        }
        return ingredient;
      }),
    );
  };

  return (
    <>
      <div style={{display: 'flex'}}>
        {INGREDIENTS.map((item, index) => {
          const countArr = ingredients.filter((ingredient) => ingredient.name === item.name)[0];

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
    </>
  );
};

export default App;
