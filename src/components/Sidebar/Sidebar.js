import React from "react";
import "./sidebar.scss";
import shortId from "short-id";

export default props => {
  const siteLabels = ["facebook", "twitter", "instagram", "pinterest", "linkedin"];
  const commentLabels = ["recent comments", "top rated comments", "recent posts", "top posts"];

  const siteFilters = siteLabels.map((elem, indx) => (
    <div key={shortId.generate()} className="form-check">
      <input type="checkbox" id={elem} />
      <label> {elem}</label>
    </div>
  ));

  const commentFilters = commentLabels.map((elem, indx) => (
    <li key={shortId.generate()} className="form-check">
      <input type="checkbox" id={elem} />
      <label> {elem}</label>
    </li>
  ));

  return (
    <div className="sidebar">
      <h4>Channels</h4>
      <ul className="sidebar__siteFilters">{siteFilters}</ul>
      <hr />
      <h4>Posts & Comments</h4>
      <ul className="sidebar__commentFilters">{commentFilters}</ul>
      <hr />
      <p>
        <a href="#">RSS Feed</a>
      </p>
    </div>
  );
};
