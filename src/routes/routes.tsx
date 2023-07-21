import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Default from './Default/Default';
import Home from './Default/Home/Home';
import VendorsList, { loader as vendorsListLoader } from './Default/VendorsList/VendorsList';
import Error from './Default/Error/Error';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Default />,
		errorElement: <Error/>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/vendors',
				element: <VendorsList />,
				loader: vendorsListLoader,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
