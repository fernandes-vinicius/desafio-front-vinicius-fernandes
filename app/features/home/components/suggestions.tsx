import { useSearch } from "~/features/home/hooks/use-search";

const SUGGESTIONS = ["fernandes-vinicius", "sebmarkbage", "sindresorhus"];

export function Suggestions() {
	const { search } = useSearch();

	return (
		// biome-ignore lint/a11y/useSemanticElements: <>
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
	);
}
