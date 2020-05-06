import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
// import { Add, AccountCircle, Equalizer } from "@material-ui/icons";

const Statistics = (props) => {
	return (
		<Dialog fullWidth={true}open={props.open} onClose={props.onClose}>
			<DialogTitle> Statistics </DialogTitle>
			<DialogContent>
			
			</DialogContent>
		</Dialog>
	);
};

export default Statistics;
