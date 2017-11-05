import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import API from "./utils/API"

class App extends Component {
	state={
		friended: 0,
		dogPic: "",
		searchQuery: "",
		searchResult: []
	}

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
	};

	handleState = (stateName, stateChange) => {
		this.setState({[stateName]: stateChange});
	};

	render(){
		return(
		  <Router>
		    <div>
		      <Navpills />
		      <Route exact path="/" component={About} />
		      <Route path="/discover/" render={() => <Discover 
		      	friended={this.state.friended}
		      	clickLeft={this.clickLeft}
		      	clickRight={this.clickRight}
		      	dogPic={this.state.dogPic}
		      	stateChange={this.handleState}
		      	/>} />
		      <Route path="/search" component={Search} />
		    </div>
		  </Router>
	)};

}
export default App;

