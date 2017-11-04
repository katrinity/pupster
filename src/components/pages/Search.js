import React, { Component } from "react";
import SearchResults from "./SearchResults"
import SearchForm from "./SearchForm"
import API from "../../utils/API"

class Search extends Component {
  state ={
    searchQuery: "",
    result: []
  };

  componentDidMount() {
    API.search("beagle")
      .then(res => {
        console.log(res);
        this.setState({result: res.data.message})
        })
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    let searchInput = event.target.value;
    this.setState({searchQuery: searchInput});
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchQuery)
      .then(res => this.setState({result: res.data.message}))
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="container">
        <h1>Search for Dog Pics</h1>
        <SearchForm 
          handleInputChange={this.handleInputChange}
          value={this.state.searchQuery}
          handleFormSubmit={this.handleFormSubmit}/>
        <SearchResults 
          resultsArray={this.state.result}/>
      </div>
    );
  };
}

export default Search;