import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landingpage.js";
import { Navbar } from "./components/Navbar";
import ListRecipes from "./Pages/ListRecipes";
import { useGetRecipes } from "./hooks/useGetRecipes.js";
import { ThemeProvider } from "@mui/material/styles";
import { SignUp } from "./Pages/SignUp.tsx";
import { Login } from "./Pages/Login";
import { Profile } from "././Pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import { Logout } from "./components/Logout.js";
import { AddRecipe } from "./Pages/AddRecipe";
import { UpdateProfile } from "./components/UpdateUserName";
import theme from "./styles/theme.js";
import { UsersRecipe } from "./Pages/UsersRecipe.js";
import { UsersFavourites } from "./Pages/UsersFavourites.js";
import { RecipeDetails } from "./Pages/RecipeDetails.js";
import { ProtectedRoute } from "./utils/ProtectedRoute.js";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [recipeData, setRecipeData] = useState([]);
  useGetRecipes(setRecipeData);

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CssBaseline>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/recipes"
                element={<ListRecipes recipeData={recipeData} />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/logout" element={<Logout />} />
              <Route path="/newrecipe" element={<AddRecipe />} />
              <Route path="/updateUsername" element={<UpdateProfile />} />
              <Route
                path="/usersrecipe"
                element={
                  <ProtectedRoute>
                    <UsersRecipe />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favourites"
                element={
                  <ProtectedRoute>
                    <UsersFavourites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recipe/:recipeId"
                element={<RecipeDetails />}
              ></Route>
            </Routes>
          </Router>
        </CssBaseline>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
