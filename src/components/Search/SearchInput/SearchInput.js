import React from "react";
import PropTypes from "prop-types";
import "./searchInput.scss";

import { InputGroup, InputGroupAddon, Input, InputGroupText } from "reactstrap";

const SearchInput = props => (
  <InputGroup>
    <Input placeholder="Suche..." onChange={props.inputChange} />
    <InputGroupAddon addonType="append" onClick={props.search} className="addon">
      <InputGroupText size="sm">
        <i className="fa fa-search" />
      </InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

SearchInput.propTypes = {
  search: PropTypes.func,
  inputChange: PropTypes.func
};

export default SearchInput;
