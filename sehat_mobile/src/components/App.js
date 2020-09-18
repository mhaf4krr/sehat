import React from "react";
import SplashScreen from "./splash_screen/index";
import LoginScreen from "./login_screen/index";
import DashBoard from "./dashboard/index";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={SplashScreen} />
        <Route path='/login' exact component={LoginScreen} />
        <Route path='/dashboard' exact component={DashBoard} />
      </BrowserRouter>
    );
  }
}

export default App;
