import React from "react";
import {
	FormControl,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Button,
	Select,
	MenuItem,
	FormLabel,
	Chip,
} from "@material-ui/core";
import { Formik } from "formik";
import SubmitProblem from "./SubmitProblem.js";

const color_list = {
	Algebra: "#DB4437",
	Combinatorics: "#F4B400",
	Geometry: "#0F9D58",
	"Number Theory": "#4285F4",
	Miscellaneous: "#512da8",
};

const ClickChips = (props) => {
	return (
		<div style={{ display: "inline" }}>
			<Chip
				label={props.name}
				style={{
					backgroundColor: props.value === true ? color_list[props.name] : "#bdbdbd",
					color: "#fff",
				}}
				clickable
				id={props.id}
				onClick={props.onClick}
			></Chip>
		</div>
	);
};

const validate = (values) => {
	const errors = {};
	var check =
		values.combinatorics ||
		values.algebra ||
		values.number_theory ||
		values.miscellaneous ||
		values.geometry;
	if (!check) {
		errors.number_theory = "You must select at least one category";
	}
	return errors
};

const AddProblem = (sent) => {
	var info = typeof sent.info !== "undefined" ? true : false;
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				statement: info === true ? sent.info.statement : "",
				difficulty: info === true ? sent.info.difficulty : "",
				name: info === true ? sent.info.proposer : "",
				id: info === true ? sent.info.key_code : "",
				algebra: info === true ? sent.info.algebra : false,
				combinatorics: info === true ? sent.info.combinatorics : false,
				geometry: info === true ? sent.info.geometry : false,
				number_theory: info === true ? sent.info.number_theory : false,
				miscellaneous: info === true ? sent.info.miscellaneous : false,
			}}
			validate={validate}
			onSubmit={(values, { resetForm }) => {
				SubmitProblem(values, sent.mode);
				sent.onClick();
				resetForm({});
			}}
		>
			{(props) => (
				<Dialog open={sent.dialog} fullWidth={true} maxWidth={"md"} onClose={sent.onClick}>
					<form onSubmit={props.handleSubmit}>
						<DialogTitle> {sent.mode} Problem</DialogTitle>
						<DialogContent>
							<TextField
								fullWidth={true}
								multiline
								required
								id="statement"
								name="statement"
								mode={sent.mode}
								value={props.values.statement}
								onChange={props.handleChange}
								placeholder="Problem Statement"
							/>
							<div style={{ marginTop: "5pt" }}>
								<table className="base_table">
									<tbody>
										<tr>
											<td className="left_edit" key="left_2">
												<TextField
													required
													id="name"
													name="name"
													value={props.values.name}
													onChange={props.handleChange}
													placeholder="Your name"
												/>
											</td>
											<td className="center_edit" key="center_2">
												<ClickChips
													name="Algebra"
													id="Algebra"
													value={props.values.algebra}
													onClick={() =>
														props.setFieldValue(
															"algebra",
															!props.values.algebra
														)
													}
												/>
												<ClickChips
													name="Combinatorics"
													id="Combinatorics"
													value={props.values.combinatorics}
													onClick={() =>
														props.setFieldValue(
															"combinatorics",
															!props.values.combinatorics
														)
													}
												/>
												<ClickChips
													name="Geometry"
													id="Geometry"
													value={props.values.geometry}
													onClick={() =>
														props.setFieldValue(
															"geometry",
															!props.values.geometry
														)
													}
												/>
												<ClickChips
													name="Number Theory"
													id="number_theory"
													value={props.values.number_theory}
													onClick={() =>
														props.setFieldValue(
															"number_theory",
															!props.values.number_theory
														)
													}
												/>
												<ClickChips
													name="Miscellaneous"
													id="miscellaneous"
													value={props.values.miscellaneous}
													onClick={() =>
														props.setFieldValue(
															"miscellaneous",
															!props.values.miscellaneous
														)
													}
												/>
											</td>
											<td className="right_edit" key="right_2">
												<FormLabel> Difficulty: </FormLabel>
												<Select
													labelId="diff"
													required
													id="difficulty"
													name="difficulty"
													value={props.values.difficulty}
													onChange={props.handleChange}
												>
													<MenuItem value={"1"}>1</MenuItem>
													<MenuItem value={"2"}>2</MenuItem>
													<MenuItem value={"3"}>3</MenuItem>
													<MenuItem value={"4"}>4</MenuItem>
													<MenuItem value={"5"}>5</MenuItem>
												</Select>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</DialogContent>
						<DialogActions>
							<Button type="submit" color="primary" variant="contained">
								Submit
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			)}
		</Formik>
	);
};

export default AddProblem;
