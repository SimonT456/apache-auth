import React from 'react';
import {IndexRedirect, Route} from 'react-router';

import AppRoot from './components/app-root';
import Login from './components/login';
import Status from './components/status';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRedirect to="/login" />
    <Route path="login" component={Login} />
    <Route path="status" component={Status} />
  </Route>
);
