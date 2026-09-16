import { parseAsStringLiteral, useQueryState } from "nuqs";

export const SORT_OPTIONS = [
	{ value: "stars-desc", label: "estrelas (maior primeiro)" },
	{ value: "stars-asc", label: "estrelas (menor primeiro)" },
	{ value: "name-asc", label: "nome (A-Z)" },
	{ value: "updated-desc", label: "atualização recente" },
] as const;

const sortValues = SORT_OPTIONS.map((option) => option.value);

export function useSortFilter() {
	const [sort, setSort] = useQueryState(
		"sort",
		parseAsStringLiteral(sortValues).withDefault("stars-desc"),
	);

	return { sortValues, sort, setSort };
}
