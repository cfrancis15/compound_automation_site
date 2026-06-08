/**
 * Shared formatting helpers for currency, percentages, and dates.
 * Keeps display logic in one place so tables stay consistent.
 */

/** Format a number as US dollars (e.g. 1250000 -> "$1,250,000"). */
export function formatCurrency(value) {
  if (value === null || value === undefined) {
    return "—";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format a decimal spread as a signed percentage.
 * Input 0.224 becomes "+22.4%"; negative values get a minus sign.
 */
export function formatPercent(value) {
  if (value === null || value === undefined) {
    return "—";
  }

  const percent = value * 100;
  const sign = percent >= 0 ? "+" : "";

  return `${sign}${percent.toFixed(1)}%`;
}

/** Format an ISO date string for display (e.g. "Jun 3, 2026"). */
export function formatDate(dateString) {
  if (!dateString) {
    return "—";
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Format a sale date in short form for comp tables. */
export function formatShortDate(dateString) {
  if (!dateString) {
    return "—";
  }

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
