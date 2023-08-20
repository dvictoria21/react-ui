import React from 'react';

function RecipeDetails({ selectedRecipe }) {
  if (!selectedRecipe) {
    return (
      <div className="recipeContainer">
        <div className="message">Select a recipe from the menu to see details.</div>
      </div>
    );
  }

  const { name, thumbnail_url, description, sections, instructions } = selectedRecipe;

  return (
    <div className="recipeContainer">
      <h2 className="recipeName">{name}</h2>
      <div className="recipeBox">
        <img src={thumbnail_url} className="recipeImage" alt={name} />
        <div className="recipeDescription">{description}</div>
        <div className="recipeIngredients">
          <h3>Ingredients:</h3>
          <ul>
            {sections[0].components.map((component, index) => (
              <li key={index}>{component.raw_text}</li>
            ))}
          </ul>
        </div>
        <div className="recipeInstructions">
          <h3>Instructions:</h3>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction.display_text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
