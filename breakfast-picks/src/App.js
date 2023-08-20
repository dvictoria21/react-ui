import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import Header from './components/Header';
import Menu from './components/Menu';
import RecipeDetails from './components/RecipeDetails';

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd1fa12b49msh6da84797acf39b6p153d6djsn24ee2287ea04",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=breakfast";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRecipeClick = (index) => {
    setSelectedRecipeIndex(index);
  };

  return (
    <div className="App">
      <Header />
      <Menu recipes={recipes} onRecipeClick={handleRecipeClick} />
      <RecipeDetails selectedRecipe={recipes[selectedRecipeIndex]} />
    </div>
  );
}

export default App;