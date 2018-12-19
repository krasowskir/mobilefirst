import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";

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
      <Navbar className="header">
        <NavbarBrand href="/">
          <h1 className="caption-nav">Agger</h1>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleOpen} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">
                About <i class="fas fa-home" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Login / Register</NavLink>
            </NavItem>
            <div id="header-search">
              <i className="fa fa-search" />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
