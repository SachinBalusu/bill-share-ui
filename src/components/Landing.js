import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({ toolbar: theme.mixins.toolbar });

function Landing(props) {
  const { classes } = props;
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            style={{ flex: 1 }}
          >
            Bills Share
          </Typography>
          <Button component={Link} to={"/Login"}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <Typography
        variant="display2"
        color="inherit"
        noWrap
        style={{ textAlign: "center" }}
      >
        Landing Page
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Landing);
