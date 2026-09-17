import { ProfileCard } from "~/features/profile/components/profile-card";
import { RepoList } from "~/features/profile/components/repo-list";
import { SortFilter } from "~/features/profile/components/sort-filter";

import type { Route } from "./+types/profile";

export default function Profile({ params }: Route.ComponentProps) {
	const { username } = params;

	return (
		<main className="flex-grow-1">
			<div className="container-xxl py-4">
				<div className="row g-4">
					<div className="col-lg-4">
						<ProfileCard username={username} />
					</div>

					<div className="col-lg-8">
						<div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-2 mb-3">
							<h2 className="h5 mb-0">Repositórios</h2>
							<SortFilter />
						</div>
						<RepoList username={username} />
					</div>
				</div>
			</div>
		</main>
	);
}
