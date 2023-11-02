import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
const AddButton = (props) => {
  //const [number, setNumber] = useState(1);
  // const onChangeHandler = (event) => {
  //   setNumber(event.target.value);
  // };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Amount: </label>
      <input
        type="number"
        max="10"
        min="1"
        defaultValue={1}
        onChange={props.onChange}
        amount={props.amount}
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
