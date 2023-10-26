import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email.length >= 8 && password.length >= 8) {
      localStorage.setItem("authenticated", true);
      console.info(props);
      props.setLoggedIn(true);
      navigate("/");
    } else {
      alert("Email and password should have at least 8 characters!");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="root"
        rowSpacing={3}
      >
        <Grid item>
          {" "}
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={onEmailChange}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
