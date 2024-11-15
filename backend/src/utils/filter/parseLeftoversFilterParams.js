export function parseNumber(value) {
  if(typeof value !== "string") return;

  const parsedInteger = parseInt(value);
  if(Number.isNaN(parsedInteger)) return;

  return parsedInteger;
}

export function parseDate(value) {
  if (typeof value !== "string") return;
  const date = new Date(value);
  if (isNaN(date.getTime())) return;
  return date.toISOString();
}

export function parseSearchTerm(value) {
  if (typeof value !== "string") return;
  return value.trim();
}
export  function parseBool(value) {
  if (typeof value !== "string") return;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}