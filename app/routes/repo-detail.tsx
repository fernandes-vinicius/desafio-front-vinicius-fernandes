import { RepoDetail } from "~/features/repo-detail/components/repo-detail";

import type { Route } from "./+types/repo-detail";

export default function RepoDetailRoute({ params }: Route.ComponentProps) {
	const { username, repo } = params;

	return (
		<main>
			<RepoDetail username={username} repoName={repo} />
		</main>
	);
}
