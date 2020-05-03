import React from "react";
import firebase from "../firebase/firebase.js";

const db = firebase.firestore();

const SubmitProblem = (values) => {
	var now = new Date()
	var all_cats = ["algebra", "combinatorics", "geometry", "number_theory", "miscellaneous"]
	var name_list = ["Algebra", "Combinatorics", "Geometry", "Number Theory", "Miscellaneous"]
	var final_cats = []
	for (var i = 0; i < all_cats.length; ++i){
		if (values[all_cats[i]] === true) {
			final_cats.push(name_list[i])
		}
	}

	db.collection("problems").add({
	    proposer: values.name,
	    difficulty: values.difficulty,
	    statement: values.statement,
	    date_created: now,
	    category: final_cats,
	    available: true
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
}

export default SubmitProblem