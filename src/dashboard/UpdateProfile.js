import firebase from "../firebase/firebase.js";
var user = firebase.auth().currentUser;

const UpdateUser = (props) => {
	console.log(props)
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
	if (typeof props.password !== "undefined" && props.password !== "") {
		user.updatePassword(props.password).then(function() {
		  alert("Successfully set password!")
		}).catch(function(error) {
		  alert(error)
		});
	}
};

export default UpdateUser;
