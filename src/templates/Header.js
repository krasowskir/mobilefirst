import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Input, InputGroup, InputGroupAddon } from "reactstrap";

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
            <NavLink href="#" id="search-trigger" />
            <div id="header-search" className="container">
              <div className="row">
                <div className="col-lg-12">
                  <InputGroup>
                    <Input placeholder="suche..." />
                    <InputGroupAddon addonType="append">
                      <i className="fa fa-search" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
