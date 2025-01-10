import React from "react";

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
    <div>
      <button type="button" onClick={onAddCount}>
        <img src={ingredientImg} alt={ingredientName} />
      </button>
      <span>
        {ingredientName} {ingredientCount}
      </span>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
};

export default Ingredient;
