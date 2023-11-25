import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const AddCategoryForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onImageChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let form = new FormData();
    form.append("name", title);
    form.append("description", description);
    if (image !== null) {
      form.append("image", image);
    }
    axios.post(`https://localhost:7247/Category`, form).then(() => {
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
            label="Description"
            multiline
            rows={6}
            defaultValue="Type some description"
            value={description}
            onChange={onDescriptionChange}
          />
        </Grid>
        <Grid item>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
          </Button>
        </Grid>
        <Grid item>
          {image && (
            <img src={imageUrl} alt="img" width="200px" height="200px" />
          )}
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCategoryForm;
