export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
  separator: string = "/",
) => {
  if (!date) {
    return "";
  }

  const formattedDate = date.toLocaleDateString("id", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...options,
  });

  return formattedDate.replace(/\//g, separator);
};

export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("-").map(Number);

  // Create a new Date object
  // Note: month is 0-indexed in JavaScript Date, so we subtract 1
  const date = new Date(year, month - 1, day);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  return date;
};
