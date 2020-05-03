import React, { Component } from "react";
import ProblemCard from "./ProblemCard.js";
import firebase from "../firebase/firebase.js";
import { Card, CardContent, Typography } from "@material-ui/core";

const db = firebase.firestore();
class Problems extends Component {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
    }

    componentDidMount() {
        var all_cards = [];
        let self = this;
        db.collection("problems")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var data = doc.data();
                    all_cards.push(
                        <ProblemCard
                            key={doc.id}
                            proposer={data.proposer}
                            available={data.available}
                            date_created={data.date_created}
                            statement={data.statement}
                            category={data.category}
                            difficulty={data.difficulty}
                        />
                    );
                });
                self.setState({ cards: all_cards });
            });
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }

    render() {
        return (
            <div
                style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "5vh",
                }}
            >
                <div style={{ margin: "auto" }}>{this.state.cards}</div>
            </div>
        );
    }
}

export default Problems;
