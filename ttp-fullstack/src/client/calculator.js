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

class Calculator extends React.Component {
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
          PopularStocks
        </Typography>
        <CardMedia
          component="img"
          height="50%"
          image="https://cdn130.picsart.com/273322670015201.jpg?c480x480"
          title="Contemplative Reptile"
          fullwidth="true"
        />
        <CardContent>
          <Typography variant="display3">are you ready for it?</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default connect()(Calculator);
