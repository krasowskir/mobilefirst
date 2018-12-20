import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

import "./header.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="header" expand="lg">
        <NavbarBrand href="/">
          <h1 className="caption-nav">Agger</h1>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleOpen} className="navbar-dark" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/">
                <span>
                  About <i className="fas fa-home" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                <span>
                  Contact <i className="fas fa-phone" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">
                <span>
                  Login / Register <i className="fas fa-sign-in-alt" />
                </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <InputGroup id="header-search">
                <Input className="header__search" />
                <InputGroupAddon addonType="append" id="search-symbol" size="sm">
                  <InputGroupText size="sm">
                    <i className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
