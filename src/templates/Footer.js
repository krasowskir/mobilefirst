import React from "react";
import "./footer.scss";

export default () => (
  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-inline footer">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-pinterest-square" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
          <p>&copy; 2015 Agger</p>
        </div>
      </div>
    </div>
  </footer>
);
