import React, { useState } from "react";
import {
	Fab,
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
import { Add } from "@material-ui/icons";
import { Formik } from "formik";
import SubmitProblem from "./SubmitProblem.js"

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

const AddProblem = (props) => {
	const [openDialog, setDialog] = useState(false);

	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				statement: "",
				difficulty: "",
				name: "",
				algebra: false,
				combinatorics: false,
				geometry: false,
				number_theory: false,
				miscellaneous: false,
			}}
			onSubmit={(values, { resetForm }) => {
				SubmitProblem(values)
				setDialog(!openDialog);
				resetForm({});
			}}
		>
			{(props) => (
				<div className="fab">
					<Fab onClick={() => setDialog(!openDialog)} color="secondary">
						<Add />
					</Fab>
					<Dialog
						open={openDialog}
						fullWidth={true}
						maxWidth={"md"}
						onClose={() => setDialog(!openDialog)}
					>
						<form onSubmit={props.handleSubmit}>
							<DialogTitle> New Problem</DialogTitle>
							<DialogContent>
								<TextField
									fullWidth={true}
									multiline
									required
									id="statement"
									name="statement"
									value={props.values.statement}
									onChange={props.handleChange}
									placeholder="Problem Statement"
								/>
								<div style={{ marginTop: "5pt" }}>
									<table className="base_table">
										<tbody>
											<tr>
												<td className="left_col" key="left_2">
													<TextField
														required
														id="name"
														name="name"
														value={props.values.name}
														onChange={props.handleChange}
														placeholder="Your name"
													/>
												</td>
												<td className="center_col" key="center_2">
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
												<td className="right_col" key="right_2">
													<FormLabel> Difficulty: </FormLabel>
													<Select
														labelId="diff"
														required
														id="difficulty"
														name="difficulty"
														value={props.values.difficulty}
														onChange={props.handleChange}
													>
														<MenuItem value={1}>1</MenuItem>
														<MenuItem value={2}>2</MenuItem>
														<MenuItem value={3}>3</MenuItem>
														<MenuItem value={4}>4</MenuItem>
														<MenuItem value={5}>5</MenuItem>
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
				</div>
			)}
		</Formik>
	);
};

export default AddProblem;
