import { Post } from '../types/index';

const storageKey = 'simple_posts';

export const getPosts = (): Post[] => {
	const posts = JSON.parse(localStorage.getItem(storageKey)!) ?? [];
	return posts;
};

export const getPost = (id: number): Post | null => {
	const posts = getPosts();
	return posts.find(post => post.id === id) || null;
};

export const setPosts = (posts: Post[]): void => {
	localStorage.setItem(storageKey, JSON.stringify(posts));
};

export const createPost = (post: Post): void => {
	const posts = getPosts();
	posts.push({ ...post, id: Math.random() });
	setPosts(posts);
};

export const deletePost = (id: number): void => {
	const posts = getPosts().filter(post => post.id !== id);
	setPosts(posts);
};

export const updatePost = (id: number, post: Post): void => {
	const posts = getPosts();
	const index = posts.findIndex(p => p.id === id);
	if (index !== -1) {
		posts[index] = post;
		setPosts(posts);
	}
};
