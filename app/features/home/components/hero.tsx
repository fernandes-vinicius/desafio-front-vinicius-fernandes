import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { SearchIcon } from "~/shared/components/icons";
import { useGithubSearch } from "~/shared/hooks/use-github-search";

const SUGGESTIONS = ["fernandes-vinicius", "devkatasoft", "pedrolinuxdev"];

export function Hero() {
	const { search } = useGithubSearch();
	const [query, setQuery] = useState("");

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		search(query);
	}

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

			<search
				aria-label="Busca principal"
				className="w-100"
				style={{ maxWidth: 560 }}
			>
				<Form onSubmit={handleSubmit}>
					<InputGroup size="lg" className="shadow-sm">
						<InputGroup.Text>
							<SearchIcon className="text-body-tertiary" />
						</InputGroup.Text>
						<Form.Control
							type="search"
							placeholder="Digite um usuário, ex: fernandes-vinicius"
							aria-label="Buscar usuário do GitHub"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Button type="submit" variant="dark">
							Buscar
						</Button>
					</InputGroup>
				</Form>
			</search>

			{/* Suggestions */}
			{/** biome-ignore lint/a11y/useSemanticElements: <> */}
			<div
				role="group"
				aria-labelledby="suggestions-label"
				className="d-flex align-items-center gap-2 flex-wrap justify-content-center mt-4"
			>
				<span id="suggestions-label" className="text-body-tertiary small">
					Experimente:
				</span>
				{SUGGESTIONS.map((username) => (
					<button
						key={username}
						type="button"
						aria-label={`Buscar usuário ${username}`}
						className="btn btn-outline-secondary btn-sm rounded-pill font-mono"
						onClick={() => search(username)}
					>
						{username}
					</button>
				))}
			</div>
		</section>
	);
}
