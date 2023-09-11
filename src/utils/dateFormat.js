export const dateFormat = (date) => {
  if (date) {
    const timestamp = new Date(date);
    const localeTimeZone = timestamp.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    const localeDate = localeTimeZone.split("at")[0];
    const localeTime = localeTimeZone
      .split("at")[1]
      .replace("PM", "")
      .replace("AM", "");

    return { localeDate, localeTime };
  }
};
