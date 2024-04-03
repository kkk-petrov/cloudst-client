export function formatBytes(bytes: number, decimals = 2): string {
  const factor = 10 ** 9;

  if (bytes < 10 ** 6) {
    return `${(bytes / 10 ** 3).toFixed()} KB`;
  }

  if (bytes < factor) {
    return `${(bytes / 10 ** 6).toFixed(decimals)} MB`;
  }

  return `${(bytes / factor).toFixed(decimals)} GB`;
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
