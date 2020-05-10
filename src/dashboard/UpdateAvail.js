import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Archive, Unarchive } from "@material-ui/icons";
import firebase from "../firebase/firebase.js";
const db = firebase.firestore();

const SetAvail = (available, key_code) => {
	var now = new Date();

	db.collection("problems")
		.doc(key_code)
		.update({
			available: !available,
			archive_date: now 
		})
		.then(function (docRef) {
			// alert("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			alert("Error updating availability: ", error);
		});
};

const UpdateAvail = (props) => {
	return (
		<Tooltip title={props.mode  ? "Archive" : "Restore"}>
			<IconButton onClick={() => SetAvail(props.available, props.key_code)}>
				{props.mode ? <Archive /> : <Unarchive />}
			</IconButton>
		</Tooltip>
	);
};

export default UpdateAvail;
