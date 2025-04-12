import { lazy } from 'react';
import { createHashRouter } from 'react-router';

import ROUTE_PATH from './constant';
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home'));
const Dashboard = lazy(() => import(/* webpackChunkName: 'dashboard' */ '../pages/Dashboard'));

const router = createHashRouter([
  { index: true, Component: Home },
  {
    Component: Dashboard,
    path: ROUTE_PATH.dashboard,
    children: [],
  },
]);

export default router;
