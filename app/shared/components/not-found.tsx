import { Link } from "react-router";

import { ArrowLeftIcon } from "~/shared/components/icons";

export function NotFound() {
	return (
		<>
			<svg
				width="88"
				height="88"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-body-tertiary mb-4"
				aria-hidden="true"
			>
				<circle cx="6" cy="6" r="2.4" />
				<circle cx="18" cy="6" r="2.4" />
				<circle cx="12" cy="19" r="2.4" />
				<path d="M6 8.4V13a3 3 0 0 0 3 3h1.4" />
				<path d="M18 8.4V13a3 3 0 0 1-3 3h-1.4" />
				<path d="M12 16v.6" />
				<line x1="3.5" y1="21" x2="8.5" y2="16" stroke="var(--gx-accent)" />
			</svg>

			<p className="font-mono text-body-tertiary small mb-2">ERRO 404</p>
			<h1 className="h3 fw-bold mb-2">Página não encontrada</h1>
			<p className="text-body-secondary mb-4" style={{ maxWidth: 420 }}>
				O usuário ou repositório que você está procurando não existe ou foi
				removido.
			</p>

			<Link to="/" className="d-flex align-items-center gap-2 text-primary">
				<ArrowLeftIcon />
				Voltar para o início
			</Link>
		</>
	);
}
