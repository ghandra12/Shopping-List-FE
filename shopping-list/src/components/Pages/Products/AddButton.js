import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
const AddButton = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Quantity: </label>
      <input
        type="number"
        max="10"
        min="1"
        defaultValue={1}
        amount={props.amount}
        name={props.name}
      ></input>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        type="submit"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </form>
  );
};
export default AddButton;
