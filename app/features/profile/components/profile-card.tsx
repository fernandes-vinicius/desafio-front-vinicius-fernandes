import { Button } from "react-bootstrap";

import { StatItem } from "~/features/profile/components/stat-item";
import type { GithubUser } from "~/shared/api/types";
import {
	EnvelopeIcon,
	ExternalLinkIcon,
	GithubIcon,
} from "~/shared/components/icons";

type ProfileCardProps = {
	user: GithubUser;
};

export function ProfileCard({ user }: ProfileCardProps) {
	const displayName = user.name ?? user.login;

	return (
		<article className="card shadow-sm p-4 h-100">
			{/* Avatar */}
			<img
				src={user.avatarUrl || ""}
				alt={`Foto de perfil de ${displayName}`}
				width={64}
				height={64}
				className="rounded-circle object-fit-cover mb-3"
			/>

			<h1 className="h4 fw-bold mb-0">{displayName}</h1>
			<p className="font-mono text-body-tertiary mb-3">@{user.login}</p>

			{user.bio && <p className="text-body-secondary mb-3">{user.bio}</p>}

			<dl className="d-flex gap-4 py-3 border-top border-bottom mb-3">
				<StatItem label="seguidores" value={user.followers} />
				<StatItem label="seguindo" value={user.following} />
			</dl>

			<ul className="list-unstyled d-flex flex-column gap-2 mb-4">
				{user.email && (
					<li className="d-flex align-items-center gap-2 small">
						<EnvelopeIcon className="text-body-tertiary" />
						<a href={`mailto:${user.email}`} className="text-body-secondary">
							{user.email}
						</a>
					</li>
				)}

				<li className="d-flex align-items-center gap-2 small">
					<GithubIcon className="text-body-tertiary" />
					<a
						href={user.htmlUrl}
						target="_blank"
						rel="noreferrer"
						className="text-body-secondary"
					>
						github.com/{user.login}
						<span className="visually-hidden">(abre em nova aba)</span>
					</a>
				</li>
			</ul>

			<Button
				as="a"
				href={user.htmlUrl}
				target="_blank"
				rel="noreferrer"
				variant="dark"
				className="d-flex align-items-center justify-content-center gap-2"
			>
				Ver perfil no GItHub
				<ExternalLinkIcon />
				<span className="visually-hidden">(abre em nova aba)</span>
			</Button>
		</article>
	);
}
