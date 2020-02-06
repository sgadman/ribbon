import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import Ribbon from "../components/Ribbon";
import history from "../components/Utils/history";
import Home from "../pages/Home";
import Bug from "../pages/Bug";
import Epic from "../pages/Epic";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row"
  }
}));

const App = () => {
  const classes = useStyles({});

  useEffect(() => {
    history.push("home");
  });

  return (
    <div className={classes.app}>
      <Ribbon />
      <Router basename="/pega/" history={history}>
        <div style={{marginLeft: 70}}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/bug" component={Bug} />
            <Route path="/epic" component={Epic} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
