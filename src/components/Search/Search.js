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
      foundItems: null
    };
    this.inputChange = this.inputChange.bind(this);
    this.search = this.search.bind(this);
  }

  inputChange(event) {
    this.setState({
      searchWord: event.target.value
    });
  }
  search() {
    fetch("http://localhost:8080/search/" + this.state.searchWord)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          foundItems: data,
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
              <FeedContainer data={this.state.foundItems} />
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
