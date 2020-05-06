import React, { Component } from "react";
import Login from "./Login.js";
import { Typography, Paper } from "@material-ui/core";
class Splash extends Component {
	render() {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="Splash">
					<Paper elevation={3} style={{padding:"15pt"}}>
					<Typography variant="h1">IceBox</Typography>
					<Typography variant="h6">ABMC's Problem Proposal System</Typography>
					<Login firebase={this.props.firebase} />
					</Paper>
				</div>
			</div>
		);
	}
}

export default Splash;
