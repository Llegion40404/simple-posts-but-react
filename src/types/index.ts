export type Post = {
	id: number;
	createdAt: Date;
	title: string;
	description: string;
	editedAt?: Date;
	author?: string;
	tags?: string[];
	private: boolean;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};
