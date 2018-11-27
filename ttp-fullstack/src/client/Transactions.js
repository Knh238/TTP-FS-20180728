import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// var d3 = require("d3"),
//     jsdom = require("jsdom");

// var document = jsdom.jsdom(),
//     svg = d3.select(document.body).append("svg");
//     import * as d3 from "d3";

// const styles = {
//   card: {
//     maxWidth: 345,
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around"
//   },
//   media: {
//     objectFit: "cover"
//   },
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// };
// const styles = theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// });
let id = 0;
function createData(
  name,
  symbol,
  purchasedValue,
  currentValue,
  Totalowned,
  totalValue
) {
  id += 1;
  return {
    name,
    symbol,
    purchasedValue,
    currentValue,
    Totalowned,
    totalValue
  };
}

class TransactionList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const rows = [
      createData("stock 1", 159, 6.0, 25, 24, 4.0),
      createData("stock 2", 237, 9.0, 25, 37, 4.3),
      createData("stock 3", 262, 16.0, 25, 24, 6.0),
      createData("stock 4", 305, 3.7, 25, 67, 4.3),
      createData("stock 5", 356, 16.0, 25, 49, 3.9)
    ];
    return (
      // <Card
      //   style={{
      //     float: "none",
      //     width: "55%",
      //     marginLeft: "auto",
      //     marginRight: "auto"
      //   }}
      // >
      //   {" "}
      //   <Typography variant="display3" align="center">
      //     my portfolio
      //   </Typography>
      //   <CardMedia
      //     component="img"
      //     height="50%"
      //     image="/public/cloud.jpg"
      //     title="Contemplative Reptile"
      //     fullwidth="true"
      //   />
      //   <CardContent>
      //     <Typography variant="display3">stocks stocks things</Typography>
      //   </CardContent>
      // </Card>
      <Paper
        styles={{
          // width: "60%",
          // position: "relative",
          // marginTop: theme.spacing.unit * 3,
          //padding: 20
          overflowX: "auto",
          maxWidth: 345,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <Typography variant="h4" style={{ color: "red", marginLeft: 20 }}>
          <p>notes for next steps:</p>
          <p>
            <p>could also be a set of cards</p>
            <p>could just be a list that allowed multiline</p>
          </p>
        </Typography>
        <Typography align="center" variant="h1">
          Transaction History
        </Typography>
        <Table
          styles={{
            padding: 20
            // minWidth: 600
          }}
        >
          <TableHead
            styles={{
              marginTop: 50
              // minWidth: 600
            }}
          >
            <TableRow>
              <TableCell string>My portfolio</TableCell>
              <TableCell numeric>Symbol</TableCell>
              <TableCell numeric>purchase Value </TableCell>
              <TableCell numeric>Current Value</TableCell>
              <TableCell numeric>Total Owened</TableCell>
              <TableCell numeric>Total Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.symbol}</TableCell>
                  <TableCell numeric>{row.purchasedValue}</TableCell>
                  <TableCell numeric>{row.currentValue}</TableCell>
                  <TableCell numeric>{row.Totalowned}</TableCell>
                  <TableCell numeric>{row.totalValue}</TableCell>
                  <Button variant="raised" style={{ backgroundColor: "pink" }}>
                    {" "}
                    sell{" "}
                  </Button>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect()(TransactionList);
