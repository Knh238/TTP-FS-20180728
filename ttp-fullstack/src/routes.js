import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import {
  SearchBar,
  Home,
  Main,
  Stock,
  Portfolio,
  PopularStocks,
  Calculator,
  LoginForm,
  SignUpForm,
  BuyForm,
  TransactionList,
  StockCat,
  BarChart
} from "./client";
// import // Login,
// // Signup,
// // UserHome,
// Home from "./client/home";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stock" component={Stock} />
        <Route exact path="/popularStocks" component={PopularStocks} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/buy" component={BuyForm} />
        <Route exact path="/transactions" component={TransactionList} />
        <Route exact path="/stockCat" component={StockCat} />
        <Route exact path="/barChart" component={BarChart} />
      </Switch>
    );
  }
}

/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */
