import firebase from "../firebase/firebase.js";
const UpdateUser = (props, user) => {
	if (typeof props.old_pass !== "undefined" && props.old_pass !== "") {
		var credential = firebase.auth.EmailAuthProvider.credential(user.email, props.old_pass);
		user.reauthenticateWithCredential(credential)
			.then(function () {
				if (typeof props.password !== "undefined" && props.password !== "") {
					user.updatePassword(props.password)
						.then(function () {
							alert("Successfully set password!");
						})
						.catch(function (error) {
							alert(error);
						});
				}
			})
			.catch(function (error) {
				alert("Original password incorrect")
			});
	}

	if (typeof props.name !== "undefined" && props.name !== "") {
		user.updateProfile({
			displayName: props.name,
		})
			.then(function () {
				alert("Successfully set name as " + props.name);
			})
			.catch(function (error) {
				alert(error);
			});
	}
};

export default UpdateUser;
