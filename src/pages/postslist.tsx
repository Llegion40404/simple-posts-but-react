import { Link } from 'react-router-dom';
import { deletePost, getPosts, updatePost } from '../api/index';
import { useEffect, useState } from 'react';

export default function PostList() {
	const [posts, setPosts] = useState(getPosts());
	useEffect(() => {
		setPosts(getPosts());
	}, []);
	return (
		<section className="container py-10">
			<button className="text-3xl border p-2 rounded bg-white bg-opacity-15 hover:bg-opacity-30">
				Show <span className="text-orange-600">private</span> posts
			</button>
			<div className=" flex justify-between gap-5 py-5">
				{posts.map(post => (
					<div
						key={post.id}
						className="bg-zinc-500 rounded border-b-2 border-gray-200 p-4 mb-4 relative">
						<h2 className="text-2xl font-bold">{post.title}</h2>
						<p className="mt-2">{post.description}</p>
						<p className="mt-2">
							Created at: {new Date(post.createdAt).toLocaleString()}
						</p>
						<p className="mt-2">Id: {post.id}</p>
						<p className="mt-2">
							Edited at:
							{post.editedAt
								? new Date(post.editedAt).toLocaleString()
								: ' N/A'}
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
							<button
								className="bg-indigo-600 px-2 text-sm absolute top-5 right-5 py-1 rounded"
								onClick={() => {
									updatePost(post.id, { ...post, private: !post.private });
									setPosts(getPosts(true));
								}}>
								Make private
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
