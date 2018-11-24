// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
// import Navbar from "./components/Navbar";
import Main from "./client/Main";
import SearchBar from "./client/SearchBar";
import ClippedDrawer from "./client/Drawer";
import Routes from "./routes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      login: false
      //key: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //this.setProject = this.setProject.bind(this);
  }

  handleLogin(user) {
    this.setState({
      user: user,
      login: true
    });
  }

  handleLogout() {
    this.setState({
      user: {},
      login: false
    });
  }

  // setProject(key) {
  //   this.setState({ key });
  // }
  //const App = () => {
  render() {
    return (
      <div>
        {/* <Main /> */}
        {/* <SearchBar /> */}
        <ClippedDrawer
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
        {/* setProject={this.setProject}/> */}
        <Routes andleLogin={this.handleLogin} />
        {/* projectKey={this.state.key} */}
      </div>
    );
  }
}

export default App;
