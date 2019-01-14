import React from "react";
import shortId from "short-id";
import italy from "../../../../public/imgs/italy.svg";
import unitedStates from "../../../../public/imgs/united-states.svg";
import france from "../../../../public/imgs/france.svg";
import ireland from "../../../../public/imgs/ireland.svg";
import japan from "../../../../public/imgs/japan.svg";
import greece from "../../../../public/imgs/greece.svg";
import spain from "../../../../public/imgs/spain.svg";
import latin from "../../../../public/imgs/puerto-rico.svg";
import star from "../../../../public/imgs/star.svg";
import "./item.scss";

function getDurchschnitt(grades) {
  let sum = 0;
  grades.forEach(element => {
    sum += element.score;
  });
  let score = 0;
  score = Math.round(sum / (grades.length * 2));
  return score;
}

export default ({ name, restaurant_id, address, grades, cuisine, borough }) => {
  let stars = new Array();
  for (let i = 0; i < getDurchschnitt(grades); i++) {
    stars.push(<img src={star} key={shortId.generate()} className="post__star" />);
  }

  let mycuisine = null;
  switch (cuisine) {
    case "American":
      mycuisine = unitedStates;
      break;

    case "Italian":
      mycuisine = italy;
      break;

    case "French":
      mycuisine = france;
      break;

    case "Irish":
      mycuisine = ireland;
      break;

    case "Japanese":
      mycuisine = japan;
      break;

    case "Latin (Cuban, Dominican, Puerto Rican, South & Central American)":
      mycuisine = latin;
      break;

    case "Spanish":
      mycuisine = spain;
      break;

    case "Greek":
      mycuisine = greece;
      break;
  }
  return (
    <li>
      <div className="row item">
        <div className="col-lg-12">
          <div className="post">
            <div className="post__headline">
              <h4>
                <a href="#">{name}</a>
              </h4>
              <span>{stars}</span>
            </div>
            <small className="post__id">{restaurant_id}</small>
            <hr />

            <div className="post__body">
              <small>
                <address>
                  {address.street} {address.building}
                  <br />
                  {borough}
                  {","}
                  {address.zipcode}
                </address>
              </small>
              {<img src={mycuisine} className="post__body__img" />}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
