import BarChart from '../components/BarChart';
import Login from '../components/Login';
import Home from '../components/Home';

const routes = [
  {
    path: '/bar-chart',
    name: 'Bar Chart',
    component: BarChart,
    exact: true,
    protected: true,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    protected: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: true,
  },
];

export default routes;
