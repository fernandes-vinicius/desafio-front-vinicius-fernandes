import type { GithubRepo } from "~/api/types";
import type { SortOption } from "~/features/profile/hooks/use-sort-filter";

export function sortRepos(repos: GithubRepo[], sort: SortOption): GithubRepo[] {
	const sorted = [...repos];

	switch (sort) {
		case "name-asc":
			return sorted.sort((a, b) => a.name.localeCompare(b.name));
		case "stars-asc":
			return sorted.sort((a, b) => a.stargazers_count - b.stargazers_count);
		case "stars-desc":
			return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
		case "updated-desc":
			return sorted.sort(
				(a, b) =>
					new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
			);
		default:
			return sorted;
	}
}
