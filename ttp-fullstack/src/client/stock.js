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
import { Link } from "react-router-dom";
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
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentWillMount() {
    const symbol = this.props.location.state;
    try {
      const { data } = await axios.get(
        `https://api.iextrading.com/1.0/stock/${symbol}/batch?types=quote,news,chart&range=1m&last=1`
      );
      console.log("data", data);
      this.setState(data);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log("----------this state", this.props.location.state);

    return (
      <div>
        <Typography
          variant="display4"
          style={{ backgroundColor: "#29B6F6" }}
          align="center"
        >
          Stock Info
        </Typography>
        {/* <Card
          style={{
            float: "none",
            width: "20%",
            height: "80%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {" "}
          <Typography
            variant="display4"
            style={{ backgroundColor: "#29B6F6" }}
            align="center"
          >
            Stock Info
          </Typography> */}
        {/* <CardMedia
            component="img"
            height="20%"
            image="https://cdn141.picsart.com/271471483023201.png?c480x480"
            title="cat money"
            fullwidth="true"
          /> */}
        {/* </Card> */}

        {this.state.quote ? (
          <Paper
            style={{
              marginLeft: "15%",
              backgroundColor: "white",
              width: "65%",
              height: "50%"
            }}
          >
            <Card style={{ backgroundColor: "#80DEEA" }}>
              <Typography variant="display3" align="center">
                {this.state.quote.companyName}
              </Typography>
              <Typography variant="display2" align="center">
                Symbol: {this.state.quote.symbol}
              </Typography>
            </Card>
            <Card style={{ backgroundColor: "#E8EAF6" }}>
              <Typography
                variant="display2"
                style={{ color: "black" }}
                align="center"
              >
                Current Price per Share:
              </Typography>
              <Typography
                variant="display4"
                style={{ color: "black" }}
                align="center"
              >
                ${this.state.quote.latestPrice}
              </Typography>
              <Typography
                variant="display2"
                style={{ color: "grey" }}
                align="center"
              >
                as of : {this.state.quote.latestTime}
              </Typography>
              {this.state.quote.change > 0 ? (
                <Typography
                  style={{ color: "green" }}
                  variant="display3"
                  align="center"
                >
                  {this.state.quote.change}(%{this.state.quote.changePercent})
                </Typography>
              ) : (
                <Typography
                  style={{ color: "red" }}
                  variant="display3"
                  align="center"
                >
                  {this.state.quote.change}(%{this.state.quote.changePercent})
                </Typography>
              )}
              }
              <Typography variant="display2" style={{ color: "black" }}>
                Previous Close:
              </Typography>
              <Typography variant="display2" style={{ color: "grey" }}>
                ${this.state.quote.previousClose}
              </Typography>
            </Card>
            <Card style={{ backgroundColor: "#E8EAF6" }}>
              <Typography
                variant="display2"
                style={{ color: "navy" }}
                align="right"
              >
                Highs & Lows For The Year:
              </Typography>
              <Typography
                variant="display2"
                style={{ color: "grey" }}
                align="right"
              >
                Highest : {this.state.quote.week52High}
              </Typography>
              <Typography
                variant="display2"
                style={{ color: "grey" }}
                align="right"
              >
                Lowest : {this.state.quote.week52Low}
              </Typography>
              <Card align="center">
                <Link
                  to={{
                    pathname: "/Buy",
                    state: {
                      name: this.state.quote.companyName,
                      cost: this.state.quote.latestPrice
                    }
                  }}
                >
                  <Button
                    variant="text"
                    label="buy"
                    style={{
                      backgroundColor: "#3F51B5",
                      marginBottom: 10,
                      marginTop: 10,
                      width: "30%",
                      height: "20%",

                      alignSelf: "center"
                    }}
                    labelStyle={{ color: "pink", fontSize: 30 }}
                  >
                    {" "}
                    Buy{" "}
                  </Button>
                </Link>
              </Card>
            </Card>
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default connect()(Stock);
