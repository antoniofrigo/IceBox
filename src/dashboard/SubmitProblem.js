import React from "react";
import firebase from "../firebase/firebase.js";

const db = firebase.firestore();

const SubmitProblem = (values, mode) => {
	var now = new Date();
	var all_cats = ["algebra", "combinatorics", "geometry", "number_theory", "miscellaneous"];
	var name_list = ["Algebra", "Combinatorics", "Geometry", "Number Theory", "Miscellaneous"];
	var final_cats = [];
	if (mode === "New") {
		db.collection("problems")
			.add({
				proposer: values.name,
				difficulty: values.difficulty,
				statement: values.statement,
				date_created: now,
				available: true,
				algebra: values.algebra,
				combinatorics: values.combinatorics,
				geometry: values.geometry,
				number_theory: values.number_theory,
				miscellaneous: values.miscellaneous,
			})
			.then(function (docRef) {
				// alert("Document written with ID: ", docRef.id);
			})
			.catch(function (error) {
				alert("Error adding document: ", error);
			});
	} else if (mode === "Edit") {
		db.collection("problems")
			.doc(values.id)
			.update({
				proposer: values.name,
				difficulty: values.difficulty,
				statement: values.statement,
				edited: now,
				available: true,
				combinatorics: values.combinatorics,
				geometry: values.geometry,
				number_theory: values.number_theory,
				miscellaneous: values.miscellaneous,
			})
			.then(function (docRef) {
				// alert("Document written with ID: ", docRef.id);
			})
			.catch(function (error) {
				alert("Error adding document: ", error);
			});
	}
};

export default SubmitProblem;
