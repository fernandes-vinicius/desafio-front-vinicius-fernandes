import { Dropdown } from "react-bootstrap";

import {
	SORT_OPTIONS,
	useSortFilter,
} from "~/features/user-profile/hooks/use-sort-filter";

export function SortFilter() {
	const { sortValues, sort, setSort } = useSortFilter();

	const current =
		SORT_OPTIONS.find((option) => option.value === sort) ?? SORT_OPTIONS[0];

	return (
		<Dropdown
			className="d-grid d-sm-block"
			onSelect={(eventKey) => {
				if (eventKey) {
					setSort(eventKey as (typeof sortValues)[number]);
				}
			}}
		>
			<Dropdown.Toggle variant="outline-secondary" size="sm" id="sort-dropdown">
				Ordenar por:{" "}
				<span className="fw-semibold text-primary">{current.label}</span>
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{SORT_OPTIONS.map((option) => (
					<Dropdown.Item
						key={option.value}
						eventKey={option.value}
						active={option.value === sort}
					>
						{option.label}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
}
