import { ChangeEvent, FormEvent, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { FormControl } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "../styles/Layout";

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
      navigate("/profile");
    } else {
      error && setValues({ ...values, error: error });
    }
  };

  return (
    <Layout>
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
            <FormControl required fullWidth>
              <TextField
                id="email"
                label="Your email"
                variant="outlined"
                color="info"
                value={values.email}
                onChange={handleChange("email")}
                required
                fullWidth
                margin="normal"
              />
              <FormControl>
                <TextField
                  name="password"
                  id="password"
                  label="Your password"
                  type="password"
                  required
                  fullWidth
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </FormControl>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              variant="contained"
              fullWidth
              color="secondary"
              type="submit"
              onSubmit={handleSubmit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <br></br>
                {"Don't have an account yet?"}
                <Link to={"/signup"} style={{ textDecoration: "none" }}>
                  {" "}
                  Register
                </Link>{" "}
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};
