import { Component } from "react";
import Button from "../UI/Button/Button";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    //merges not overwrites
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <Button
          className={classes.button}
          onClick={this.toggleUsersHandler.bind(this)}
        >
          {this.state.showUsers ? "Hide" : "Show"} Users
        </Button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
