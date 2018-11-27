import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "../firebase";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import moment from "moment";
export default class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: "",
      symbol: "",
      cost: 0,
      numberOfShares: 0,
      bill: 0,
      availableFunds: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
  }

  componentDidMount() {
    const self = this;

    const stockProp = this.props.location.state;
    this.setState({
      stock: stockProp.name,
      cost: stockProp.cost,
      symbol: stockProp.symbol
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const currUser = user.uid;
        var ref = firebase.database().ref(`users/${currUser}/portfolio`);
        ref.on("value", function(snapshot) {
          let portfolioInfo = snapshot.val();

          self.setState({
            availableFunds: portfolioInfo.cashBalance
          });
        });
      }
    });
  }

  handleCalc() {
    const subTotal = this.state.cost * this.state.numberOfShares;
    console.log("subtotal in handlecal is---- ", subTotal);
    this.setState({ bill: subTotal });
  }

  handleSubmit() {
    const stockToBuy = this.state.stock;
    const costAtPurchase = this.state.cost;
    const numSharesToBuy = this.state.numberOfShares;
    const stockSymbol = this.state.symbol;
    const totalBill = this.state.cost * this.state.numberOfShares;
    const currAvail = this.state.availableFunds - this.state.bill;
    const dateBought = moment().format("MMM Do YY");
    const newBal = currAvail - totalBill;

    const transactionHistory = {
      stockName: stockToBuy,
      symbol: stockSymbol,
      SharePriceAtPurchase: costAtPurchase,
      numberOfShares: numSharesToBuy,
      totalInvested: totalBill,
      transactionDate: dateBought
    };

    const addToPortfolio = {
      stockName: stockToBuy,
      symbol: stockSymbol,
      numberOfSharesOwned: numSharesToBuy,
      totalInvested: totalBill
    };

    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        const currUser = user.uid;
        const newKey = await firebase
          .database()
          .ref(`users/${currUser}/portfolio/CurrentHoldings`)
          .push().key;
        const newKey2 = await firebase
          .database()
          .ref(`users/${currUser}/portfolio/transactionHistory`)
          .push().key;
        firebase
          .database()
          .ref(`users/${currUser}/portfolio/`)
          .child("cashBalance")
          .set(newBal);
        firebase
          .database()
          .ref(`users/${currUser}/portfolio/transactionHistory`)
          .child(newKey2)
          .set(transactionHistory);
        firebase
          .database()
          .ref(`users/${currUser}/portfolio/CurrentHoldings`)
          .child(newKey)
          .set(addToPortfolio);
      }
    });
    this.props.history.push(`/`);
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const stock = this.props.location.state;
    console.log("this state in biy is ------------", this.state);
    return (
      <div>
        <Typography
          variant="display4"
          style={{ backgroundColor: "#29B6F6", marginTop: 10 }}
          align="center"
        >
          {" "}
          Purchase form
        </Typography>

        <Card style={{ margin: 10 }}>
          <FormGroup style={{ padding: 10 }}>
            <div
              style={{
                marginBottom: 10,
                backgroundColor: "#80DEEA",
                padding: 20
              }}
            >
              <Typography variant="display3" align="center">
                {stock.name}
              </Typography>
              <Typography variant="display3" align="center">
                {stock.symbol}
              </Typography>
            </div>

            <div style={{ marginBottom: 10, marginTop: 10, padding: 20 }}>
              <Typography variant="display2" style={{ color: "pink" }}>
                {stock.cost}
              </Typography>

              <TextField
                size="large"
                id="outlined-number"
                label="Number of shares"
                value={this.state.numberOfShares}
                onChange={this.handleChange("numberOfShares")}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div style={{ padding: 20 }}>
              <Button
                variant="contained"
                size="medium"
                style={{
                  background: "#00ACC1",
                  borderRadius: 5,
                  border: 0,
                  color: "white",
                  height: 48,
                  width: "15%",
                  padding: "0 30px",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  fontSize: 30
                }}
                onClick={() => this.handleCalc()}
              >
                calculate cost{" "}
              </Button>

              <Typography variant="display1" style={{ padding: 10 }}>
                {" "}
                Estimated Cost : ${this.state.bill}
              </Typography>
              <Typography
                variant="display1"
                style={{ padding: 10, marginBottom: 20 }}
              >
                {" "}
                Available Funds : ${this.state.availableFunds}
              </Typography>

              <Button
                variant="contained"
                size="medium"
                onClick={() => this.handleSubmit()}
                style={{
                  background: "#FF4081",
                  borderRadius: 5,
                  border: 0,
                  color: "white",
                  height: 48,
                  width: "15%",
                  padding: "0 30px",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  fontSize: 35
                }}
              >
                Buy
              </Button>
            </div>
          </FormGroup>
        </Card>
      </div>
    );
  }
}
