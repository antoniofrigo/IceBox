import React, { Component } from "react";
import { Formik } from "formik";
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Input,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    handleShow = (e) => {
        e.preventDefault();
        this.setState({ show: !this.state.show });
    };

    render() {
        const firebase = this.props.firebase;
        return (
            <Formik
                enableReinitialize={true}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(
                            values.email,
                            values.password
                        )
                        .catch(function (error) {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            alert(errorCode);
                            alert(errorMessage);
                        });
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <TextField
                            style={{ width: "200pt" }}
                            required
                            id="email"
                            name="email"
                            value={props.values.email}
                            placeholder="Email"
                            onChange={props.handleChange}
                        />
                        <br />
                        <Input
                            style={{ width: "200pt" }}
                            required
                            id="password"
                            name="password"
                            type={this.state.show ? "text" : "password"}
                            value={props.values.password}
                            placeholder="Password"
                            onChange={props.handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleShow}
                                        onMouseDown={this.handleShow}
                                    >
                                        {this.state.show ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <br />
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            style={{ margin: "10pt" }}
                        >
                            Log In
                        </Button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default Login;
