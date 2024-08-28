import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Phuc", age: 23 },
      { id: 2, name: "Khue", age: 25 },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = this.state.listUsers;
    listUserClone = listUserClone.filter((user) => user.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };
  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
        <br />
      </div>
    );
  }
}

export default Mycomponent;
