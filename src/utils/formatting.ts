export function formatBytes(bytes: number): string {
	if (bytes < 10 ** 6) {
		return `${(bytes / 10 ** 3).toFixed()} KB`;
	}

	if (bytes < 10 ** 9) {
		return `${(bytes / 10 ** 6).toFixed(1)} MB`;
	}

	return `${(bytes / 10 ** 9).toFixed(2)} GB`;
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

	return date.toLocaleDateString("en-US", options);
}
