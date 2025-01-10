import React from "react";
import './Ingredient.css';

interface IngredientProps {
  onAddCount: React.MouseEventHandler;
  ingredientImg: string;
  ingredientName: string;
  ingredientCount: number;
  onDelete: React.MouseEventHandler;
}

const Ingredient: React.FC<IngredientProps> = ({
  onAddCount,
  ingredientImg,
  ingredientName,
  ingredientCount,
  onDelete,
}) => {
  return (
    <div className="ingredient-container">
      <button type="button" onClick={onAddCount}>
        <img src={ingredientImg} alt={ingredientName}/>
      </button>
        <span className="ingredient-name">{ingredientName}</span>
        <span className="ingredient-count">x{ingredientCount}</span>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
};

export default Ingredient;
