import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NotFound } from '../pages/NotFound';

export const UnauthenticatedRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};
