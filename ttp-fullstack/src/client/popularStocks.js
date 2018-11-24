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

class PopularStocks extends React.Component {
  render() {
    return (
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
        <CardMedia
          style={{ display: "flex" }}
          component="img"
          // height="40%"
          image="https://cdn140.picsart.com/279049216003201.jpg?c480x480"
          title="flames"
          // fullwidth="true"
        />
        <CardContent>
          <Typography variant="display3">
            Because girl, your stock is ON FI-YA!
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default connect()(PopularStocks);
