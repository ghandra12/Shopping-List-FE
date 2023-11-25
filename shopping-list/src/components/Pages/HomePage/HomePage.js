import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Category from "../Category/Category";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7247/Category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const onClickHandler = (categoryId) => {
    navigate("/products", { state: { categoryId: categoryId } });
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {categories.map((category) => (
        <Grid
          item
          xs={3}
          key={category.id}
          onClick={() => onClickHandler(category.id)}
        >
          <Category
            description={category.description}
            name={category.name}
            image={category.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
