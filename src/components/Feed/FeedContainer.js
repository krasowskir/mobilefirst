import React, { Component } from "react";
import FeedItem from "./FeedItem/FeedItem";
import { Button, Badge } from "reactstrap";
import MyPagination from "../MyPagination/MyPagination";
import shortId from "short-id";

import "./feed.scss";

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      amount: null,
      pageSize: null
    };
    this.computePageLength = this.computePageLength.bind(this);
  }

  componentDidMount() {
    console.log("neue props: " + JSON.stringify(this.props.data));
    this.setState({
      data: this.props.data,
      amount: this.props.amount,
      pageSize: this.props.pageSize
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let { data, amount, pageSize } = prevState;
    if (prevState.data !== nextProps.data) {
      console.log("derived state");
      return { data: nextProps.data, amount: nextProps.amount, pageSize: nextProps.pageSize };
    } else {
      return null;
    }
  }

  computePageLength(amount, limit) {
    console.log("amount: " + amount + " limit: " + limit);
    let base = amount / limit;
    if (base === amount * limit) {
      return base;
    } else {
      return base + 1;
    }
  }

  render() {
    return (
      <div className="feed container">
        <div className="well">
          <h4>Richard's Restaurant Suche</h4>
        </div>
        <ul className="feed__content">{this.state.data != null && this.state.data.map(item => <FeedItem {...item} key={shortId.generate()} />)}</ul>
        <hr />
        <div className="feed__footer">
          <p>
            <small className="float-left">Feed pages </small>
          </p>
          <Badge className="feed__footer__badge" color="success">
            {this.state.data != null && this.props.amount}
          </Badge>

          <MyPagination
            size={this.computePageLength(this.state.amount, this.state.pageSize)}
            updateLimit={this.props.updateLimit}
            updatePage={this.props.updatePage}
            page={this.props.page}
          />
        </div>
      </div>
    );
  }
}
