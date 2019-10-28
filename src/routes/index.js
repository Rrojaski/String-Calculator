import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Dashboard from './Dashboard/Dashboard';
import Pricing from './Pricing/Pricing';

// Layout
import Header from './Header';
import Footer from './Footer';


function Layout() {
  let routes;

  routes = (
    <Switch>
      <Route exact to='/' component={Dashboard} />
      <Route to='/pricing' component={Pricing} />
    </Switch>
  )

  return (
    <Fragment>
      <Header />
      {routes}
      <Footer />
    </Fragment>
  )
}


export default Layout;