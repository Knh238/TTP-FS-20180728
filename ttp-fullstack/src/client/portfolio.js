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

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { stocks: [], currValue: 0 };
  }

  async componentWillMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const currUser = user.uid;
        var ref = firebase.database().ref(`users/${currUser}/portfolio/`);
        ref.on("value", function(snapshot) {
          let currPortfolio = snapshot.val();
          const holdings = [];
          const estVal = currPortfolio.estValueOfHoldings;
          for (let key in currPortfolio.CurrentHoldings) {
            holdings.push(currPortfolio.CurrentHoldings[key]);
          }
          self.setState({
            stocks: holdings,
            currValue: estVal
          });
        });
      }
    });
  }
  render() {
    console.log("this state -----", this.state.stocks);
    const stocks = this.state.stocks;

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
          {" "}
          my portfolio{" "}
        </Typography>
        <Table
          styles={{
            padding: 20,
            marginLeft: "20%"
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
              <TableCell string>Stock Name </TableCell>
              <TableCell numeric>Symbol</TableCell>
              <TableCell numeric>Total Invested</TableCell>
              <TableCell numeric>Current Value</TableCell>
              <TableCell numeric>Total Owned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.stocks
              ? this.state.stocks.map(stock => {
                  return (
                    <TableRow key={stock.key}>
                      <TableCell component="th" scope="row">
                        {stock.stockName}
                      </TableCell>
                      <TableCell>{stock.symbol}</TableCell>
                      <TableCell numeric>${stock.totalInvested}</TableCell>
                      <TableCell numeric>
                        $ {stock.totalInvested}/{stock.numberOfSharesOwned}
                      </TableCell>
                      <TableCell numeric>{stock.numberOfSharesOwned}</TableCell>
                      <Button
                        variant="raised"
                        style={{ backgroundColor: "pink" }}
                      >
                        {" "}
                        sell{" "}
                      </Button>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
        <div style={{ marginTop: 20 }}>
          <Typography variant="display3" align="center" textColor="navy">
            Total Est. Value of Current Holdings: ${this.state.currValue}
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default connect()(Portfolio);
