import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/Landingpage.js";
import "./App.css";
import Navbar from "./components/Navbar";
import ListRecipes from "./components/ListRecipes.js";
import { useState } from "react";
import { useGetRecipes } from "./hooks/useGetRecipes.js";

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  useGetRecipes(setRecipeData);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/recipes"
            element={<ListRecipes recipeData={recipeData} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
