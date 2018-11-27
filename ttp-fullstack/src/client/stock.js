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
import Paper from "@material-ui/core/Paper";

import { colors } from "@material-ui/core";
import axios from "axios";

const styles = {
  card: {
    maxWidth: 345,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  media: {
    objectFit: "cover"
  }
};

class Stock extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentWillMount() {
    // return async dispatch => {
    try {
      const { data } = await axios.get(
        "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5"
      );
      console.log("data", data);
      this.setState(data.AAPL);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log("----------this state", this.state);

    return (
      <div>
        <Card
          style={{
            float: "none",
            width: "20%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {" "}
          <Typography variant="display3" align="center">
            Stock Info
          </Typography>
          <CardMedia
            component="img"
            height="20%"
            image="https://cdn141.picsart.com/271471483023201.png?c480x480"
            title="cat money"
            fullwidth="true"
          />
          {/* {this.state.quote ? (
            <CardContent>
              <Typography variant="display3">
                {this.state.quote.latestPrice}
              </Typography>
            </CardContent>
          ) : null} */}
        </Card>
        {/* <Card
          style={{
            float: "none",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        > */}
        {/* <div> */}
        {this.state.quote ? (
          <Paper
            style={{
              marginLeft: "5%",
              backgroundColor: "white"
            }}
          >
            <Card style={{ backgroundColor: "#BBDEFB" }}>
              <Typography variant="display3" align="center">
                {this.state.quote.symbol}
                {this.state.quote.companyName}
              </Typography>
            </Card>
            <Card style={{ backgroundColor: "#E8EAF6" }}>
              <Typography
                style={{ color: "black" }}
                variant="display3"
                align="center"
              >
                change: {this.state.quote.change}
              </Typography>
              <Typography
                style={{ color: "black" }}
                variant="display3"
                align="center"
              >
                {"\n"}%{this.state.quote.changePercent}
              </Typography>
              <Typography variant="display2" style={{ color: "black" }}>
                {this.state.quote.latestPrice}@{this.state.quote.latestTime}
              </Typography>
              <Typography variant="display2" style={{ color: "black" }}>
                previous {this.state.quote.previousClose}
              </Typography>
            </Card>
            <Card style={{ backgroundColor: "#E8EAF6" }}>
              <Typography variant="display2" style={{ color: "black" }}>
                historyical info
              </Typography>
              <Typography variant="display2" style={{ color: "black" }}>
                highest:{this.state.quote.week52High}
              </Typography>
              <Typography variant="display2" style={{ color: "black" }}>
                lowest:{this.state.quote.week52Low}
              </Typography>
            </Card>
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default connect()(Stock);

// var d3 = require("d3"),
//     jsdom = require("jsdom");

// var document = jsdom.jsdom(),
//     svg = d3.select(document.body).append("svg");
//     import * as d3 from "d3";
