import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './Home/Home';
import VendorsList, { loader as vendorsListLoader } from './VendorsList/VendorsList';

const routes: RouteObject[] = [
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
];

export const router = createBrowserRouter(routes);
