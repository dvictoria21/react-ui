import React from 'react';

function Menu({ recipes, onRecipeClick }) {
  return (
    <div className="hamburger-menu">
      <input id="menuToggle" type="checkbox" />
      <label className="menuButton" htmlFor="menuToggle">
        <span></span>
      </label>
      <ul className="menuBox">
        {recipes.map((recipe, index) => (
          <li key={index}>
            <a
              className="breakfastItem"
              href="#"
              onClick={() => onRecipeClick(index)}
            >
              {recipe.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
