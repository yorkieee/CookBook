import React, { useState, useContext, FormEvent, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { InputLabel } from "@mui/material";

const Copyright = (props: any) => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`CookBook © ${currentYear}.`}
    </Typography>
  );
};

const theme = createTheme();

interface State {
  password: string;
  email: string;
  name: string;
  error: string;
}

export const SignUp = () => {
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    name: "",
    error: "",
  });

  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const { success, error } = await register(
        values.email,
        values.password,
        values.name
      );
      if (success) {
        navigate("/");
      } else {
        error && setValues({ ...values, error: error });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label htmlFor="name"></label>
                <TextField
                  name="fullName"
                  required
                  fullWidth
                  id="name"
                  type="text"
                  onChange={handleChange("name")}
                  value={values.name}
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="email"></InputLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  onChange={handleChange("email")}
                  value={values.email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password"></label>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange("password")}
                  value={values.password}
                />
              </Grid>
            </Grid>
            <button type="submit" onSubmit={handleSubmit}>
              Sign Up
            </button>
          </form>
          <legend>{values.error}</legend>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography variant="body2">Already have an account? </Typography>
              <Link style={{ textDecoration: "none" }} to="/login">
                Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
