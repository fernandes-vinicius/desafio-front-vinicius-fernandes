import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router";

import { useGithubRepo } from "~/features/repo-detail/hooks/use-github-repo";
import { ArrowLeftIcon, ExternalLinkIcon } from "~/shared/components/icons";
import { Loader } from "~/shared/components/loader";
import { RepoLanguage } from "~/shared/components/repo-language";
import { RepoStargazersCount } from "~/shared/components/repo-stargazers-count";

type RepoDetailProps = {
	username: string;
	repoName: string;
};

export function RepoDetail({ username, repoName }: RepoDetailProps) {
	const { data: repo, status, error } = useGithubRepo(username, repoName);

	if (status === "pending") {
		return <Loader>Carregando repositório...</Loader>;
	}

	if (status === "error") {
		return <Alert variant="danger">{error.message}</Alert>;
	}

	return (
		<div className="mx-auto mt-4 container-xxl">
			{/* Breadcrumb */}
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb small">
					<li className="breadcrumb-item">
						<Link to={`/u/${username}`}>{username}</Link>
					</li>
					<li
						className="breadcrumb-item active fw-semibold"
						aria-current="page"
					>
						{repo.name}
					</li>
				</ol>
			</nav>

			<p className="display-4 fw-bold mb-3">{repo.name}</p>

			{repo.description && (
				<p
					className="text-body-secondary mb-4"
					style={{ fontSize: "1.05rem", maxWidth: 720 }}
				>
					{repo.description}
				</p>
			)}

			<div className="card shadow-lg p-4">
				<div className="d-flex align-items-center gap-4">
					<div>
						<p className="text-body-tertiary small text-uppercase mb-1">
							Estrelas
						</p>
						<RepoStargazersCount
							value={repo.stargazers_count}
							className="fw-bold fs-5"
						/>
					</div>

					{repo.language && <div className="vr" />}

					{repo.language && (
						<div>
							<p className="text-body-tertiary small text-uppercase mb-1">
								Linguagem
							</p>
							<RepoLanguage language={repo.language} className="fw-bold fs-5" />
						</div>
					)}
				</div>
			</div>

			<div className="d-flex gap-4" style={{ marginTop: 32 }}>
				<Button
					as="a"
					href={repo.html_url}
					target="_blank"
					rel="noreferrer"
					variant="dark"
					className="d-flex align-items-center justify-content-center gap-2"
				>
					Ver no GitHub
					<ExternalLinkIcon />
					<span className="visually-hidden">(abre em nova aba)</span>
				</Button>

				<Link
					to={`/u/${username}`}
					className="d-flex align-items-center justify-content-center gap-2"
				>
					<ArrowLeftIcon />
					Voltar para repositórios
				</Link>
			</div>
		</div>
	);
}
