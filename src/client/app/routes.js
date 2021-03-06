import React from 'react';
import {IndexRedirect, Redirect, Route} from 'react-router';

import Authorize from './components/pages/authorize';
import Admin from './components/pages/admin';
import AdminAuthorize from './components/pages/admin/authorize';
import AppRoot from './components/app-root';
import Blacklist from './components/pages/blacklist';
import Login from './components/pages/login';
import Logout from './components/pages/logout';
import OTP from './components/pages/otp';
import Status from './components/pages/status';
import U2F from './components/pages/u2f';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRedirect to="/login" />
    <Route path="login" component={Login} />
    <Route path="otp" component={OTP} />
    <Route path="u2f" component={U2F} />
    <Route path="logout" component={Logout} />
    <Route path="status" component={Status} />
    <Route path="blacklist" component={Blacklist} />
    <Route path="admin" component={Admin} />
    <Route path="admin/authorize/:authorizationID" component={AdminAuthorize} />
    <Route path="authorize" component={Authorize} />
    <Redirect from="*" to="/login" />
  </Route>
);
