import { screens } from "../data/mockData";
import "./FilterBar.css";

const scoreOptions = [
  { value: "all", label: "All" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "red", label: "Red" },
];

/** Build the class name for a score filter button. */
function getScoreButtonClass(optionValue, activeScoreFilter) {
  let buttonClass = "score-btn";

  if (activeScoreFilter !== optionValue) {
    return buttonClass;
  }

  if (optionValue === "all") {
    buttonClass = "score-btn active all";
  } else if (optionValue === "green") {
    buttonClass = "score-btn active green";
  } else if (optionValue === "yellow") {
    buttonClass = "score-btn active yellow";
  } else {
    buttonClass = "score-btn active red";
  }

  return buttonClass;
}

/** One score filter button in the filter bar. */
function ScoreFilterButton({ option, scoreFilter, onScoreChange }) {
  const buttonClass = getScoreButtonClass(option.value, scoreFilter);

  function handleClick() {
    onScoreChange(option.value);
  }

  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {option.label}
    </button>
  );
}

/**
 * Filter controls for the dashboard deal list.
 * Parent owns all state — this component just renders inputs and fires callbacks.
 */
function FilterBar({
  screenFilter,
  onScreenChange,
  zipFilter,
  onZipChange,
  scoreFilter,
  onScoreChange,
  sortBy,
  onSortChange,
}) {
  function handleScreenChange(event) {
    onScreenChange(event.target.value);
  }

  function handleZipChange(event) {
    onZipChange(event.target.value);
  }

  function handleSortChange(event) {
    onSortChange(event.target.value);
  }

  const scoreButtons = scoreOptions.map((option) => (
    <ScoreFilterButton
      key={option.value}
      option={option}
      scoreFilter={scoreFilter}
      onScoreChange={onScoreChange}
    />
  ));

  const screenOptions = screens.map((screen) => (
    <option key={screen.id} value={screen.name}>
      {screen.name}
    </option>
  ));

  return (
    <div className="filter-bar">
      <div className="filter-group screen-group">
        <label className="filter-label" htmlFor="screen-select">
          Screen
        </label>
        <select
          id="screen-select"
          className="filter-select"
          value={screenFilter}
          onChange={handleScreenChange}
        >
          <option value="all">All Screens</option>
          {screenOptions}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="zip-input">
          Zip Code
        </label>
        <input
          id="zip-input"
          type="text"
          className="filter-input"
          placeholder="e.g. 80203"
          value={zipFilter}
          onChange={handleZipChange}
          maxLength={5}
        />
      </div>

      <div className="filter-group">
        <span className="filter-label">Score</span>
        <div className="score-buttons">{scoreButtons}</div>
      </div>

      <div className="filter-group sort-group">
        <label className="filter-label" htmlFor="sort-select">
          Sort
        </label>
        <select
          id="sort-select"
          className="filter-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="best_spread">Best Spread First</option>
          <option value="worst_spread">Worst Spread First</option>
          <option value="lowest_price">Lowest Price</option>
          <option value="highest_price">Highest Price</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
