import { formatNumber } from "~/shared/utils/format-number";

type StatItemProps = {
	label: string;
	value: number;
};

export function StatItem({ label, value }: StatItemProps) {
	return (
		<div className="d-flex flex-column-reverse mb-0">
			<dt className="fw-medium small text-body-tertiary">{label}</dt>
			<dd className="fw-bold fs-5 mb-1">{formatNumber(value)}</dd>
		</div>
	);
}
