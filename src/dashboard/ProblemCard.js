import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Chip,
	Divider,
} from "@material-ui/core";
import FileCopyIcon from '@material-ui/icons/FileCopy';

function ConvertDate(date) {
	var full_date = new Date(date.seconds * 1000);
	return full_date.toLocaleDateString("en-US");
}

function createChip(category) {
	var color_list = {
		Algebra: "#DB4437",
		Combinatorics: "#F4B400",
		Geometry: "#0F9D58",
		"Number Theory": "#4285F4",
		Miscellaneous: "#512da8",
	};
	return (
		<Chip
			key={color_list[category]}
			style={{ backgroundColor: color_list[category], color: "#fff" }}
			label={category}
			// avatar={<Functions style={{color: "white"}}/>}
		/>
	);
}

function generateChips(chip_array) {
	if (typeof chip_array !== "undefined") {
		var chips = [];
		for (var i = 0; i < chip_array.length; ++i) {
			chips.push(createChip(chip_array[i]));
		}
		return chips;
	} else {
		return " ";
	}
}

const ProblemCard = (props) => {
	
	return (
		<Card style={{ minWidth: 1000, maxWidth: 1000, marginTop: "10pt" }} key={props.id}>
			<CardContent>
				<div className="problem_statement">
					<p>{props.statement}</p>
				</div>
			</CardContent>
			<Divider />
			<CardActions>
				<div style={{ margin: "10pt" }}>
					<table className="base_table">
						<tbody>
							<tr>
								<td className="left_col" key="left">
									{props.proposer} on{" "}
									{ConvertDate(props.date_created)}
								</td>
								<td className="center_col" key="center">
									{generateChips(props.category)}
								</td>
								<td className="right_col" key="right">
									Difficulty: {props.difficulty}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CardActions>
		</Card>
	);
};

export default ProblemCard;
