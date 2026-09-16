import { getLanguageColor } from "~/features/profile/utils/language-colors";
import type { GithubRepo } from "~/shared/api/types";
import { StarIcon } from "~/shared/components/icons";
import { formatNumber } from "~/shared/utils/format-number";
import { formatRelativeTime } from "~/shared/utils/format-relative-time";

type RepoListItemProps = {
	repo: GithubRepo;
};

export function RepoListItem({ repo }: RepoListItemProps) {
	const [owner] = repo.fullName.split("/");

	return (
		<li className="list-group-item py-3">
			<div className="d-flex align-items-center justify-content-between gap-3">
				<div className="min-w-0">
					<p className="font-mono mb-1">
						<span className="text-body-tertiary">{owner}/</span>
						<a
							href={repo.htmlUrl}
							target="_blank"
							rel="noreferrer"
							className="fw-semibold text-primary text-decoration-none"
						>
							{repo.name}
						</a>
					</p>

					{repo.description && (
						<p className="text-body-secondary small mb-0">{repo.description}</p>
					)}
				</div>

				<div className="small text-body-secondary">
					<span className="d-none d-lg-inline">
						{formatRelativeTime(repo.updatedAt)}
					</span>
				</div>
			</div>

			<div className="d-flex align-items-center justify-content-between gap-3 flex-shrink-0 small text-body-secondary mt-2">
				{repo.language && (
					<span className="d-flex align-items-center gap-1">
						<span
							className="rounded-circle d-inline-block"
							style={{
								width: 9,
								height: 9,
								backgroundColor: getLanguageColor(repo.language),
							}}
							aria-hidden
						/>
						{repo.language}
					</span>
				)}
				<span className="d-flex align-items-center gap-1 font-mono">
					<span className="mt-1">{formatNumber(repo.stargazersCount)}</span>
					<StarIcon className="text-primary" />
				</span>
			</div>
		</li>
	);
}
