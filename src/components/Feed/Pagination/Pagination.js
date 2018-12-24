import React from "react";

export default props => {
  let size = !!props.size ? props.size : 3;
  let buttons = new Array();

  for (var i = 1; i <= size; i++) {
    buttons.push(
      <li className="page-item">
        <a href="#" className="page-link">
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="pagination between search items">
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link">
            Vorherige
          </a>
        </li>
        {buttons}
        <li className="page-item">
          <a href="#" className="page-link">
            Nächste
          </a>
        </li>
      </ul>
    </nav>
  );
};
