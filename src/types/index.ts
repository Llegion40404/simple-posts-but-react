export type Post = {
	id: number;
	createdAt: Date;
	title: string;
	description: string;
	editedAt?: Date;
	author?: string;
	tags?: string[];
};
