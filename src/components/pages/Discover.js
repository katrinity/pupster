import React, { Component } from "react";
import DiscoverPic from "../DiscoverPic"
import API from "../../utils/API"

class Discover extends Component {
  state ={
    friended: 0,
    dogPic: ""
  };

  componentDidMount() {
    API.search("breeds/image/random")
      .then(res => this.setState({dogPic: res.data.message}))
      .catch(err => console.log(err));
  };

  clickLeft = () => {
    API.search("breeds/image/random")
      .then(res => this.setState({dogPic: res.data.message}))
      .catch(err => console.log(err));
  };

  clickRight = () => {
    API.search("breeds/image/random")
      .then(res => {
        const randNum = Math.random();
        if(randNum > .5){
          let newFriend = this.state.friended + 1;
          this.setState({friended: newFriend});
        }
        this.setState({dogPic: res.data.message});
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div class="container">
        <h1>Discover Page</h1>
        <DiscoverPic 
          pic={this.state.dogPic}
          numFriends={this.state.friended}
          left={this.clickLeft}
          right={this.clickRight}
          />
      </div>);
  };
};

export default Discover;