import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(`Child constructor ${this.props.name}`);
  }
  componentDidMount() {
    console.log(`Child Mount ${this.props.name}`);
  }
  render() {
    console.log(`Child Render ${this.props.name}`);
    return (
      <div>
        <h1>User {this.props.name} is a Class Based Component</h1>
      </div>
    );
  }
}
export default UserClass;
