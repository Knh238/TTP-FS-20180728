import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import InsertChart from "@material-ui/icons/InsertChart";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ForumIcon from "@material-ui/icons/Forum";
import WorkIcon from "@material-ui/icons/Work";
import AccountIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
//import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Avatar from "@material-ui/core/Avatar";
//import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
// import { withStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import firebase from "../firebase";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class ClippedDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // projects: [],
      user: {},
      login: null,
      searchStock: ""
    };
    this.logOut = this.logOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.clickNav = this.clickNav.bind(this);
  }

  componentDidMount() {
    const self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.setState({ user });
        // const ref = firebase.database().ref("projects");
        // ref.on("value", function(snapshot) {
        //   let userProjects = [];
        //   const projects = snapshot.val();
        //   for (let key in projects) {
        //     if (projects[key].members) {
        //       const members = projects[key].members;
        //       const name = projects[key].name;
        //       const color = projects[key].color;
        //       if (members.includes(user.email)) {
        //         userProjects.push({ name, key, color });
        //       }
        //     }
        //   }
        //   self.setState({ projects: userProjects });
        // });
      }
    });
  }
  // clickNav(key) {
  //   //this.props.setProject(key)
  // }
  handleSubmit() {
    const self = this;
    // const stock = this.state.eventName;
    self.setState({ searchSock: "" });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("Sign out!");
          console.log(firebase.auth().currentUser);
        },
        function(error) {
          console.error(error);
        }
      );
    this.setState({
      user: {}
    });
    this.props.handleLogout();
  }

  render() {
    const { classes } = this.props;
    const { user, projects } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ background: "#26C6DA" }}
        >
          <Toolbar>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={event =>
                  this.setState({ searchStock: event.target.value })
                }
                value={this.state.searchStock}
              />
            </div>

            <IconButton
              component={Link}
              //to="/Stock"
              to={{
                pathname: "/Stock",
                state: this.state.searchStock
              }}
            >
              <SearchIcon />
            </IconButton>

            <div style={{ marginLeft: "20%" }}>
              {/* <div className={classes.grow} /> */}
              <Typography
                // className={classes.title}
                style={{ flex: "center" }}
                variant="h5"
                color="inherit"
                noWrap
              >
                Tech Talent Pipeline: Fullstack App
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button key={"Home"} component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Buy"} />
            </ListItem>
            <ListItem button key={"Buy"} component={Link} to="/buy">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Buy"} />
            </ListItem>

            <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              to="/popularStocks"
            >
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary={"Hot Stocks"} />
            </ListItem>

            <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              to="/stock"
            >
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText primary={"indiv stock"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"my profile"}
              title="profile"
              component={Link}
              // to="/profile"
              to="/stockCat"
            >
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>

            <ListItem
              button
              key={"Account Summary"}
              title="AccountSummary"
              component={Link}
              to="/barChart"
              //eventually account summary
            >
              <ListItemIcon>
                <InsertChart />
              </ListItemIcon>
              <ListItemText primary={"Account Summary"} />
            </ListItem>

            <ListItem
              button
              key={"portfolio"}
              title="portfolio"
              component={Link}
              to="/portfolio"
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Portfolio"} />
            </ListItem>

            <ListItem
              button
              key={"Transactions"}
              title="profile"
              component={Link}
              to="/transactions"
            >
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary={"Transactions"} />
            </ListItem>

            {user.uid ? (
              <ListItem>
                <Link to="/" replace>
                  <Avatar
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "white",
                      color: "grey"
                    }}
                    onClick={this.logOut}
                  >
                    <Icon>logout</Icon>
                  </Avatar>
                </Link>
                {/* </Tooltip> */}
              </ListItem>
            ) : null}
          </List>
        </Drawer>
      </div>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);
