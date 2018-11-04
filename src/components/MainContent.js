import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import Activity from "./Activity";
import Groups from "./Groups";
import Friends from "./Friends";
import Account from "./Account";
import loginPage from "./LoginPage";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Dashboard} />
        <Route path="/Activity" component={Activity} />
        <Route path="/Groups" component={Groups} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Account" component={Account} /> */}
        {""}
      </div>
    );
  }
}

export default MainContent;
