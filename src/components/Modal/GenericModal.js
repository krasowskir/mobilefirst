import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./genmodal.scss";

export default class GenericModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps({ isModal }) {
    !!isModal ? this.setState({ isModal: true }) : this.setState({ isModal: false });
  }

  toggleModal() {
    this.setState({
      isModal: !this.state.isModal
    });
    this.props.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          <p>{this.props.caption}</p>
        </ModalHeader>
        <ModalBody>
          <div className="container gen-modal">
            <div className="row">
              <div className="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                  est Lorem ipsum dolor sit amet. Lorem ipsum dolor si
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}
