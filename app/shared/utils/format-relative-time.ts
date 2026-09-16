type Division = {
	amount: number;
	unit: Intl.RelativeTimeFormatUnit;
};

const DIVISIONS: Division[] = [
	{ amount: 60, unit: "seconds" },
	{ amount: 60, unit: "minutes" },
	{ amount: 24, unit: "hours" },
	{ amount: 7, unit: "days" },
	{ amount: 4.34524, unit: "weeks" },
	{ amount: 12, unit: "months" },
	{ amount: Number.POSITIVE_INFINITY, unit: "years" },
];

export function formatRelativeTime(dateString: string): string {
	const formatter = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
	let duration = (new Date(dateString).getTime() - Date.now()) / 1000;

	for (const division of DIVISIONS) {
		if (Math.abs(duration) < division.amount) {
			return formatter.format(Math.round(duration), division.unit);
		}
		duration /= division.amount;
	}

	return formatter.format(Math.round(duration), "years");
}
