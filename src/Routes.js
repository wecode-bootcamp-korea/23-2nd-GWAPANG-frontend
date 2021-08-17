import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Main 컴포넌트
import Main from "./pages/Main/Main";

// Product 컴포넌트
import Product from "./pages/Product/Product";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
