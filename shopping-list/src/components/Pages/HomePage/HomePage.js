import * as React from "react";
import Grid from "@mui/material/Grid";
import Category from "./Category/Category";
import { useNavigate } from "react-router-dom";

//import { useNavigate } from "react-router-dom";
//import { styled } from "@mui/material/styles";
const categories = [
  {
    id: 1,
    category: "Meat",
    description:
      "Meat is a major source of key Meat and poultry are great sources of protein. They also provide lots of other nutrients your body needs, like iodine, iron, zinc, vitamins (especially B12) and essential fatty acids., such as high-quality protein, iron, and B vitamins.",
    image: require("../../Images/meat.jpg"),
    alt: "Meat",
  },
  {
    id: 2,
    category: "Vegetables",
    description:
      "Vegetables are imVegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.portant sources of many nutrients, including potassium, dietary fiber, folate, vitamin A, and vitamin C.",
    image: require("../../Images/vegetables.jpg"),
    alt: "Vegetables",
  },
  {
    id: 3,
    category: "Fruits",
    description:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.",
    image: require("../../Images/fruits.jpg"),
    alt: "Fruits",
  },

  {
    id: 4,
    category: "Drinks",
    description:
      "Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Being well-hydrated also improves sleep quality, cognition, and mood.",
    image: require("../../Images/drinks.jpg"),
    alt: "Drinks",
  },
  {
    id: 5,
    category: "Sweets",
    description:
      "Fruits are an Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur. Some cultures sweeten foods that are more commonly savory to create desserts. In some parts of the world there is no tradition of a dessert course to conclude a meal. source of essential vitamins and minerals, and they are high in fiber.",
    image: require("../../Images/sweets.jpg"),
    alt: "Sweets",
  },
  {
    id: 6,
    category: "Grains",
    description:
      "Whole-grain foods are good choices for a nutritious diet. Whole grains provide fiber, vitamins, minerals and other nutrients. Whole-grain foods help control of cholesterol levels, weight and blood pressure. These foods also help lower the risk of diabetes, heart disease and other conditions.",
    image: require("../../Images/grains.jpg"),
    alt: "Grains",
  },
  {
    id: 7,
    category: "Dairy",
    description:
      "Milk products are an excellent Dairy products, also known as lacticinia, are food products made from milk. The most common dairy animals are cow, water buffalo, nanny goat, and ewe. Dairy products include common grocery store food items in the Western world such as yogurt, cheese, milk and butter. of essential vitamins and minerals, and they are high in fiber.",
    image: require("../../Images/lactate.jpg"),
    alt: "Dairy",
  },
];

const HomePage = (props) => {
  const navigate = useNavigate();

  const onClickHandler = (categoryId) => {
    navigate("/products", { state: { categoryId: categoryId } });
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {categories.map((category, index) => (
        <Grid
          item
          xs={3}
          key={index}
          onClick={() => onClickHandler(category.id)}
        >
          <Category
            description={category.description}
            category={category.category}
            image={category.image}
            alt={category.alt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
