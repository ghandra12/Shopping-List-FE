import FoodCategory from "./Food/FoodCategory";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const categories = [
  {
    category: "Meat",
    description:
      "Meat is a major source of key nutrients, such as high-quality protein, iron, and B vitamins.",
    image: "",
  },
  {
    category: "Vegetables",
    description:
      "Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate, vitamin A, and vitamin C.",
    image: "",
  },
  {
    category: "Fruits",
    description:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.",
    image: "",
  },
  {
    category: "Meat",
    description:
      "Meat is a major source of key nutrients, such as high-quality protein, iron, and B vitamins.",
    image: "",
  },
  {
    category: "Vegetables",
    description:
      "Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate, vitamin A, and vitamin C.",
    image: "",
  },
  {
    category: "Fruits",
    description:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.",
    image: "",
  },
  {
    category: "Vegetables",
    description:
      "Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate, vitamin A, and vitamin C.",
    image: "",
  },
  {
    category: "Fruits",
    description:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.",
    image: "",
  },
];
const HomePage = (props) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {categories.map((category, index) => (
        <Grid item xs={3} key={index}>
          {/* <Item> */}
          <FoodCategory
            description={category.description}
            category={category.category}
            image={category.image}
          />
          {/* </Item> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
