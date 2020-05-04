import React, { Component, useState, useEffect } from "react";
import firebase from "./firebase/firebase.js";
import Splash from "./splash/Splash.js";
import Dashboard from "./dashboard/Dashboard.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./css/Splash.css";
import "./css/Problem.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { darkTheme, lightTheme } from "./css/Themes.js";

const PrivateRoute = ({ path: path, isAuth: isAuth, render: to_render, ...rest }) => {
	return (<Route exact path="/dashboard"> 
		{isAuth ? <Redirect to="/dashboard"/> : <Redirect to="/"/>}
	</Route>);
};

function App () {
	const [isAuth, setAuth] = useState(false);
	const [user, setUser] = useState({});
	
	useEffect((props) =>
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setAuth(true);
				console.log('here')
			}
		})
	);

	// return (
	// 	<ThemeProvider theme={lightTheme}>
	// 		<CssBaseline />
	// 		<Router>
	// 			<Switch>
	// 				<Route path="/" render={(props) => <Dashboard firebase={firebase} />} />
	// 			</Switch>
	// 		</Router>
	// 	</ThemeProvider>
	// );


	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Router>
				<Switch>
					<PrivateRoute
						path="/dashboard"
						isAuth={isAuth}
						render={(props) => <Dashboard user={user} firebase={firebase} />}
					/>
					<Route path="/" render={(props) => <Splash firebase={firebase} />} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
