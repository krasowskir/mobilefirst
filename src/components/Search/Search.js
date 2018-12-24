import React, { Component } from "react";
import FeedContainer from "../Feed/FeedContainer";
import Sidebar from "../Sidebar/Sidebar";

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <FeedContainer />
          </div>
          <div className="col-xs-12 col-lg-3 ">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
