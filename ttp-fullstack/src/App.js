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

const App = () => {
  return (
    <div>
      {/* <Main /> */}
      {/* <SearchBar /> */}
      <ClippedDrawer />
      <Routes />
    </div>
  );
};

export default App;
