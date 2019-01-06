import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import GenericModal from "../components/Modal/GenericModal";

import "./header.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isAboutOpen: false,
      isContactOpen: false,
      isLoginOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleAbout() {
    this.setState({
      isAboutOpen: !this.state.isAboutOpen
    });
  }
  toggleContact() {
    this.setState({
      isContactOpen: !this.state.isContactOpen
    });
  }
  toggleLogin() {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen
    });
  }

  onClickSearch() {}

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
              <NavLink onClick={this.toggleAbout}>
                <span>
                  About <i className="fas fa-home" />
                </span>
                <GenericModal key="1" isModal={this.state.isAboutOpen} caption="About" toggle={this.toggleAbout} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleContact}>
                <span>
                  Contact <i className="fas fa-phone" />
                </span>
                <GenericModal key="2" isModal={this.state.isContactOpen} caption="Contact" toggle={this.toggleContact} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleLogin}>
                <span>
                  Login / Register <i className="fas fa-sign-in-alt" />
                </span>
                <GenericModal key="3" isModal={this.state.isLoginOpen} caption="Login" toggle={this.toggleLogin} />
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
