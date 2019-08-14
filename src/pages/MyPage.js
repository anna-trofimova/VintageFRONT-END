import React, { Component } from "react";
import myPageService from "../services/my-page-service";
import withAuth from "../components/withAuth";

class MyPage extends Component {
  // state = {
  //   id: user
  // }
  render() {
    console.log("from MyPage", this.props.user);
    const { user } = this.props;
    myPageService.myPage(user);
    return (
      <div>
        <p>{user.username}</p>
        {user.phone ? <p>{user.phone}</p> : null}
      </div>
    );
  }
}
export default withAuth(MyPage);
