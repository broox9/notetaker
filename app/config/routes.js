'use-strict';

import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Layout from '../components/layout.js';
import Main from '../components/main.js';
import Profile from '../components/profile.js';

const routes = (
  <Route path="/" component={Layout} >
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Main} />
  </Route>
);


export default routes
