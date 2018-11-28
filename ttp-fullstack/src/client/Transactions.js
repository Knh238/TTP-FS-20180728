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
import firebase from "../firebase";

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
    this.state = { transactions: [] };
  }
  async componentWillMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const currUser = user.uid;
        var ref = firebase
          .database()
          .ref(`users/${currUser}/portfolio/transactionHistory`);
        ref.on("value", function(snapshot) {
          let currPortfolio = snapshot.val();
          const holdings = [];
          for (let key in currPortfolio) {
            holdings.push(currPortfolio[key]);
          }
          self.setState({
            transactions: holdings
          });
        });
      }
    });
  }

  render() {
    console.log("this state -----", this.state.transactions);
    const stocks = this.state.transactions;
    return (
      <Paper
        styles={{
          overflowX: "auto",
          maxWidth: 345,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
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
              <TableCell string>date</TableCell>
              <TableCell numeric>Stock Name</TableCell>
              <TableCell numeric>Symbol</TableCell>
              <TableCell numeric>purchase Value </TableCell>
              <TableCell numeric>Current Value</TableCell>
              <TableCell numeric>Total Owened</TableCell>
              <TableCell numeric>Total Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.transactions
              ? stocks.map(stock => {
                  return (
                    <TableRow key={stock.key}>
                      <TableCell numeric>{stock.transactionDate}</TableCell>
                      <TableCell component="th" scope="row">
                        {stock.stockName}
                      </TableCell>
                      <TableCell numeric>{stock.symbol}</TableCell>
                      <TableCell numeric>
                        ${stock.SharePriceAtPurchase}
                      </TableCell>
                      <TableCell numeric>
                        ${stock.SharePriceAtPurchase}
                      </TableCell>
                      <TableCell numeric>{stock.numberOfShares}</TableCell>
                      <TableCell numeric>${stock.totalInvested}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect()(TransactionList);
