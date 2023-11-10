import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
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
const CartContent = (props) => {
  return (
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
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CartContent;
