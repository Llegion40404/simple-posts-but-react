import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../types/index';
export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const login = async () => {
		const res: User[] = (
			await axios.get('https://jsonplaceholder.typicode.com/users')
		).data;

		if (
			res.some(user => user.username === username && user.name === password)
		) {
			localStorage.setItem('authed', 'true');
			navigate('/');
		}
	};

	return (
		<div className="flex items-center justify-center h-[85vh]">
			<div className="max-w-md w-full p-6 bg-zinc-500 rounded-lg shadow">
				<form onSubmit={login} className="space-y-6">
					<div>
						<label htmlFor="username" className="block text-sm font-medium">
							Username
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="username"
								id="username"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm"
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium">
							Password
						</label>
						<div className="mt-1">
							<input
								type="password"
								name="password"
								id="password"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-zinc-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Login
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								navigate('/');
							}}
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
							Enter as Guest
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
