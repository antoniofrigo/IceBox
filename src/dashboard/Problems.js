import React, { useState, useEffect } from "react";
import ProblemCard from "./ProblemCard.js";
import firebase from "../firebase/firebase.js";
import { Button } from "@material-ui/core";
import SearchBar from "./SearchBar.js";
const db = firebase.firestore();

const Problems = (props) => {
    const [cards, setCards] = useState([]);
    const [params, setParams] = useState({});
    const get_cards = () => {
        var query = db
            .collection("problems")
            .where("available", "==", props.archive)
            .orderBy("date_created", "desc");
        query.onSnapshot((querySnapshot) => {
            let all_cards = [];
            let all_data = [];
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                all_data.push({
                    id: doc.id,
                    proposer: data.proposer,
                    available: data.available,
                    archive: props.archive,
                    date_created: data.date_created,
                    edited: data.edited,
                    statement: data.statement,
                    algebra: data.algebra,
                    combinatorics: data.combinatorics,
                    geometry: data.geometry,
                    miscellaneous: data.miscellaneous,
                    number_theory: data.number_theory,
                    difficulty: data.difficulty,
                });
            });
            for (var i = 0; i < all_data.length; ++i) {
                var item = all_data[i];
                if (typeof params.difficulty !== "undefined" && params.difficulty !== "") {
                    if (params.difficulty !== item.difficulty) {
                        continue;
                    }
                }
                if (typeof params.name !== "undefined" && params.name !== "") {
                    if (params.name !== item.proposer) {
                        if (item.proposer.toLowerCase().includes(params.name.toLowerCase()) === false) {
                            continue;
                        }
                    }
                }
                if (typeof params.statement !== "undefined" && params.statement !== "") {
                    if (params.statement !== item.statement) {
                        if (item.statement.toLowerCase().includes(params.statement.toLowerCase()) === false) {
                            continue;
                        }
                    }
                }
                if (typeof params.category !== "undefined" && params.category !== "") {
                    if (item[params.category] === false) {
                        continue;
                    }
                }
                all_cards.push(
                    <ProblemCard
                        key={item.id}
                        key_code={item.id}
                        proposer={item.proposer}
                        available={item.available}
                        archive={props.archive}
                        date_created={item.date_created}
                        edited={item.edited}
                        statement={item.statement}
                        algebra={item.algebra}
                        combinatorics={item.combinatorics}
                        geometry={item.geometry}
                        miscellaneous={item.miscellaneous}
                        number_theory={item.number_theory}
                        difficulty={item.difficulty}
                    />
                );
            }
            setCards(all_cards);
            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
        });
    };

    useEffect(() => {
        get_cards();
    }, [params]);

    return (
        <div>
            <div>
                <div style={{ justifyContent: "center", marginTop: "8pt" }}>
                    <div style={{ margin: "auto", textAlign: "center" }}>
                        <SearchBar setParams={(values) => setParams(values)} />
                        {typeof params.difficulty !== "undefined" && (
                            <Button onClick={() => setParams({})}>Clear</Button>
                        )}
                    </div>
                </div>
            </div>
            <div
                style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "3vh",
                }}
            >
                <div style={{ margin: "auto" }}>{cards}</div>
            </div>
        </div>
    );
};

export default Problems;
