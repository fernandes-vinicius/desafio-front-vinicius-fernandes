import { useNavigate } from "react-router";

export function useSearch() {
	const navigate = useNavigate();

	function search(username: string) {
		const trimmed = username.trim();
		if (trimmed) {
			navigate(`/u/${trimmed}`);
		}
	}

	return { search };
}
