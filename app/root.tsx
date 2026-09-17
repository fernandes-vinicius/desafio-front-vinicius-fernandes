import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import bootstrapHref from "bootstrap/dist/css/bootstrap.min.css?url";
import { NuqsAdapter } from "nuqs/adapters/react-router/v8";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import { Footer } from "~/shared/components/footer";
import { Header } from "~/shared/components/header";
import { NotFound } from "~/shared/components/not-found";

import type { Route } from "./+types/root";
import appHref from "./app.css?url";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			networkMode: "always",
		},
	},
});

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap",
	},
	{ rel: "stylesheet", href: bootstrapHref },
	{ rel: "stylesheet", href: appHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Busque um usuário do GitHub e explore seus repositórios mais populares."
				/>
				<title>GitHub Explorer</title>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="d-flex flex-column" style={{ minHeight: "100dvh" }}>
					<Header />
					<div className="flex-grow-1 d-flex flex-column">{children}</div>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<Outlet />
			</NuqsAdapter>
		</QueryClientProvider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "Ocorreu algum erro inesperado.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error) && error.status === 404) {
		return (
			<main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-3 py-5">
				<NotFound />
			</main>
		);
	}

	if (isRouteErrorResponse(error)) {
		message = `Erro ${error.status}`;
		details = error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main
			className="d-flex flex-column align-items-center justify-content-center text-center flex-grow-1"
			style={{ padding: "2rem" }}
		>
			<h1>{message}</h1>
			<p className="text-body-secondary">{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
