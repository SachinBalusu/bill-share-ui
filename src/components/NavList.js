import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DashboardRounded from "@material-ui/icons/DashboardRounded";
import AddAlertRounded from "@material-ui/icons/AddAlertRounded";
import GroupRounded from "@material-ui/icons/GroupRounded";
import FaceRounded from "@material-ui/icons/FaceRounded";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import ArrowBackRounded from "@material-ui/icons/ArrowBackRounded";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <div>
      <List>
        <ListItem button component={Link} to={"/Dashboard"}>
          <ListItemIcon>
            <DashboardRounded />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to={"/Activity"}>
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
      <Divider />
      <List>
        <ListItem button component={Link} to={"/Account"}>
          <ListItemIcon>
            <AccountCircleRounded />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArrowBackRounded />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItem>
      </List>
    </div>
  );
}

export default NavList;
