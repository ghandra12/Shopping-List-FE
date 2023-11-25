import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddNewClient = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const client = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      PhoneNumber: phoneNumber,
    };

    axios.post(`https://localhost:7247/Client`, client).then(() => {
      navigate("/");
    });
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
          <TextField
            id="outlined-multiline-flexible"
            label="Last name"
            multiline
            maxRows={4}
            onChange={onChangeLastName}
            value={lastName}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="First name"
            multiline
            maxRows={4}
            onChange={onChangeFirstName}
            value={firstName}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="E-mail"
            multiline
            maxRows={4}
            onChange={onChangeEmail}
            value={email}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            multiline
            maxRows={4}
            onChange={onChangePassword}
            value={password}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Phone number"
            multiline
            maxRows={4}
            onChange={onChangePhoneNumber}
            value={phoneNumber}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Add this client
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default AddNewClient;
