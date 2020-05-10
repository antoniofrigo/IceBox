import React from "react";
import { Button, TextField, Select, MenuItem, FormLabel } from "@material-ui/core";
import { Formik } from "formik";

const SearchBar = (field) => {
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				difficulty: "",
				category: "",
				name: "",
				statement: "",
				id: "",
			}}
			onSubmit={(values) => {
				field.setParams(values);
			}}
		>
			{(props) => (
				<form onSubmit={props.handleSubmit}>
					<TextField
						name="name"
						id="name"
						placeholder="Proposer"
						value={props.values.name}
						onChange={props.handleChange}
					/>
					<TextField
						name="statement"
						id="statement"
						placeholder="Contains text"
						value={props.values.statement}
						onChange={props.handleChange}
					/>
					<FormLabel> Difficulty: </FormLabel>
					<Select
						id="difficulty"
						name="difficulty"
						value={props.values.difficulty}
						onChange={props.handleChange}
					>
						<MenuItem value={""}>&nbsp;</MenuItem>
						<MenuItem value={"1"}>1</MenuItem>
						<MenuItem value={"2"}>2</MenuItem>
						<MenuItem value={"3"}>3</MenuItem>
						<MenuItem value={"4"}>4</MenuItem>
						<MenuItem value={"5"}>5</MenuItem>
					</Select>
					<FormLabel> Category: </FormLabel>
					<Select
						id="category"
						name="category"
						value={props.values.category}
						onChange={props.handleChange}
					>
						<MenuItem value={""}>&nbsp;</MenuItem>
						<MenuItem value={"algebra"}>Algebra</MenuItem>
						<MenuItem value={"combinatorics"}>Combinatorics</MenuItem>
						<MenuItem value={"geometry"}>Geometry</MenuItem>
						<MenuItem value={"number_theory"}>Number Theory</MenuItem>
						<MenuItem value={"miscellaneous"}>Miscellaneous</MenuItem>
					</Select>
					<Button type="submit">Filter</Button>
				</form>
			)}
		</Formik>
	);
};

export default SearchBar;
