import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const products = [
  { name: "fish", id: "p1", calories: "206", categoryId: 1 },
  { name: "pork", id: "p2", calories: "240", categoryId: 2 },
  { name: "beef", id: "p3", calories: "250", categoryId: 1 },
  { name: "chicken", id: "p4", calories: "239", categoryId: 2 },
];
const Products = (props) => {
  const location = useLocation();
  return (
    <Box sx={{ width: "100%", alignContent: "center" }}>
      <Stack spacing={3}>
        {products
          .filter((p) => p.categoryId === location.state.categoryId)
          .map((product) => (
            <Item name={product.name} id={product.id} calories={product.id}>
              {product.name}
            </Item>
          ))}
      </Stack>
    </Box>
  );
};
export default Products;
