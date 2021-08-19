import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SellerListMain from './pages/SellerListMain/SellerListMain';
import SellerDetail from './pages/SellerDetail/SellerDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/seller-list-main" component={SellerListMain} />
          <Route exact path="/seller-detail" component={SellerDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
