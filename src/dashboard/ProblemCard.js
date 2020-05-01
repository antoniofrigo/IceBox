import React, { Component } from 'react';
import {Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


class ProblemCard extends Component {

	render () {
		return (
			<Card>
			</Card>
		);
	}
}

export default ProblemCard