import { Link, Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<nav className="bg-emerald-600 py-5">
				<div className="container flex justify-between">
					<div>
						<Link className="link" to="/">
							Home
						</Link>
						<Link className="ml-7" to="/create">
							Create one!
						</Link>
					</div>
					<section>
						<Link className="link bg-yellow-600 px-4 py-2 rounded" to="/login">
							Login
						</Link>
					</section>
				</div>
			</nav>
			<section>
				<Outlet />
			</section>
		</>
	);
}

export default App;
