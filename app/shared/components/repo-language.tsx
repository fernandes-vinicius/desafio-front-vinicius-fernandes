import { getLanguageColor } from "~/shared/utils/language-colors";

type RepoLanguageProps = {
	language: string;
	className?: string;
};

export function RepoLanguage({ language, className }: RepoLanguageProps) {
	const languageColor = getLanguageColor(language);

	return (
		<p className={`d-flex align-items-center gap-2 mb-0 ${className}`}>
			<span
				aria-hidden
				className="rounded-circle d-inline-block"
				style={{
					width: 10,
					height: 10,
					backgroundColor: languageColor,
				}}
			/>
			{language}
		</p>
	);
}
