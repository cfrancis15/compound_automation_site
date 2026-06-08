import "./ScoreBadge.css";

/**
 * Colored pill showing deal score: green, yellow, or red.
 * size="large" is used on the deal detail header.
 */
function ScoreBadge({ score, size = "small" }) {
  let label = "Red";

  if (score === "green") {
    label = "Green";
  } else if (score === "yellow") {
    label = "Yellow";
  }

  // Build badge classes from score and size
  let badgeClass = "score-badge red small";

  if (score === "green" && size === "large") {
    badgeClass = "score-badge green large";
  } else if (score === "green") {
    badgeClass = "score-badge green small";
  } else if (score === "yellow" && size === "large") {
    badgeClass = "score-badge yellow large";
  } else if (score === "yellow") {
    badgeClass = "score-badge yellow small";
  } else if (size === "large") {
    badgeClass = "score-badge red large";
  }

  return (
    <span className={badgeClass}>
      <span className="score-dot" />
      {label}
    </span>
  );
}

export default ScoreBadge;
