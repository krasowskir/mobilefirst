import React, { Component } from "react";
import FeedItem from "./FeedItem/FeedItem";
import { Button, Badge } from "reactstrap";
import Pagination from "./Pagination/Pagination";
import data from "../../Api";

import "./feed.scss";

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed container">
        <div className="well">
          <h4>Aggegate your feeds with Agger</h4>
        </div>
        <div className="feed__content">
          {data.links.map((link, indx) => (
            <FeedItem key={indx} link={link} title={link.title} />
          ))}
        </div>
        <div className="feed__footer">
          <p>
            <small className="float-left">Feed pages </small>
            <Badge className="feed__footer__badge" color="success">
              {data.links.length}
            </Badge>
          </p>

          <Pagination size={5} className="float-right" />
        </div>
      </div>
    );
  }
}
