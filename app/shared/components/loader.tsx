import { Spinner } from "react-bootstrap";

export function Loader({ children, ...props }: React.ComponentProps<"div">) {
	return (
		<div className="d-flex justify-content-center py-5" {...props}>
			{/** biome-ignore lint/a11y/useSemanticElements: <> */}
			<Spinner animation="border" role="status">
				<span className="visually-hidden">{children}</span>
			</Spinner>
		</div>
	);
}
