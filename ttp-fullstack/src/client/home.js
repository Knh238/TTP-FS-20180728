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
import { Link } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 345,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};

class Home extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#80DEEA" }}>
        >
        <div>
          <Typography variant="display4" align="center">
            Welcome!
          </Typography>
          <Typography variant="display2" align="center">
            You can search for stocks by symbol in search bar in upper left-hand
            corner
          </Typography>
        </div>
        <div style={{ backgroundColor: "#80DEEA" }}>
          <Button
            variant="contained"
            color="primary"
            title="login"
            style={{
              marginLeft: "25%",
              height: 200,
              width: 200,
              borderRadius: 160,
              fontSize: 30
            }}
          >
            <Link to="/login">Log in</Link>
          </Button>

          <Button
            variant="contained"
            style={{
              marginLeft: "30%",
              height: 200,
              width: 200,
              borderRadius: 160,
              fontSize: 30
            }}
          >
            <Link to="/signup">sign-up</Link>
          </Button>
        </div>
        <Card
          style={{
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10
          }}
        >
          <CardMedia
            component="img"
            height="30%"
            //image="https://cdn163.picsart.com/223256630016202.jpg?c480x480"
            image="https://cdn141.picsart.com/271471483023201.png?c480x480"
            title="home"
            width="30%"
          />
        </Card>
      </div>
    );
  }
}

export default connect()(Home);
