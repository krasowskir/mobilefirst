import React from "react";
import "./sidebar.scss";

export default props => {
  const siteLabels = ["facebook", "twitter", "instagram", "pinterest", "linkedin"];
  const commentLabels = ["recent comments", "top rated comments", "recent posts", "top posts"];

  const siteFilters = siteLabels.map((elem, indx) => (
    <div className="form-check">
      <input type="checkbox" id={elem} />
      <label for={elem}> {elem}</label>
    </div>
  ));

  const commentFilters = commentLabels.map((elem, indx) => (
    <div className="form-check">
      <input type="checkbox" id={elem} />
      <label for={elem}> {elem}</label>
    </div>
  ));

  return (
    <div className="sidebar">
      <h4>Channels</h4>
      {siteFilters}
      <hr />
      <h4>Posts & Comments</h4>
      {commentFilters}
      <hr />
      <p>
        <a href="#">RSS Feed</a>
      </p>
    </div>
  );
};
