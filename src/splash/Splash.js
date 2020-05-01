import React, { Component } from 'react';
import Login from './Login.js'
import { Typography } from '@material-ui/core'
class Splash extends Component {
	render () {
		return(
			<div style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div className="Splash">
			<Typography variant="h1">
				IceBox
			</Typography>
			<Typography variant="h6">
				ABMC's Problem Proposal System
			</Typography>
			<Login firebase={this.props.firebase}/>
			</div>
			</div>
			)
	}
}

export default Splash