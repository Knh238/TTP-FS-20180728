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
  render() {
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
        <CardContent>
          <Typography variant="display3">Your financial advisor</Typography>
        </CardContent>
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
