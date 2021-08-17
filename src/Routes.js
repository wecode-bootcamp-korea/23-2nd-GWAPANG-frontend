import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './components/Nav/Login/Login';
import Main from './pages/Main/Main';
import SellerListMain from './pages/SellerListMain/SellerListMain';
import SellerDetail from './pages/SellerDetail/SellerDetail';
import SellerUpload from './pages/SellerUpload/SellerUpload';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/seller-list-main" component={SellerListMain} />
          <Route exact path="/seller-detail" component={SellerDetail} />
          <Route exact path="/seller-upload" component={SellerUpload} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
