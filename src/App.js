import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import NavBar from "./components/NavBar";
import "typeface-roboto";
import LoginPage from "./components/LoginPage";
import Landing from "./components/Landing";
import MainContent from "./components/MainContent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1de9b6"
    },
    secondary: {
      main: "#388e3c"
    }
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <Grid item sm={12}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/home" component={NavBar} />
                <MainContent />
              </Switch>
            </BrowserRouter>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
