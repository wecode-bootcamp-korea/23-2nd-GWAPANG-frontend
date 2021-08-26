import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './components/Nav/Login/Login';
import Main from './pages/Main/Main';
import SellerListMain from './pages/SellerListMain/SellerListMain';
import SellerDetail from './pages/SellerDetail/SellerDetail';
import SellerUpload from './pages/SellerUpload/SellerUpload';
import ProductDetail from './pages/Product/ProductDetail';
import ProductReview from './pages/Product/ProdcutReview';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-review" component={ProductReview} />
          <Route exact path="/seller-list-main" component={SellerListMain} />
          <Route exact path="/seller-upload" component={SellerUpload} />
          <Route
            exact
            path="/seller-detail/:id/:name"
            component={SellerDetail}
          />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/main" component={Main} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
