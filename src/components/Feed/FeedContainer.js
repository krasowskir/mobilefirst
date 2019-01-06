import React, { Component } from "react";
import FeedItem from "./FeedItem/FeedItem";
import { Button, Badge } from "reactstrap";
import Pagination from "./Pagination/Pagination";

import "./feed.scss";

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log("neue props: " + JSON.stringify(this.props.data));
    this.setState({
      data: this.props.data
    });
  }

  render() {
    console.log("data: " + JSON.stringify(this.props.data));
    console.log("laength: " + this.props.data.length);

    return (
      <div className="feed container">
        <div className="well">
          <h4>Aggegate your feeds with Agger</h4>
        </div>
        <div className="feed__content">{this.state.data != null && this.state.data.map(item => <FeedItem vorname={item.vorname} />)}</div>
        <div className="feed__footer">
          <p>
            <small className="float-left">Feed pages </small>
            <Badge className="feed__footer__badge" color="success">
              5
            </Badge>
          </p>

          <Pagination size={5} className="float-right" />
        </div>
      </div>
    );
  }
}
