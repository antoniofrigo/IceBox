import React, { Component} from "react";
import firebase from "./firebase/firebase.js";
import Splash from "./splash/Splash.js";
import Dashboard from "./dashboard/Dashboard.js";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import "./css/Splash.css";

const PrivateRoute = ({ isAuth: isAuth, render: to_render, ...rest }) => (
  <Route {...rest} render={isAuth === true? to_render : null} />
)

class App extends Component {
    constructor(props){
    	super(props)
    	this.state = {"user": {}, "isAuth": false}
    }

    componentDidMount() {
    	firebase.auth().onAuthStateChanged((user) => {
    		if (user){
    			this.setState({"user": user, "isAuth": true})
    		}
    	})
    }

    render() {
        return (
        	<Router>
        		<PrivateRoute path="/dashboard" isAuth={this.state.isAuth} render={(props) => <Dashboard user={this.state.user}firebase={firebase} />}/> 
        		<Route path="/" render={(props) => <Splash firebase={firebase} />}/>
        	</Router>
        	)
    }
}

export default App;
