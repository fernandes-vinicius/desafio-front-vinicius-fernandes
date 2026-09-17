import { apiClient } from "~/api/client";
import type { GithubRepo } from "~/api/types";

type GetReposParams = {
	username: string;
	page?: number;
};

export async function getRepos(params: GetReposParams): Promise<GithubRepo[]> {
	const { data } = await apiClient.get<GithubRepo[]>(
		`/users/${params.username}/repos`,
		{ params: { per_page: 10, page: params.page } },
	);
	return data;
}
