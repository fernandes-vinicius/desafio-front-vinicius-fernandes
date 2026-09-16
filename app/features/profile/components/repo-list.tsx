import { RepoListItem } from "~/features/profile/components/repo-list-item";
import type { GithubRepo } from "~/shared/api/types";
import { EmptyState, EmptyStateText } from "~/shared/components/empty-state";

type RepoListProps = {
	repos: GithubRepo[];
};

export function RepoList({ repos }: RepoListProps) {
	if (repos.length === 0) {
		return (
			<EmptyState className="list-group shadow-sm">
				<EmptyStateText className="list-group-item">
					Nenhum repositório público encontrado.
				</EmptyStateText>
			</EmptyState>
		);
	}

	return (
		<ul className="list-group shadow-sm" aria-label="Lista de repositórios">
			{repos.map((repo) => (
				<RepoListItem key={repo.id} repo={repo} />
			))}
		</ul>
	);
}
