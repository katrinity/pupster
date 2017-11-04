import React from "react";

const DiscoverPic = (props) => {
	return(
		<div>
			<button className="btn btn-danger" onClick={props.left}>Nope</button>
			<img src={props.pic}/>
			<button className="btn btn-success" onClick={props.right}>Yessss!</button>
	    <p>
	    	Number of Friends: {props.numFriends}
	    </p>
	  </div>);
};

export default DiscoverPic;