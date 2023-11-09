import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
            label="Product name"
            multiline
            maxRows={4}
            onChange={onChangeName}
            value={name}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}
            onChange={onChangeDescription}
            value={description}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Finish
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default AddProduct;
