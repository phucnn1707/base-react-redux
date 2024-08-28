import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div className="display-infor-container">
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <div>
                <button
                  onClick={() => {
                    this.props.handleDeleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
