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

class StockCat extends React.Component {
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
          Stock Info
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

export default connect()(StockCat);
