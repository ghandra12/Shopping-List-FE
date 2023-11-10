import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import CartContent from "../../MyList/CartContent";

const LastList = (props) => {
  const navigate = useNavigate();
  const onClickCartButtonHandler = () => {
    navigate("/addagain");
  };
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CartContent />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={onClickCartButtonHandler}>
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
export default LastList;
