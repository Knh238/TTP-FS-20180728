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
import twitter from "../twitterApi";
import { colors } from "@material-ui/core";
import axios from "axios";
// var Twitter = require("twitter-node-client").Twitter;
// var key = require("....../secrets");
// var twitter = new Twitter(key);

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
    // var Twitter = require("twitter");

    // var success = function(data) {
    //   console.log("Data [%s]", data);
    // };

    // var error = function(err, response, body) {
    //   console.log("ERROR [%s]", err);
    // // };
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
  // }

  // twitter.getUser(
  //   { screen_name: "20pCodependence", count: "10" },
  //   error,
  //   success
  // );
  // axios.get(
  //   "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5",
  //   success,
  //   error
  // );

  // twitter.getSearch(
  //   {
  //     q: " movie -scary :) since:2013-12-27",
  //     count: 10,
  //     result_type: "popular"
  //   },

  //   error,
  //   success
  // );
  // getSearch.header({ "Access-Control-Allow-Origin": "yes" });

  render() {
    console.log("this state", this.state);
    return (
      <Card
        style={{
          float: "none",
          width: "55%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {" "}
        <Typography variant="display3" align="center">
          my portfolio
        </Typography>
        <CardMedia
          component="img"
          height="50%"
          image="https://cdn141.picsart.com/271471483023201.png?c480x480"
          title="cat money"
          fullwidth="true"
        />
        {this.state.quote ? (
          <CardContent>
            <Typography variant="display3">
              {this.state.quote.latestPrice}
            </Typography>
          </CardContent>
        ) : null}
      </Card>
    );
  }
}

export default connect()(Stock);

// var d3 = require("d3"),
//     jsdom = require("jsdom");

// var document = jsdom.jsdom(),
//     svg = d3.select(document.body).append("svg");
//     import * as d3 from "d3";
