import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "calories", label: "Calories per piece", minWidth: 120 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "right",
  },
];

const rows = [
  {
    name: "fish",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
  },
  {
    name: "pork",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
  },
  {
    name: "steak",
    id: "p1",
    calories: "206",
    categoryId: 1,
    description: "some desc",
  },
];
const LastList = (props) => {
  const navigate = useNavigate();
  const onClickCartButtonHandler = () => {
    navigate("/addagain");
  };
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow hover role="checkbox" key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        <TableCell>
                          <IconButton
                            aria-label="delete"
                            color="error"
                          ></IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
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
