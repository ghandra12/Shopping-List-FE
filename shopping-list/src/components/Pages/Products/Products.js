import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AddButton from "./AddButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const products = [
  {
    name: "fish",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
    image: require("../../Images/meat_fish.jpg"),
  },
  {
    name: "pork",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
    image: require("../../Images/meat_pork.jpg"),
  },
  {
    name: "steak",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
    image: require("../../Images/meat_steak.jpg"),
  },
  {
    name: "chicken",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
    image: require("../../Images/meat_chicken.jpg"),
  },
  {
    name: "fish",
    id: "p1",
    calories: "206",
    categoryId: 2,
    description: "some desc",
    image: "",
  },
  {
    name: "fish",
    id: "p1",
    calories: "206",
    categoryId: 2,
    description: "some desc",
    image: "",
  },
  {
    name: "pork",
    id: "p2",
    calories: "240",
    categoryId: 2,
    description: "some desc",
    image: "",
  },
  {
    name: "beef",
    id: "p3",
    calories: "250",
    categoryId: 2,
    description: "some desc",
    image: "",
  },
  {
    name: "chicken",
    id: "p4",
    calories: "239",
    categoryId: 2,
    description: "some desc",
    image: "",
  },
];
const Products = (props) => {
  const [amount, setAmount] = useState(1);
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const location = useLocation();
  return (
    <Grid container spacing={6}>
      {products
        .filter((p) => p.categoryId === location.state.categoryId)
        .map((product) => (
          <Grid container item spacing={1} xs={3}>
            <Grid item xs={7}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  alt="product image"
                  height="150"
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    {product.calories}kcal
                  </Typography>
                </CardContent>
                <CardActions>
                  <AddButton
                    name={product.name}
                    amount={amount}
                    onChange={changeAmountHandler}
                  />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};
export default Products;
