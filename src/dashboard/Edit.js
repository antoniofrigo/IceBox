import React from "react";
import AddProblem from "./Add.js";

const EditProblem = (props) => {
	return (
		<AddProblem mode="Edit" info={props.info} dialog={props.dialog} onClick={props.onClick} />
	);
};

export default EditProblem;
