import React from "react";
import "./item.scss";

function getDurchschnitt(grades) {
  let sum = 0;
  grades.forEach(element => {
    sum += element.score;
  });
  let score = 0;
  score = Math.round(sum / grades.length);
  return score;
}

export default ({ name, restaurant_id, address, grades, cuisine, borough }) => {
  let stars = new Array();
  for (let i = 0; i < getDurchschnitt(grades); i++) {
    stars.push(<i className="far fa-star" />);
  }
  return (
    <div className="row item">
      <div className="col-lg-12">
        <div className="post">
          <div className="post__headline">
            <h4>
              <a href="#">{name}</a>
            </h4>
            <span>{stars}</span>
          </div>
          <hr />

          <small>
            <address>
              {address.street} {address.building}
              <br />
              {borough}
              {","}
              {address.zipcode}
            </address>
          </small>
        </div>
      </div>
    </div>
  );
};
