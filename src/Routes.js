import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SellerListMain from './pages/SellerListMain/SellerListMain';
import SellerDetail from './pages/SellerDetail/SellerDetail';
import Main from './pages/Main/Main';
import SellerUpload from './pages/SellerUpload/SellerUpload';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/seller-list-main" component={SellerListMain} />
          <Route exact path="/seller-detail" component={SellerDetail} />
          <Route exact path="/seller-upload" component={SellerUpload} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
