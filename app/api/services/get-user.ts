import { apiClient } from "~/api/client";
import type { GithubUser } from "~/api/types";

export async function getUser(username: string): Promise<GithubUser> {
	const { data } = await apiClient.get<GithubUser>(`/users/${username}`);
	return data;
}
