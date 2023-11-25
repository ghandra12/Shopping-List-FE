import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7247/Category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let form = new FormData();
    form.append("name", name);
    form.append("description", description);
    form.append("categoryId", categoryId);
    if (image !== null) {
      form.append("image", image);
    }

    axios.post(`https://localhost:7247/Product`, form).then(() => {
      navigate("/");
    });
  };

  const onImageChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
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
          <FormControl fullWidth sx={{ minWidth: 190 }}>
            <Select
              value={categoryId}
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
            >
              {categories.map((category) => (
                <MenuItem
                  value={category.id}
                  onClick={() => setCategoryId(category.id)}
                  key={category.id}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Button variant="contained" type="submit">
            Finish
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default AddProduct;
