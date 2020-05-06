import React, { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
	TextField,
	Button,
	Input,
	InputAdornment,
	IconButton,
} from "@material-ui/core";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import UpdateUser from "./UpdateProfile.js";

const validate = (values) => {
	const errors = {};
	if (values.password !== values.confirm) {
		alert("Passwords do not match");
		errors.password = "Passwords do not match";
	}
	return errors;
};

const Password = (props) => {
	const [show, setShow] = useState(false);
	return (
		<Input
			id={props.id}
			name={props.id}
			type={show ? "text" : "password"}
			style={{ width: "200pt" }}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.handleChange}
			endAdornment={
				<InputAdornment position="end">
					<IconButton
						aria-label="toggle password visibility"
						onClick={() => setShow(!show)}
						onMouseDown={() => setShow(!show)}
					>
						{show ? <Visibility /> : <VisibilityOff />}
					</IconButton>
				</InputAdornment>
			}
		/>
	);
};

const Profile = (props) => {
	console.log(props.user)
	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				name: "",
				password: "",
				confirm: "",
			}}
			validate={validate}
			validateOnChange={false}
			validateOnBlur={false}
			onSubmit={(values, { resetForm }) => {
				UpdateUser(values)
				props.onClose();
				resetForm({});
			}}
		>
			{(fields) => (
				<Dialog open={props.open} onClose={props.onClose}>
					<form onSubmit={fields.handleSubmit}>
						<DialogTitle>Profile Information</DialogTitle>
						<DialogContent>
							<Typography>Email: {props.user.email}</Typography>
							{typeof(props.user.displayName) === "undefined" ? (
								<TextField
									id="name"
									value={fields.name}
									onChange={fields.handleChange}
									placeholder="Set your name! (Only once)"
									style={{ marginTop: "3pt", width: "200pt" }}
								/>
							) : (
								<Typography>Name: {props.user.displayName} </Typography>
							)}
							<br />
							<Password
								id="password"
								placeholder="Change password"
								value={fields.values.password}
								handleChange={fields.handleChange}
							/>
							<br />
							<Password
								id="confirm"
								placeholder="Confirm your password"
								value={fields.values.confirm}
								handleChange={fields.handleChange}
							/>
						</DialogContent>
						<DialogActions>
							<Button type="submit"> Update Profile</Button>
						</DialogActions>
					</form>
				</Dialog>
			)}
		</Formik>
	);
};
export default Profile;
