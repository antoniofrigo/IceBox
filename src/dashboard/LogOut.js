import React from "react";
import { Button } from "@material-ui/core";
import firebase from "../firebase/firebase.js";
import { withRouter} from "react-router-dom";
const handleClick = (props) => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			props.history.push("/");
		})
		.catch(function (error) {
			alert(error)
		});
};

const LogOut = (props) => {
	return <Button onClick={() => handleClick(props)}> Log out</Button>;
};

export default withRouter(LogOut);
