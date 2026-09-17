import { Link } from "react-router";

import { ExternalLinkIcon } from "~/shared/components/icons";

export function Header() {
	return (
		<header className="position-relative">
			<div className="container-xxl d-flex align-items-center gap-3 py-3">
				<Link
					to="/"
					className="navbar-brand d-flex align-items-center gap-2 text-decoration-none mb-0"
				>
					<span className="brand-mark">GX</span>
					<strong>GitHub Explorer</strong>
				</Link>

				<a
					href="https://github.com/DesbravadorSoftware/desafioFront"
					target="_blank"
					rel="noreferrer"
					className="ms-auto d-flex align-items-center gap-2 text-body-secondary text-decoration-none small"
				>
					Sobre
					<ExternalLinkIcon />
				</a>
			</div>
		</header>
	);
}
