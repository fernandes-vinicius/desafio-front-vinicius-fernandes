function EmptyState({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={`${className}`} {...props} />;
}

function EmptyStateText({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			className={`text-body-secondary text-center mb-0 py-4 ${className}`}
			{...props}
		/>
	);
}

export { EmptyState, EmptyStateText };
