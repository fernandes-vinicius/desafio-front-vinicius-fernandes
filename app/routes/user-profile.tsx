import { ProfileCard } from "~/features/user-profile/components/profile-card";
import { RepoList } from "~/features/user-profile/components/repo-list";
import { SortFilter } from "~/features/user-profile/components/sort-filter";

import type { Route } from "./+types/user-profile";

export default function UserProfile({ params }: Route.ComponentProps) {
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
