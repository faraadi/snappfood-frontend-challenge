import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Default from './Default/Default';
import Home from './Default/Home/Home';
import VendorsList, { loader as vendorsListLoader } from './Default/VendorsList/VendorsList';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Default />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/vendors',
				element: <VendorsList />,
				loader: vendorsListLoader,
				errorElement: <h1>There was an error while loading the page. try again later</h1>,
			},
		]
	}
];

export const router = createBrowserRouter(routes);
