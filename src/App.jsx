import React, { Component } from "react";
import Articles from "./Components/Articles";
import EconomyPage from "./Components/Pages/EconomyPage";
import SportsPage from "./Components/Pages/SportsPage";
import LifestylePage from "./Components/Pages/LifestylePage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Switch>
            <Route exact path="/" component={Articles}></Route>
            <Route exact path="/economy" component={EconomyPage}></Route>
            <Route exact path="/sports" component={SportsPage}></Route>
            <Route exact path="/lifestyle" component={LifestylePage}></Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;