import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

/**
 * Renders an error page with information about the route error.
 * @returns The JSX for the error page.
 */
export default function ErrorPage(): JSX.Element {
	const error = useRouteError();
	function errorMessage(): string {
		if (isRouteErrorResponse(error)) {
			return `${error.status} ${error.statusText}`;
		} else if (error instanceof Error) {
			return error.message;
		} else if (typeof error === 'string') {
			return error;
		} else {
			console.error(error);
			return 'Unknown error';
		}
	}
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{errorMessage()}</i>
			</p>
		</div>
	);
}
