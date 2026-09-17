import { describe, expect, it } from "vitest";

import type { GithubRepo } from "~/api/types";
import { sortRepos } from "~/features/user-profile/utils/sort-repos";

function makeRepo(overrides: Partial<GithubRepo>): GithubRepo {
	return {
		id: 1,
		name: "repo",
		full_name: "owner/repo",
		description: null,
		stargazers_count: 0,
		language: null,
		html_url: "https://github.com/owner/repo",
		updated_at: "2024-01-01T00:00:00Z",
		...overrides,
	};
}

describe("sortRepos", () => {
	const repos: GithubRepo[] = [
		makeRepo({
			id: 1,
			name: "beta",
			stargazers_count: 10,
			updated_at: "2024-01-10T00:00:00Z",
		}),
		makeRepo({
			id: 2,
			name: "alpha",
			stargazers_count: 30,
			updated_at: "2024-03-01T00:00:00Z",
		}),
		makeRepo({
			id: 3,
			name: "gamma",
			stargazers_count: 20,
			updated_at: "2024-02-15T00:00:00Z",
		}),
	];

	it("ordena por estrelas decrescente", () => {
		const result = sortRepos(repos, "stars-desc");
		expect(result.map((repo) => repo.id)).toEqual([2, 3, 1]);
	});

	it("ordena por estrelas crescente", () => {
		const result = sortRepos(repos, "stars-asc");
		expect(result.map((repo) => repo.id)).toEqual([1, 3, 2]);
	});

	it("ordena por nome em ordem alfabética", () => {
		const result = sortRepos(repos, "name-asc");
		expect(result.map((repo) => repo.name)).toEqual(["alpha", "beta", "gamma"]);
	});

	it("ordena pelo mais recém atualizado", () => {
		const result = sortRepos(repos, "updated-desc");
		expect(result.map((repo) => repo.id)).toEqual([2, 3, 1]);
	});

	it("não altera o array original", () => {
		const original = [...repos];
		sortRepos(repos, "stars-desc");
		expect(repos).toEqual(original);
	});

  it('retorna o array vazio quando ná repos', () => {
    expect(sortRepos([], 'stars-desc')).toEqual([])
  })
});
