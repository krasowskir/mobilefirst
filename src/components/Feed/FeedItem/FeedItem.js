import React from "react";
import "./item.scss";

export default props => {
  console.log(props.vorname);
  return (
    <div className="row item">
      <div className="col-lg-12">
        <div className="post">
          <h4>
            <a href="#">{props.vorname}</a>
            <small>{props.alter}</small>
          </h4>
          <p>
            <small>
              Posted 5 hours ago on <a href="#" />
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};
