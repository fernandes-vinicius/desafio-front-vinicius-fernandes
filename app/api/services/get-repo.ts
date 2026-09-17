import { apiClient } from "~/api/client";
import type { GithubRepo } from "~/api/types";

export async function getRepo(full_name: string): Promise<GithubRepo> {
	const { data } = await apiClient.get<GithubRepo>(`/repos/${full_name}`);
	return data;
}
