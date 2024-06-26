import { Link } from 'react-router-dom';
import { deletePost, getPosts } from '../api/index';
import { useState } from 'react';

export default function PostList() {
	const [posts, setPosts] = useState(getPosts());
	return (
		<div className="container flex justify-between gap-5 py-10">
			{posts.map(post => (
				<div
					key={post.id}
					className="bg-zinc-500 rounded border-b-2 border-gray-200 p-4 mb-4">
					<h2 className="text-2xl font-bold">{post.title}</h2>
					<p className="mt-2">{post.description}</p>
					<p className="mt-2">
						Created at: {new Date(post.createdAt).toLocaleString()}
					</p>
					<p className="mt-2">Id: {post.id}</p>
					<p className="mt-2">
						Edited at:
						{post.editedAt ? new Date(post.editedAt).toLocaleString() : ' N/A'}
					</p>
					<p className="mt-2">Author: {post.author ?? 'N/A'}</p>
					<p className="mt-2">Tags: {post.tags?.join(', ') ?? 'N/A'}</p>
					<div className="flex justify-between mt-2">
						<Link
							to={`/create/${post.id}`}
							className="bg-sky-500 px-3 py-1 rounded">
							Edit
						</Link>
						<button
							className="bg-red-600 px-3 py-1 rounded"
							onClick={() => {
								if (
									window.confirm(
										`Are you sure you want to delete ${post.title}?`,
									)
								) {
									deletePost(post.id);
									setPosts(getPosts());
								}
							}}>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
