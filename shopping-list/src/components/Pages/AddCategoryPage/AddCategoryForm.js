import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AddCategoryForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // if (email.length >= 8 && password.length >= 8) {
    //   localStorage.setItem("authenticated", true);
    //   console.info(props);
    //   props.setLoggedIn(true);
    //   navigate("/");
    // } else {
    //   alert("Email and password should have at least 8 characters!");
    // }
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
            label="Title"
            value={title}
            onChange={onTitleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Description
            "
            multiline
            rows={6}
            defaultValue="Type some description"
            value={description}
            onChange={onDescriptionChange}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Add!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCategoryForm;
