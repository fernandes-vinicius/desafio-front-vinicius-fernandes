export interface GithubUser {
	login: string;
	name: string | null;
	avatarUrl: string;
	bio: string | null;
	email: string | null;
	followers: number;
	following: number;
	htmlUrl: string;
}

export interface GithubRepo {
	id: number;
	name: string;
	fullName: string;
	description: string | null;
	stargazersCount: number;
	language: string | null;
	htmlUrl: string;
	updatedAt: string;
}
