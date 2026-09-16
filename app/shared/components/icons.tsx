import spriteHref from "bootstrap-icons/bootstrap-icons.svg?url";

export type IconProps = {
	className?: string;
	size?: number;
};

function BootstrapIcon({
	name,
	className,
	size = 14,
}: IconProps & { name: string }) {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			fill="currentColor"
			aria-hidden="true"
		>
			<use href={`${spriteHref}#${name}`} />
		</svg>
	);
}

function SearchIcon(props: IconProps) {
	return <BootstrapIcon name="search" {...props} />;
}

function ExternalLinkIcon(props: IconProps) {
	return <BootstrapIcon name="box-arrow-up-right" {...props} />;
}

export { SearchIcon, ExternalLinkIcon };
