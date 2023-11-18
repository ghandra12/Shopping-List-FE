import * as React from "react";
import "./Category.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Category = (props) => {
  return (
    <Card sx={{ maxWidth: 345, height: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"

          // src={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="text.secondary"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See more
        </Button>
      </CardActions>
    </Card>
  );
};
export default Category;
