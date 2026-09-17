import { useInfiniteQuery } from "@tanstack/react-query";

import { getRepos } from "~/api/services/get-repos";

const PER_PAGE = 10;

export function useGithubRepos(username: string) {
	return useInfiniteQuery({
		queryKey: ["github-repos", username],
		queryFn: ({ pageParam }) => getRepos({ username, page: pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lasPage, allPages) => {
			return lasPage.length === PER_PAGE ? allPages.length + 1 : undefined;
		},
	});
}
