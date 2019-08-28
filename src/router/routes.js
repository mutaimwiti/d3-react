import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ChartsPage from '../pages/ChartsPage';


const routes = [
  {
    path: '/charts',
    name: 'ChartsPage',
    component: ChartsPage,
    exact: true,
    protected: true,
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    exact: true,
    protected: true,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    exact: true,
  },
];

export default routes;
