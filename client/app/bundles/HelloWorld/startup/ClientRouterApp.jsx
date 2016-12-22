import React from 'react';
import { Router, hashHistory } from 'react-router';

import routes from '../routes/routes';

export default (_props, _railsContext) => {
  return (
    <Router history={hashHistory}>
      {routes}
    </Router>
  );
};
