import React, { Component } from "react";
import ProblemCard from "./ProblemCard.js";
import firebase from "../firebase/firebase.js";

const db = firebase.firestore();

class Problems extends Component {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
    }

    get_cards = () => {
        let self = this;
        db.collection("problems").orderBy("date_created", "desc")
            .onSnapshot((querySnapshot) => {
                let all_cards = [];
                querySnapshot.forEach((doc) => {
                    var data = doc.data();
                    all_cards.push(
                        <ProblemCard
                            key={doc.id}
                            key_code={doc.id}
                            proposer={data.proposer}
                            available={data.available}
                            date_created={data.date_created}
                            edited={data.edited}
                            statement={data.statement}
                            algebra={data.algebra}
                            combinatorics={data.combinatorics}
                            geometry={data.geometry}
                            miscellaneous={data.miscellaneous}
                            number_theory={data.number_theory}
                            difficulty={data.difficulty}
                        />
                    );
                });
                self.setState({ cards: all_cards }, () =>
                    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub])
                );
            });
    };

    componentDidMount() {
        this.get_cards();
    }

    // componentDidUpdate() {
    //     this.get_cards();
    // }

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
