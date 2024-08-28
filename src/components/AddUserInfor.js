import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "Phuc",
    age: 23,
    addresss: "GONOSEN",
  };

  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  };

  handleOnChangeAge = (event) => {
    this.setState({ age: event.target.value });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form
          action=""
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label htmlFor="">Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />

          <label htmlFor="">Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
