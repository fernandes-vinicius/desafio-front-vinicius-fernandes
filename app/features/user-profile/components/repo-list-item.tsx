import { Link } from "react-router";

import type { GithubRepo } from "~/api/types";
import { RepoLanguage } from "~/shared/components/repo-language";
import { RepoStargazersCount } from "~/shared/components/repo-stargazers-count";
import { formatRelativeTime } from "~/shared/utils/format-relative-time";

type RepoListItemProps = {
	repo: GithubRepo;
};

export function RepoListItem({ repo }: RepoListItemProps) {
	const [owner] = repo.full_name.split("/");
	const stargazersCount = repo.stargazers_count;

	return (
		<li className="list-group-item py-3">
			<div className="d-flex align-items-center justify-content-between gap-3">
				<div className="min-w-0">
					<p className="font-mono mb-1">
						<span className="text-body-tertiary">{owner}/</span>
						<Link
							to={`/u/${owner}/${repo.name}`}
							className="fw-semibold text-primary text-decoration-none"
						>
							{repo.name}
						</Link>
					</p>

					{repo.description && (
						<p className="text-body-secondary small mb-0">{repo.description}</p>
					)}
				</div>

				<div className="small flex-shrink-0 text-body-secondary">
					<span className="d-none d-lg-inline">
						{formatRelativeTime(repo.updated_at)}
					</span>
				</div>
			</div>

			<div className="d-flex align-items-center justify-content-between gap-3 flex-shrink-0 small text-body-secondary mt-2">
				{repo.language && <RepoLanguage language={repo.language} />}

				{stargazersCount > 0 && (
					<RepoStargazersCount
						value={repo.stargazers_count}
						className="font-mono"
					/>
				)}
			</div>
		</li>
	);
}
