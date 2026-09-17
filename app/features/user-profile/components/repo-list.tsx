import { Alert, Button } from "react-bootstrap";

import { RepoListItem } from "~/features/user-profile/components/repo-list-item";
import { useGithubRepos } from "~/features/user-profile/hooks/use-github-repos";
import { useSortFilter } from "~/features/user-profile/hooks/use-sort-filter";
import { sortRepos } from "~/features/user-profile/utils/sort-repos";
import { Loader } from "~/shared/components/loader";

type RepoListProps = {
	username: string;
};

export function RepoList({ username }: RepoListProps) {
	const { sort } = useSortFilter();
	const {
		data,
		status,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useGithubRepos(username);

	if (status === "pending") {
		return <Loader>Carregando repositórios...</Loader>;
	}

	if (status === "error") {
		return <Alert variant="danger">{error.message}</Alert>;
	}

	const repos = data.pages.flat();

	if (repos.length === 0) {
		return (
			<div className="list-group shadow-sm">
				<p className="list-group-item text-body-secondary text-center mb-0 py-4 ">
					Nenhum repositório público encontrado.
				</p>
			</div>
		);
	}

	const sortedRepos = sortRepos(repos, sort);

	return (
		<div>
			<p className="text-body-tertiary fw-normal mb-2">
				Mostrando {repos.length} {repos.length === 1 ? "público" : "públicos"}
			</p>

			<ul className="list-group shadow-sm" aria-label="Lista de repositórios">
				{sortedRepos.map((repo) => (
					<RepoListItem key={repo.id} repo={repo} />
				))}
			</ul>

			{/* Load More */}
			{hasNextPage && (
				<div className="d-flex justify-content-center mt-4">
					<Button
						size="sm"
						variant="outline-secondary"
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? "Carregando..." : "Carregar mais"}
					</Button>
				</div>
			)}
		</div>
	);
}
