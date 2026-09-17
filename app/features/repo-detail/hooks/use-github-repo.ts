import { useQuery } from "@tanstack/react-query";

import { getRepo } from "~/api/services/get-repo";

export function useGithubRepo(username: string, repoName: string) {
	const fullName = `${username}/${repoName}`;

	return useQuery({
		queryKey: ["github-repo", fullName],
		queryFn: () => getRepo(fullName),
	});
}
