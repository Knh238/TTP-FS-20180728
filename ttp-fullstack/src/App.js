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
        <div
          style={{
            position: "absolute",
            left: 0,
            width: "10%",
            height: "100%"
          }}
        >
          {/* <Main /> */}
          {/* <SearchBar /> */}
          <ClippedDrawer
            handleLogout={this.handleLogout}
            handleLogin={this.handleLogin}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "10%",
            width: "90%",
            top: "5%",
            height: "95%",
            padding: 10
          }}
        >
          {/* setProject={this.setProject}/> */}
          <Routes andleLogin={this.handleLogin} />
          {/* projectKey={this.state.key} */}
        </div>
      </div>
    );
  }
}

export default App;
