import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import shortId from "short-id";

export default class MyPagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let paginationItems = new Array();
    paginationItems.push(
      <PaginationItem key="1-first">
        <PaginationLink previous={true} onClick={this.props.updatePage.bind(null, "prev")} />
      </PaginationItem>
    );

    for (let i = 0; i < this.props.size; i++) {
      let itemId = shortId.generate();
      if (i == this.props.page) {
        paginationItems.push(
          <PaginationItem key={itemId} active>
            <PaginationLink key={itemId} onClick={this.props.updatePage.bind(null, i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        paginationItems.push(
          <PaginationItem key={itemId}>
            <PaginationLink key={itemId} onClick={this.props.updatePage.bind(null, i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    paginationItems.push(
      <PaginationItem key="2-last">
        <PaginationLink next={true} onClick={this.props.updatePage.bind(null, "next")} />
      </PaginationItem>
    );
    return <Pagination aria-label="Page navigation example">{paginationItems}</Pagination>;
  }
}
