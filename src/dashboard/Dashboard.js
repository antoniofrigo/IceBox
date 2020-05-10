import React, { Suspense, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Fab,
    Tooltip,
    Tabs,
    Tab,
    CircularProgress,
} from "@material-ui/core";
import { Add, AccountCircle } from "@material-ui/icons";

// import Problems from "./Problems.js";
import AddProblem from "./Add.js";
import Statistics from "./Statistics.js";
import Profile from "./Profile.js";
import LogOut from "./LogOut.js";
const Problems = React.lazy(() => import("./Problems.js"));

const TabPanel = (props) => {
    return (
        <div role="tabpanel" hidden={props.value !== props.index} id={props.index}>
            {props.value === props.index && props.children}
        </div>
    );
};

const Dashboard = (props) => {
    const [statsOpen, handleStats] = useState(false);
    const [dialogOpen, handleDialog] = useState(false);
    const [profileOpen, handleProfile] = useState(false);
    const [tabValue, handleTab] = useState(0);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <table className="base_table">
                        <tbody>
                            <tr>
                                <td style={{textAlign: "left"}}>
                                    <Tabs
                                        value={tabValue}
                                        onChange={(event, value) => handleTab(value)}
                                    >
                                        <Tab label="Dashboard" />
                                        <Tab label="Archive" />
                                    </Tabs>
                                </td>
                                <td style={{textAlign: "center"}}>
                                    <Typography variant="h5">IceBox</Typography>
                                </td>
                                <td style={{textAlign: "right"}}>
                                    <Tooltip title="View profile information">
                                        <IconButton onClick={() => handleProfile(!profileOpen)}>
                                            <AccountCircle style={{ color: "#FFFFFF" }} />
                                        </IconButton>
                                    </Tooltip>
                                    <LogOut />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Toolbar>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                <Suspense fallback={<CircularProgress />}>
                    <Problems
                        mode="Edit"
                        archive={true}
                        dialog={dialogOpen}
                        onClick={() => handleDialog(!dialogOpen)}
                    />
                </Suspense>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <Suspense fallback={<CircularProgress />}>
                    <Problems
                        mode="Edit"
                        archive={false}
                        dialog={dialogOpen}
                        onClick={() => handleDialog(!dialogOpen)}
                    />
                </Suspense>
            </TabPanel>
            <div className="fab">
                <Fab onClick={() => handleDialog(!dialogOpen)} color="secondary">
                    <Add />
                </Fab>
            </div>
            <AddProblem mode="New" dialog={dialogOpen} onClick={() => handleDialog(!dialogOpen)} />
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
