import { SearchForm } from "~/features/home/components/search-form";
import { Suggestions } from "~/features/home/components/suggestions";

export function Hero() {
	return (
		<section
			id="hero"
			className="position-relative d-flex flex-column align-items-center text-center px-3 py-5"
		>
			<span
				className="badge rounded-pill mb-4 fw-medium px-3 py-2"
				style={{
					background: "var(--gx-accent-soft)",
					color: "var(--gx-accent-dark)",
				}}
			>
				Explorador de perfis GitHub
			</span>

			<h1
				className="display-6 fw-bold mb-3"
				style={{ maxWidth: 720, textWrap: "balance" }}
			>
				Descubra os repositórios mais relevantes de qualquer{" "}
				<span style={{ color: "var(--gx-accent-dark)" }}>desenvolvedor</span>
			</h1>

			<p
				className="text-body-secondary mb-4"
				style={{ maxWidth: 560, fontSize: "1.1rem" }}
			>
				Busque um usuário do GitHub e veja perfil, estatísticas e projetos
				ordenados por popularidade — em segundos.
			</p>

			<SearchForm />
			<Suggestions />
		</section>
	);
}
