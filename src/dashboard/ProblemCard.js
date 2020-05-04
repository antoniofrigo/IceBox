import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Chip,
	Divider,
	IconButton,
	Snackbar,
	Tooltip,
} from "@material-ui/core";
import copy from "copy-to-clipboard";
import { FileCopy, Edit } from "@material-ui/icons";
import EditProblem from "./Edit.js";

function ConvertDate(date) {
	var full_date = new Date(date.seconds * 1000);
	return full_date.toLocaleDateString("en-US");
}

function CreateChip(category, key_code) {
	var color_list = {
		Algebra: "#DB4437",
		Combinatorics: "#F4B400",
		Geometry: "#0F9D58",
		"Number Theory": "#4285F4",
		Miscellaneous: "#512da8",
	};
	return (
		<Chip
			className="chip"
			key={color_list[category] + key_code}
			style={{ backgroundColor: color_list[category], color: "#fff" }}
			label={category}
		/>
	);
}

const ProblemCard = (props) => {
	const [linkOn, SetLink] = useState(false);
	const [editOn, SetEdit] = useState(false);
	const handleLink = (statement) => {
		copy(statement);
		SetLink(!linkOn);
	};

	return (
		<Card style={{ minWidth: 1000, maxWidth: 1000, marginTop: "10pt" }} key={props.id}>
			<CardContent>
				<div className="problem_statement">
					<p>{props.statement}</p>
				</div>
			</CardContent>
			<Divider />
			<CardActions>
				<div>
					<table className="base_table">
						<tbody>
							<tr>
								<td className="left_col" key="left">
									{props.proposer} on {ConvertDate(props.date_created)}
									{typeof props.edited !== "undefined" &&
										", edited on " + ConvertDate(props.edited)}
									<br />
									{props.key_code}
								</td>
								<td className="center_col" key="center">
									{props.algebra === true &&
										CreateChip("Algebra", props.key_code)}
									{props.combinatorics === true &&
										CreateChip("Combinatorics", props.key_code)}
									{props.geometry === true &&
										CreateChip("Geometry", props.key_code)}
									{props.number_theory === true &&
										CreateChip("Number Theory", props.key_code)}
									{props.miscellaneous === true &&
										CreateChip("Miscellaneous", props.key_code)}
								</td>
								<td className="right_col" key="right">
									<Tooltip title="Edit problem">
										<IconButton onClick={() => SetEdit(!editOn)}>
											<Edit />{" "}
										</IconButton>
									</Tooltip>
									<Tooltip title="Copy source to clipboard">
										<IconButton onClick={() => handleLink(props.statement)}>
											<FileCopy />{" "}
										</IconButton>
									</Tooltip>
									Difficulty: {props.difficulty}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardActions>
			<Snackbar
				open={linkOn}
				autoHideDuration={2000}
				onClose={() => SetLink(!linkOn)}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				message="Source copied to clipboard!"
			/>
			<EditProblem dialog={editOn} info={props} onClick={() => SetEdit(!editOn)} />
		</Card>
	);
};

export default ProblemCard;
