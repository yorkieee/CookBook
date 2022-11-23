import React, { ChangeEvent, FormEvent, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { SignUp } from "./SignUp";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

interface State {
  password: string;
  email: string;
  error: string;
  showPassword: boolean;
}

export const Login = () => {
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    error: "",
    showPassword: false,
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { success, error } = await login(values.email, values.password);
    if (success) {
      navigate("/");
    } else {
      error && setValues({ ...values, error: error });
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ backgroundColor: "white", borderRadius: 5 }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch", rowGap: "1" },
            }}
          >
            <TextField
              id="email"
              label="Your email"
              variant="outlined"
              color="info"
              value={values.email}
              onChange={handleChange("email")}
              required
            />
            <FormControl
              sx={{ width: "25ch" }}
              variant="outlined"
              color="info"
              required
            >
              <InputLabel htmlFor="password">Type your password</InputLabel>
              <OutlinedInput
                id="password"
                type={"password"}
                value={values.password}
                onChange={handleChange("password")}
              ></OutlinedInput>
            </FormControl>
            <Button variant="contained" color="secondary" type="submit">
              Log In
            </Button>
          </Box>
        </form>
        <div>
          Don't have an account yet?{" "}
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            Register
          </Link>{" "}
        </div>
      </Box>
    </Container>
  );
};
