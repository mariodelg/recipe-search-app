import React from "react";
import "../assets/styles/components/Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-box">
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.ceil(calories)}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
