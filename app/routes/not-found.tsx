import { NotFound } from "~/shared/components/not-found";

export default function NotFoundRoute() {
	return (
		<main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-3 py-5">
			<NotFound />
		</main>
	);
}
