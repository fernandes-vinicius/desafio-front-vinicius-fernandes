import { Button, Card, Form } from "react-bootstrap";

export function Welcome() {
	return (
		<div className="container py-5" style={{ maxWidth: 480 }}>
			<h1>Teste de tema</h1>
			<p>
				Texto normal com um <a href="#">link de exemplo</a> e um{" "}
				<span className="text-primary">texto em destaque</span>.
			</p>

			<Card className="mb-3 p-3">
				<Form.Control placeholder="Campo de busca" className="mb-3" />
				<Button variant="dark" className="me-2">
					Botão principal
				</Button>
				<Button variant="outline-secondary">Botão secundário</Button>
			</Card>
		</div>
	);
}
