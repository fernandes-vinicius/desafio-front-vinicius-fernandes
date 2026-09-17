import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { useSearch } from "~/features/home/hooks/use-search";
import { SearchIcon } from "~/shared/components/icons";

export function SearchForm() {
	const { search } = useSearch();

	const [query, setQuery] = useState("");

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		search(query);
	}

	return (
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
	);
}
