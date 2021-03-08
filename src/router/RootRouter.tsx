import React from 'react';
import { Router } from 'react-router-dom';

import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';
import { history } from './history';

export const RootRouter = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router history={history}>{isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}</Router>
  );
};
