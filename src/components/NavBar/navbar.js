import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import cncLogo from "./CNC-logo.png"
import "./navbar.css"
 
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    AppBar,
    Toolbar,
    Button,
    Box
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
 
// Exporting Default Navbar to the App.js File
export default function Navbar() {
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:600px)");
 
    const [open, setOpen] = useState(false);
 
    const handleClick = () => {
        setOpen(!open);
    };
 
    return (
        <div className="navbar">
            <AppBar 
                position="static"
                sx={{ bgcolor: "#004aad"}}
            >
                <Toolbar 
                    variant="dense"
                    className="nav-toolbar"    
                >
                    {small && (
                        <>
                            <Box
                                component="img"
                                sx={{
                                height: 64,
                                }}
                                alt="logo"
                                src={cncLogo}
                            />
                            <List>
                                <ListItem button>
                                    <Button
                                        onClick={
                                            handleClick
                                        }
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                        {open ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </Button>
                                </ListItem>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List
                                        component="div"
                                        disablePadding
                                    >
                                        <ListItem button>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="About" />
                                        </ListItem>{" "}
                                        <ListItem button>
                                            <ListItemText primary="Contact" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </>
                    )}
 
                    {full && (
                        <>
                            <Box
                                component="img"
                                sx={{
                                height: 64,
                                }}
                                alt="logo"
                                src={cncLogo}
                            />
                            <Box>
                                <Button color="inherit">
                                    About
                                </Button>
    
                                <Button color="inherit">
                                    Experience
                                </Button>
                                <Button color="inherit">
                                    Projects
                                </Button>
                                <Button color="inherit">
                                    Contact
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}