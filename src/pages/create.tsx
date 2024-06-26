import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createPost, updatePost, getPost } from '../api';
import { Post } from '../types/index';

export default function CreatePage() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const navigate = useNavigate();
	const { postId } = useParams();

	useEffect(() => {
		if (postId) {
			const post = getPost(Number(postId))!;
			setTitle(post.title);
			setBody(post.description);
			setTags(post.tags || []);
		}
	}, [postId]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const post: Post = {
				id: Number(postId),
				createdAt: new Date(),
				title,
				description: body,
				tags,
			};
			if (postId) {
				updatePost(post.id, post);
			} else {
				createPost(post);
			}
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container mx-auto p-5">
			<Link className="text-sky-500" to="/">
				{'< Back'}
			</Link>
			<h1 className="text-3xl font-bold  inline ml-5">
				{postId ? 'Edit Post' : 'Create Post'}
			</h1>
			<form onSubmit={handleSubmit} className="mt-10">
				<div className="mb-5">
					<label htmlFor="title" className="block mb-2">
						Title
					</label>
					<input
						required
						id="title"
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="body" className="block mb-2">
						Body
					</label>
					<textarea
						id="body"
						value={body}
						onChange={e => setBody(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="tags" className="block mb-2">
						Tags (comma separated)
					</label>
					<input
						id="tags"
						type="text"
						value={tags.join(',')}
						onChange={e => setTags(e.target.value.split(','))}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
				<button type="submit" className="bg-yellow-600 px-4 py-2 rounded">
					{postId ? 'Update Post' : 'Create Post'}
				</button>
			</form>
		</div>
	);
}
