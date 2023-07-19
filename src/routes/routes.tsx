import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './Home/Home';
import VendorsList from './VendorsList/VendorsList';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/vendors',
		element: <VendorsList />,
	},
];

export const router = createBrowserRouter(routes);
