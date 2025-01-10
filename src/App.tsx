import "./App.css";
import { useState } from "react";
import INGREDIENTS from "./ingredients.ts";
import Ingredient from "./components/Ingredient/Ingredient.tsx";

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
      <div style={{ width: "1280px", display: "flex" }}>
        <div
          style={{ width: "60%", display: "flex", flexDirection: "column" }}
        >
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
        <div style={{width: '40%', display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <div className="Burger" >
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {ingredients.reduce<JSX.Element[]>((acc, ingredient) => {
              if(ingredient.count > 0){
                for(let i = 0; i < ingredient.count; i++) {
                  acc.push(<div key={i+ingredient.name} className={ingredient.name}></div>);
                }
              } return acc;
            }, [])}
            <div className="BreadBottom"></div>

            price: {
            ingredients.reduce((acc, ingredient) => {
              const priceIngredient = INGREDIENTS.filter((item) => item.name === ingredient.name)[0];
              if(ingredient.count > 0){
                acc = acc + (ingredient.count * priceIngredient.price);
              }
              return acc;
            }, 30)
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
