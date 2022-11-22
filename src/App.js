import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage.js";
import "./App.css";
import Navbar from "./components/Navbar";
import ListRecipes from "./Pages/ListRecipes";
import { useState } from "react";
import { useGetRecipes } from "./hooks/useGetRecipes.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Layout } from "./styles/Layout";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EDF2FB",
      main: "#CCDBFD",
      dark: "#ABC4FF",
    },
    secondary: {
      light: "#E2EAFC",
      main: "#C1D3FE",
      dark: "#B6CCFE",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      light: "#ffcc80",
      main: "#f57c00",
      dark: "#e65100",
    },
    success: {
      light: "#a5d6a7",
      main: "#4caf50",
      dark: "#2e7d32",
    },
  },
});

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  useGetRecipes(setRecipeData);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <LandingPage />
                </Layout>
              }
            />
            <Route
              path="/recipes"
              element={<ListRecipes recipeData={recipeData} />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

//
// <Route path="/signup" element={<SignUp />}></Route>
//             <Route path="/login" element={<LogIn />}></Route>
//             <Route path="/profile" element={<Profile />}></Route>
