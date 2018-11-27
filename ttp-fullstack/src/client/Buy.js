import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "../firebase";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      projectId: "",
      assignMember: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const self = this;
    // const projectKey = this.props.projects[0].key;
    // const projMembers = this.props.projects[0].members;
    // self.setState({ projectId: projectKey, members: projMembers });
    //available funds
  }

  handleSubmit() {
    const self = this;

    //add stock to portfolio
    //reduce the avilable funds by amount caluclated

    // const assigned = this.state.assignMember;
    // const projectId = this.state.projectId;
    // const content = this.state.todo;
    // const newKey = firebase
    //   .database()
    //   .ref("tasks")
    //   .push().key;
    // const ref = firebase.database().ref("users");
    // ref.on("value", function(snapshot) {
    //   const users = snapshot.val();
    //   let task;
    //   for (var key in users) {
    //     if (users[key].email === assigned) {
    //       task = {
    //         projectId,
    //         assigned: users[key].displayName,
    //         completed: false,
    //         content
    //       };
    //     }
    //   }
    //   firebase
    //     .database()
    //     .ref("tasks")
    //     .child(newKey)
    //     .set(task);
    //   self.setState({
    //     todo: "",
    //     assignMember: ""
    //   });
    //});
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    // const members = this.state.members;

    console.log(this.state);
    return (
      <div>
        {/* <Card> */}
        <Typography variant="display1"> Purchase form</Typography>
        {/* </Card> */}
        <Card style={{ margin: 10 }}>
          <FormGroup style={{ padding: 10 }}>
            <div style={{ marginBottom: 10 }}>
              <InputLabel>Stock Symbol</InputLabel>
              <Input
                varient="outlined"
                margin="normal"
                //onChange={event => this.setState({ todo: event.target.value })}
                //   value={this.state.todo}
              />
              <TextField
                id="outlined-simple-start-adornment"
                //   className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="With outlined TextField"
                InputProps={{
                  startAdornment: <InputAdornment position="start" />
                }}
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <InputLabel>Number of shares </InputLabel>
              <TextField
                id="outlined-number"
                label="Number with drop down"
                //   value={this.state.age}
                //   onChange={this.handleChange("age")}
                type="number"
                //   className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-adornment"
                //   className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Number"
                value={this.state.numShares}
                onChange={this.handleChange("amount")}
                InputProps={{
                  startAdornment: <InputAdornment position="start" />
                }}
              />
              {/* <Select
              fullWidth
            //   onChange={event =>
            //     this.setState({ assignMember: event.target.value })
            //   }
            //   value={this.state.assignMember}
            > */}
              {/* {members ? (
                members.map(member => (
                  <MenuItem key={member} value={member}>
                    {member}
                  </MenuItem>
                ))
              ) : (
                <MenuItem>No members in this project.</MenuItem>
              )} */}
              {/* </Select> */}
            </div>
            <Button
              variant="contained"
              size="medium"
              style={{
                background: "#00ACC1",
                borderRadius: 3,
                border: 0,
                color: "white",
                height: 48,
                width: "15%",
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
              }}
              onClick={() => this.handleSubmit()}
            >
              calculate cost{" "}
            </Button>
            <div>
              <Typography variant="display1"> estimated cost: </Typography>
              <Typography variant="display1"> available funds: </Typography>
            </div>
            <Button
              variant="contained"
              size="medium"
              onClick={() => this.handleSubmit()}
              style={{
                background: "#FF5252",
                borderRadius: 3,
                border: 0,
                color: "white",
                height: 48,
                width: "15%",
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
              }}
            >
              Buy!
            </Button>
          </FormGroup>
        </Card>
      </div>
    );
  }
}

// BuyForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(BuyForm);
