import React from "react";
import "./item.scss";

export default props => (
  <div className="row item">
    <div className="col-lg-12">
      <div className="post">
        <h4>
          <a href="#">{props.title}</a>
          <small>(url.com/goes/here)</small>
        </h4>
        <p>
          <small>
            Posted 5 hours ago on <a href={props.link.dest}>{props.link.name}</a>
          </small>
        </p>
      </div>
    </div>
  </div>
);
