function getFormattedDateTime(value, type, isMs = true, localFormat = "en-us") {
  if (!type) return value;
  if (!isMs) value = value * 1000;
  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat(localFormat, options).format(date);
}
export default getFormattedDateTime;
