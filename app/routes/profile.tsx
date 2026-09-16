import { ProfileCard } from "~/features/profile/components/profile-card";
import { RepoList } from "~/features/profile/components/repo-list";
import { SortFilter } from "~/features/profile/components/sort-filter";

const MOCK_USER = {
	login: "fernandes-vinicius",
	name: "Vinicius Fernandes",
	avatarUrl: "https://github.com/fernandes-vinicius.png",
	bio: "Lorem ipsum",
	email: "contatov@gmail.com",
	followers: 3482,
	following: 96,
	htmlUrl: "https://google.com",
};

const MOCK_REPOS = [
	{
		id: 1,
		name: "design-system-core",
		fullName: "fernandes-vinicius/design-system-core",
		description:
			"Design system headless em TypeScript, tokens compartilháveis entre React e Vue.",
		stargazersCount: 2900,
		language: "TypeScript",
		htmlUrl: "https://github.com/fernandes-vinicius/design-system-core",
		updatedAt: "2026-09-13T10:00:00Z",
	},
	{
		id: 2,
		name: "vite-plugin-svg-sprite",
		fullName: "fernandes-vinicius/vite-plugin-svg-sprite",
		description: "Plugin Vite para gerar sprites SVG otimizados em build time.",
		stargazersCount: 1700,
		language: "JavaScript",
		htmlUrl: "https://github.com/fernandes-vinicius/vite-plugin-svg-sprite",
		updatedAt: "2026-09-09T10:00:00Z",
	},
	{
		id: 3,
		name: "react-data-table",
		fullName: "fernandes-vinicius/react-data-table",
		description:
			"Tabela de dados acessível e leve para React, com virtualização nativa.",
		stargazersCount: 842,
		language: "TypeScript",
		htmlUrl: "https://github.com/fernandes-vinicius/react-data-table",
		updatedAt: "2026-09-02T10:00:00Z",
	},
];

export default function Profile() {
	return (
		<main className="flex-grow-1">
			<div className="container-xxl py-4">
				<div className="row g-4">
					<div className="col-lg-4">
						<ProfileCard user={MOCK_USER} />
					</div>

					<div className="col-lg-8">
						<div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-2 mb-3">
							<div className="d-flex align-item-center gap-2">
								<h2 className="h5 mb-0">Repositórios</h2>
								<span className="text-body-tertiary fw-normal">&middot;</span>
								<span className="text-body-tertiary fw-normal">
									{MOCK_REPOS.length}{" "}
									{MOCK_REPOS.length === 1 ? "público" : "públicos"}
								</span>
							</div>
							<SortFilter />
						</div>
						<RepoList repos={MOCK_REPOS} />
					</div>
				</div>
			</div>
		</main>
	);
}
