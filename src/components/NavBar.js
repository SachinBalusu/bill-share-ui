import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Hidden, Drawer } from "@material-ui/core";

import NavList from "./NavList";
import MainContent from "./MainContent";
import { Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Activity from "./Activity";
import Groups from "./Groups";
import Friends from "./Friends";
import Account from "./Account";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import AddAlertRounded from "@material-ui/icons/AddAlertRounded";
import GroupRounded from "@material-ui/icons/GroupRounded";
import FaceRounded from "@material-ui/icons/FaceRounded";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      marginLeft: 200
    }
  },
  title: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  toolbar: theme.mixins.toolbar,
  button: {
    margin: theme.spacing.unit
  }
});

class NavBar extends React.Component {
  state = {
    mobileOpen: false,
    currentPage: Dashboard
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Bills Share
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={this.state.mobileOpen}
            onClick={this.handleDrawerToggle}
            onKeyDown={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <NavList />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <ListItem
                button
                onClick={() => {
                  this.setState(state => ({ currentPage: Dashboard }));
                }}
              >
                <ListItemIcon>
                  <DashboardRounded />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  this.setState(state => ({ currentPage: Activity }));
                }}
              >
                <ListItemIcon>
                  <AddAlertRounded />
                </ListItemIcon>
                <ListItemText primary="Activity" />
              </ListItem>
              <ListItem button component={Link} to={"/Groups"}>
                <ListItemIcon>
                  <GroupRounded />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItem>
              <ListItem button component={Link} to={"/Friends"}>
                <ListItemIcon>
                  <FaceRounded />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/Activity" component={Activity} />
          <Route path="/Groups" component={Groups} />
          <Route path="/Friends" component={Friends} />
          <Route path="/Account" component={Account} /> */}
          <this.state.currentPage />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
