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
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

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

class PopularStocks extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentWillMount() {
    // return async dispatch => {
    try {
      const { data } = await axios.get(
        "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,amzn&types=quote,news,chart&range=1m&last=5"
      );
      const dataArr = [];
      console.log("data", data);
      dataArr.push(data.AMZN);
      dataArr.push(data.FB);
      dataArr.push(data.TSLA);
      dataArr.push(data.AAPL);
      this.setState({
        stocks: dataArr
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log("this state in pop stocks", this.state.stocks);
    return (
      <div>
        <Card
          style={{
            float: "none",
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10
          }}
        >
          {" "}
          <Typography variant="display3" align="center">
            PopularStocks
          </Typography>
        </Card>
        {this.state.stocks
          ? this.state.stocks.map(stock => (
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
                    {stock.quote.companyName}
                  </Typography>
                  <Typography variant="display2" align="center">
                    Symbol: {stock.quote.symbol}
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
                    ${stock.quote.latestPrice}
                  </Typography>
                  <Typography
                    variant="display2"
                    style={{ color: "grey" }}
                    align="center"
                  >
                    as of : {stock.quote.latestTime}
                  </Typography>
                  {stock.quote.change > 0 ? (
                    <Typography
                      style={{ color: "green" }}
                      variant="display3"
                      align="center"
                    >
                      {stock.quote.change}(%{stock.quote.changePercent})
                    </Typography>
                  ) : (
                    <Typography
                      style={{ color: "red" }}
                      variant="display3"
                      align="center"
                    >
                      {stock.quote.change}(%{stock.quote.changePercent})
                    </Typography>
                  )}
                  }
                  <Typography variant="display2" style={{ color: "black" }}>
                    Previous Close:
                  </Typography>
                  <Typography variant="display2" style={{ color: "grey" }}>
                    ${stock.quote.previousClose}
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
                    Highest : {stock.quote.week52High}
                  </Typography>
                  <Typography
                    variant="display2"
                    style={{ color: "grey" }}
                    align="right"
                  >
                    Lowest : {stock.quote.week52Low}
                  </Typography>
                  <Card align="center">
                    <Link
                      to={{
                        pathname: "/Buy",
                        state: {
                          name: stock.quote.companyName,
                          cost: stock.quote.latestPrice,
                          symbol: stock.quote.symbol
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
            ))
          : null}
      </div>
    );
  }
}

export default connect()(PopularStocks);
