import React, { Component } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
} from "@material-ui/core";
import { Menu, AccountCircle } from "@material-ui/icons";

import Problems from "./Problems.js";
import AddProblem from "./Add.js";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: false, database: {} };
    }
    componentDidMount() {
        this.setState({ database: this.props.firebase.firestore() });
    }

    handleDrawer = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{ marginRight: "auto" }}>
                            <IconButton onClick={this.handleDrawer}>
                                <Menu />
                            </IconButton>
                        </div>
                        <Typography variant="h5">IceBox</Typography>
                        <div style={{ marginLeft: "auto" }}>
                            <IconButton>
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <Drawer
                            open={this.state.drawerOpen}
                            onClose={this.handleDrawer}
                            anchor="left"
                        >
                            <List>
                                <ListItem button>Test</ListItem>
                            </List>
                        </Drawer>
                    </Toolbar>
                </AppBar>
                <Problems />
                <footer>
                    <AddProblem />
                </footer>
            </div>
        );
    }
}

export default Dashboard;
