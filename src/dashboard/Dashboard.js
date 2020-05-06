import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Fab,
    Tooltip,
} from "@material-ui/core";
import { Add, AccountCircle, Equalizer } from "@material-ui/icons";

import Problems from "./Problems.js";
import AddProblem from "./Add.js";
import Statistics from "./Statistics.js";
import Profile from "./Profile.js";
import LogOut from "./LogOut.js";

const Dashboard = (props) => {
    const [statsOpen, handleStats] = useState(false);
    const [dialogOpen, handleDialog] = useState(false);
    const [profileOpen, handleProfile] = useState(false);

    return (
        <div>
            <AppBar position="relative" style={{ zIndex: "1400" }}>
                <Toolbar>
                    <div style={{ marginRight: "auto" }}>
                        <Tooltip title="View statistics">
                            <IconButton onClick={() => handleStats(!statsOpen)}>
                                <Equalizer />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <Typography variant="h5">IceBox</Typography>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                        <LogOut />
                        <Tooltip title="View profile information">
                            <IconButton onClick={() => handleProfile(!profileOpen)}>
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
            <Problems mode="Edit" dialog={dialogOpen} onClick={() => handleDialog(!dialogOpen)}/>
            <div className="fab">
                <Fab onClick={() => handleDialog(!dialogOpen)} color="secondary">
                    <Add />
                </Fab>
            </div>
            <footer>
                <AddProblem
                    mode="New"
                    dialog={dialogOpen}
                    onClick={() => handleDialog(!dialogOpen)}
                />
            </footer>
            <Statistics open={statsOpen} onClose={() => handleStats(!statsOpen)} />
            <Profile
                open={profileOpen}
                onClose={() => handleProfile(!profileOpen)}
                user={props.user}
            />
        </div>
    );
};

export default Dashboard;
