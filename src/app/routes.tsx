import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

// Dashboard Layout
import Dashboard from './layouts/dashboard-layout/index';

import { LinearProgress } from '@material-ui/core';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path={'/about'}
          component={lazy(() => import('./views/pages/AboutPage'))}
          exact
        />

        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  path={path + '/'}
                  component={lazy(
                    () => import('./views/dashboard/dashboard-default-content'),
                  )}
                  exact
                />

                <Route
                  path={path + '/list-products'}
                  component={lazy(
                    () => import('./views/dashboard/product/ProductListView'),
                  )}
                  exact
                />

                <Route
                  path={path + '/create-product'}
                  component={lazy(
                    () => import('./views/dashboard/product/ProductCreateView'),
                  )}
                  exact
                />
              </Switch>
            </Dashboard>
          )}
        ></Route>

        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect from={'*'} to={'/not-found'} exact />
      </Switch>
    </Suspense>
  );
};

export default Routes;
