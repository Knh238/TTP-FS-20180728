import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import Footer from './Footer'

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
// import CssBaseline from '@material-ui/core/CssBaseline'
import ButtonBase from "@material-ui/core/ButtonBase";

import Paper from "@material-ui/core/Paper";
//font-family: 'Chakra Petch', sans-serif;
// font-family: 'Bitter', serif;
// font-family: 'Fahkwang', sans-serif;
// import Navbar from './Navbar'

// const styles = {

class Main extends React.Component {
  state = {
    open: false
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div>
        {/* <div> */}
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          style={{
            // background: 'linear-gradient(45deg, #98FB98 30%, #87CEFA 90%)'
            background: "cadetBlue"
          }}
        >
          <Toolbar disableGutters={!open} height={"20%"}>
            <Button
              variant="outlined"
              style={{
                color: "black",
                fontFamily: "Chakra Petch",
                marginLeft: 20,
                width: "10%"
              }}
            >
              About
              {/* <ContactMailOutlinedIcon style={{marginLeft: 3}} /> */}
            </Button>

            <Button
              variant="outlined"
              style={{
                color: "black",
                fontFamily: "Chakra Petch",
                marginLeft: 20,
                width: "10%"
              }}
            >
              Contact
            </Button>
            <Typography
              // variant="display3"
              color="black"
              centered="true"
              style={{
                color: "black",
                fontSize: 40,
                float: "none",
                width: "300px",
                // fontFamily: 'Chakra Petch',
                marginLeft: "25%"
                // marginRight: 'auto'
              }}
            >
              TTP app
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
// Main.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// }
export default Main;
