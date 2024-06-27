import { useBlocker, useNavigate } from 'react-router-dom';

export function useRouteGuard() {
	const authed = localStorage.getItem('authed') === 'true';
	const navigate = useNavigate();

	useBlocker(({ currentLocation, nextLocation }) => {
		if (!authed) {
			navigate('/login');
			return true;
		}
		return false;
	});
}
