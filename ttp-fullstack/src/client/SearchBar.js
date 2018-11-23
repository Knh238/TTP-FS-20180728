// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import { withStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import { connect } from "react-redux";
// // import miniDrawer from "./Drawer";
// import Drawer from "@material-ui/core/Drawer";

// const styles = theme => ({
//   root: {
//     width: "100%"
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   // title: {
//   //   display: "none",
//   //   [theme.breakpoints.up("sm")]: {
//   //     display: "block"
//   //   }
//   // },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginRight: theme.spacing.unit * 2,
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing.unit * 3,
//       width: "auto"
//     }
//   },
//   searchIcon: {
//     width: theme.spacing.unit * 9,
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "right"
//   },
//   inputRoot: {
//     color: "inherit",
//     width: "100%"
//   },
//   inputInput: {
//     paddingTop: theme.spacing.unit,
//     paddingRight: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//     paddingLeft: theme.spacing.unit * 10,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: 200
//     }
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex"
//     }
//   }
// });
// class SearchBar extends React.Component {
//   state = {
//     anchorEl: null,
//     open: false
//   };
// }
//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   handleProfileMenuOpen = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   // handleMenuClose = () => {
//   //   this.setState({ anchorEl: null });

//   // handleMenuBarOpen = () => {
//   //   this.setState({ menuOpen: true });
//   // };

//   handleMenuBar = () => {
//     this.setState({ menuOpen: !this.state.menuOpen });
//   };

//   render(){
//     const { anchorEl } = this.state;
//     const { classes } = this.props;
//     const isMenuOpen = Boolean(anchorEl);
//     // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const renderMenu = (
//       <Menu
//         anchorEl={anchorEl}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
//         <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
//       </Menu>
//     );

//     return (
//       <div className={classes.root}>
//         <AppBar position="static" style={{ background: "#26C6DA" }}>
//           <Toolbar>
//             <IconButton
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={() => this.handleMenuBar()}
//             >
//               <MenuIcon />
//             </IconButton>
//             {/* {this.state.menuOpen ? ( */}
//               <Drawer
//                 variant="permanent"
//                 className={classNames(classes.drawer, {
//                   [classes.drawerOpen]: this.state.open,
//                   [classes.drawerClose]: !this.state.open
//                 })}
//                 classes={{
//                   paper: classNames({
//                     [classes.drawerOpen]: this.state.open,
//                     [classes.drawerClose]: !this.state.open
//                   })
//                 }}
//                 open={this.state.open}
//               >
//                 <div className={classes.toolbar}>
//                   <IconButton onClick={this.handleDrawerClose}>
//                     {theme.direction === "rtl" ? (
//                       <ChevronRightIcon />
//                     ) : (
//                       <ChevronLeftIcon />
//                     )}
//                   </IconButton>
//                 </div>
//                 <Divider />
//                 <List>
//                   {["Inbox", "Starred", "Send email", "Drafts"].map(
//                     (text, index) => (
//                       <ListItem button key={text}>
//                         <ListItemIcon>
//                           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                         </ListItemIcon>
//                         <ListItemText primary={text} />
//                       </ListItem>
//                     )
//                   )}
//                 </List>
//                 <Divider />
//                 <List>
//                   {["All mail", "Trash", "Spam"].map((text, index) => (
//                     <ListItem button key={text}>
//                       <ListItemIcon>
//                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                       </ListItemIcon>
//                       <ListItemText primary={text} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Drawer>
//             )
//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//               />
//             </div>
//             <div className={classes.grow} />
//             <Typography
//               // className={classes.title}
//               style={{ float: "center" }}
//               variant="h6"
//               color="inherit"
//               noWrap
//               center
//             >
//               Tech Talent Pipeline: Fullstack App
//             </Typography>
//             <div className={classes.sectionDesktop}>
//               <IconButton color="inherit">
//                 <Badge badgeContent={17} color="secondary">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               {/* <IconButton
//                 aria-owns={isMenuOpen ? "material-appbar" : undefined}
//                 aria-haspopup="true"
//                 onClick={this.handleProfileMenuOpen}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton> */}
//             </div>
//           </Toolbar>
//         </AppBar>
//         {renderMenu}
//       </div>
//     );

//    }

// SearchBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(SearchBar);
// // export default SearchBar);
