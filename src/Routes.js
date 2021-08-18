import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SellerListMain from './pages/SellerListMain/SellerListMain';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/seller-list-main" component={SellerListMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
