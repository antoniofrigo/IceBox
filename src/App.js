import React, { Component, useState } from "react";
import firebase from "./firebase/firebase.js";
import Splash from "./splash/Splash.js";
import Dashboard from "./dashboard/Dashboard.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Splash.css";
import "./css/Problem.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#fdd835",
		},
	},
});

const PrivateRoute = ({ isAuth: isAuth, render: to_render, ...rest }) => (
	<Route {...rest} render={isAuth === true ? to_render : null} />
);

function App() {
	const [isAuth, setAuth] = useState(false);
	const [user, setUser] = useState({});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route
						path="/"
						render={(props) => <Dashboard firebase={firebase} />}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	);

	// 	firebase.auth().onAuthStateChanged((user) => {
	// 		if (user){
	// 			setAuth(true)
	// 		}
	// 	})

	// 	return (
	// 		<Router>
	// 			<Switch>
	// 			<PrivateRoute path="/dashboard" isAuth={isAuth} render={(props) => <Dashboard user={user}firebase={firebase} />}/>
	// 			<Route path="/" render={(props) => <Splash firebase={firebase} />}/>
	// 			</Switch>
	// 		</Router>
	// 		)
}

export default App;
