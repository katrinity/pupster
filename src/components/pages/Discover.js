import React, { Component } from "react";
import DiscoverPic from "../DiscoverPic"
import API from "../../utils/API"

class Discover extends Component {

  componentDidMount() {
    API.search("breeds/image/random")
      .then(res => {
        this.props.stateChange("dogPic", res.data.message);
      })
      .catch(err => console.log(err));
  };


  render(){
    return(
      <div className="container">
        <div className="jumbotron discoverjumbo"><h1 className="text-center">Discover Page</h1></div>
        <DiscoverPic 
          pic={this.props.dogPic}
          numFriends={this.props.friended}
          left={this.props.clickLeft}
          right={this.props.clickRight}
          />
      </div>);
  };
};

export default Discover;