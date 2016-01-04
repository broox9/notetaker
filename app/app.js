'use-strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes.js';

const mainElement = document.documentElement.querySelector('main');

ReactDOM.render(
  <Router>{routes}</Router>,
  mainElement
);
