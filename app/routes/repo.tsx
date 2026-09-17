import { RepoDetail } from "~/features/repo/components/repo-detail";

import type { Route } from "./+types/repo";

export default function Repo({ params }: Route.ComponentProps) {
	const { username, repo } = params;

	return (
		<main>
			<RepoDetail username={username} repoName={repo} />
		</main>
	);
}
