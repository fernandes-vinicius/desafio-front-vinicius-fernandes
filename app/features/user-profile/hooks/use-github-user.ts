import { useQuery } from "@tanstack/react-query";
import { getUser } from "~/api/services/get-user";

export function useGithubUser(username: string) {
	return useQuery({
		queryKey: ["github-user", username],
		queryFn: () => getUser(username),
	});
}
