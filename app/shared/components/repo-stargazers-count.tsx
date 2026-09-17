import { StarIcon } from "~/shared/components/icons";
import { formatNumber } from "~/shared/utils/format-number";

type RepoStargazersCountProps = {
	value: number;
	className?: string;
};

export function RepoStargazersCount({
	value,
	className,
}: RepoStargazersCountProps) {
	return (
		<p className={`d-flex align-items-center gap-2 mb-0 ${className}`}>
			<span className="mt-1">{formatNumber(value)}</span>
			<StarIcon className="text-primary" />
		</p>
	);
}
