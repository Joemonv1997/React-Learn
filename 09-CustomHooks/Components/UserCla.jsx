import React from "react";
class UserCla extends React.Component {
  constructor(props) {
    super(props);
    console.log(`Child2 constructor ${this.props.name}`);
  }
  componentDidMount() {
    console.log(`Child2 Mount ${this.props.name}`);
  }
  render() {
    console.log(`Child2 Render ${this.props.name}`);
    return (
      <div>
        <h1>User {this.props.name} is a Class Based Component</h1>
      </div>
    );
  }
}
export default UserCla;
