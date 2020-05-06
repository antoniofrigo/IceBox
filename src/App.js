import React, { useState, useEffect } from "react";
import firebase from "./firebase/firebase.js";
import Splash from "./splash/Splash.js";
import Dashboard from "./dashboard/Dashboard.js";
import { Switch, Redirect, withRouter, Route } from "react-router-dom";
import "./css/Splash.css";
import "./css/Problem.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { darkTheme, lightTheme } from "./css/Themes.js";

const PrivateRoute = (props) => {
	return (
		<Route
			path="/dashboard"
			component={props.isAuth ? props.component : () => <Redirect to="/" />}
		/>
	);
};

const App = (props) => {
	const [isAuth, setAuth] = useState(false);
	const [user, setUser] = useState({});
	useEffect((set) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setAuth(true);
				setUser(user)
				props.history.push("/dashboard");
			}
		});
	},[isAuth,props.history]);


	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Switch>
				<PrivateRoute
					path="/dashboard"
					isAuth={isAuth}
					component={() => <Dashboard user={user}/>}
				/>
				<Route path="/" component={() => <Splash firebase={firebase} />} />
			</Switch>
		</ThemeProvider>
	);
};

export default withRouter(App);
