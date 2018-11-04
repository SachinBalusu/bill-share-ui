import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  Divider,
  AppBar,
  Toolbar,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  },
  formInput: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "35vh"
  }
});

function LoginPage(props) {
  const { classes } = props;
  return (
    <div style={{ flexGrow: 1, backgroundColor: "#EEEEEE" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            style={{ textAlign: "center", flex: 1 }}
          >
            Bills Share
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={10} md={6}>
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h3">
              LOGIN
            </Typography>
            <Divider />
            <TextField
              id="email-input"
              label="Email"
              type="Email"
              margin="normal"
              className={classes.formInput}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              margin="normal"
              className={classes.formInput}
            />
            <Button
              component={Link}
              to={"/home"}
              variant="contained"
              color="secondary"
              style={{ margin: 5, width: "30vh" }}
            >
              Login/SignUp
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(LoginPage);
