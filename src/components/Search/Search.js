import React, { Component } from "react";
import FeedContainer from "../Feed/FeedContainer";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "./SearchInput/SearchInput";
import fetch from "isomorphic-fetch";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchWord: "",
      foundItems: null,
      fullAmount: 0,
      limit: 7,
      page: 0
    };
    this.inputChange = this.inputChange.bind(this);
    this.search = this.search.bind(this);
    this.setLimit = this.setLimit.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  inputChange(event) {
    this.setState({
      searchWord: event.target.value
    });
  }
  setLimit(value) {
    this.setState({
      limit: value
    });
  }
  setPage(value) {
    console.log("page valjue: " + value);
    this.setState({
      page: value
    });
  }
  componentDidUpdate() {
    this.search();
  }
  shouldComponentUpdate(nextProps, nextState) {
    let { page, limit, searched, foundItems } = this.state;
    console.log("aktualle items: " + foundItems);
    console.log("nextItems: " + nextState.foundItems);
    if (nextState == null) {
      return false;
    }
    if (nextState.page !== page || nextState.limit !== limit || nextState.searched !== searched ) {
      return true;
    } else {
      return false;
    }
  }

  search() {
    console.log("params: " + this.state.searchWord + ":" + limit + ":" + page);
    let page = this.state.page;
    let limit = this.state.limit;
    let searchWord = this.state.searchWord;

    console.log("params after: " + searchWord + ":" + limit + ":" + page);
    fetch("http://localhost:8080/search/" + searchWord + "?limit=" + limit + "&page=" + page)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          foundItems: data.restaurantList,
          fullAmount: data.items,
          searched: true
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            {this.state.searched ? (
              <FeedContainer
                data={this.state.foundItems}
                pageSize={this.state.limit}
                amount={this.state.fullAmount}
                updateLimit={this.setLimit}
                updatePage={this.setPage}
              />
            ) : (
              <SearchInput inputChange={this.inputChange} search={this.search} />
            )}
          </div>
          <div className="col-xs-12 col-lg-3 ">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
