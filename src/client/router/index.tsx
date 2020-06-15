import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Home } from 'client/Components/Home';

const Router: React.FC = () => (
  <>
    <Route
      exact
      path="/"
      component={Home}
    />
  </>
);

export default Router;