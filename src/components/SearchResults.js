import React from "react";

const SearchResults = props => {
  let dogList;
  if(props.resultsArray === "Breed not found"){
  	dogList = <h3>No dogs found</h3>;
  } else{
  	dogList = props.resultsArray.map(x => 
    <img src={x} className="resultsImage"/>);
  }
        
  return (
	  <div>
	    <h2>Search Results</h2>
				{dogList}
	  </div>);
};

export default SearchResults;