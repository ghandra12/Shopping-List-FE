import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddButton from "./AddButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Products = (props) => {
  const [amount, setAmount] = useState(1);
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const [products, setProducts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    debugger;
    axios
      .get(`https://localhost:7247/Product/${location.state.categoryId}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [location.state.categoryId]);

  return (
    <Grid container spacing={6}>
      {products.map((product) => (
        <Grid container item spacing={1} xs={3}>
          <Grid item xs={7}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="product image"
                height="150"
                image={
                  product.image !== null
                    ? product.image
                    : require("../../Images/no_img.jpg")
                }
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
