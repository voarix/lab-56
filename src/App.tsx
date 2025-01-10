import "./App.css";
import { useState } from "react";
import { IngredientState } from "./types";
import IngredientsList from "./components/Ingredients/Ingredients.tsx";
import Burger from "./components/Burger/Burger.tsx";

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
      <div className="container">
        <IngredientsList
          ingredients={ingredients}
          onAddCount={onAddCount}
          onDelete={onDelete}
        />

        <Burger ingredients={ingredients} />
      </div>
    </>
  );
};

export default App;
