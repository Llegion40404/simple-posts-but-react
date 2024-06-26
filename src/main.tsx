import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import CreatePage from './pages/create';
import PostList from './pages/postslist';

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/create/:postId?', Component: () => <CreatePage /> },
			{ path: '/', Component: () => <PostList /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
