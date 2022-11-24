import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage.js";
import "./App.css";
import Navbar from "./components/Navbar";
import ListRecipes from "./Pages/ListRecipes";
import { useState } from "react";
import { useGetRecipes } from "./hooks/useGetRecipes.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Layout } from "./styles/Layout";
import { SignUp } from "./Pages/SignUp.tsx";
import { Login } from "./Pages/Login";
import { Profile } from "././Pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import { Logout } from "./components/Logout.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCDBFD",
    },
    secondary: {
      main: "#C1D3FE",
    },
    warning: {
      main: "#ffc071",
    },
    error: {
      main: "#f57c00",
    },
    success: {
      main: "#4caf50",
    },
  },
});

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  useGetRecipes(setRecipeData);

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
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
            <Route
              path="/signup"
              element={
                <Layout>
                  <SignUp />
                </Layout>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            ></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
