import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("u/:username", "routes/profile.tsx"),
	route("u/:username/:repo", "routes/repo.tsx"),
	route("*?", "routes/not-found.tsx"),
] satisfies RouteConfig;
