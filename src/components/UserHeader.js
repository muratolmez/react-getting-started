import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = state => {
  return state.users;
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
