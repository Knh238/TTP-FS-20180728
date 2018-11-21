import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import // Login,
// Signup,
// UserHome,
Home from "./client/home";
// Tags,
// MyNotes,
// import {me} from './store'

export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  //   // this.props.gotUserList()
  // }
  render() {
    // const {isLoggedIn} = this.props

    return (
      // <Switch>
      <Route path="/" component={Home} />
      /* <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/ByTag" component={Tags} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */
      /* </Switch> */
    );
  }
}
