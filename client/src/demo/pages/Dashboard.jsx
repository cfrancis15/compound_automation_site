import { useEffect, useMemo, useState } from "react";
import { deals } from "../data/mockData";
import StatsBar from "../components/StatsBar";
import FilterBar from "../components/FilterBar";
import DealTable from "../components/DealTable";
import "./Dashboard.css";

// sessionStorage key — keeps filters when user returns from deal detail
const FILTER_STORAGE_KEY = "dealScreenerDashboardFilters";

const defaultFilters = {
  screenFilter: "all",
  zipFilter: "",
  scoreFilter: "all",
  sortBy: "best_spread",
};

/**
 * Read saved filters from sessionStorage (if any).
 * Called once on mount so the back button restores the previous view.
 */
function loadSavedFilters() {
  try {
    const saved = sessionStorage.getItem(FILTER_STORAGE_KEY);

    if (saved) {
      return { ...defaultFilters, ...JSON.parse(saved) };
    }
  } catch (error) {
    // If storage is unavailable, fall back to defaults
  }

  return defaultFilters;
}

/** Save current filter state before navigating to a deal detail page. */
function saveFilters(filters) {
  try {
    sessionStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(filters));
  } catch (error) {
    // Silently ignore — filters just won't persist
  }
}

/**
 * Apply screen, zip, and score filters to the full deal list.
 */
function filterDeals(allDeals, screenFilter, zipFilter, scoreFilter) {
  let result = [...allDeals];

  if (screenFilter !== "all") {
    result = result.filter((deal) => deal.screen === screenFilter);
  }

  if (zipFilter.trim() !== "") {
    const zipSearch = zipFilter.trim();
    result = result.filter((deal) => deal.zip.includes(zipSearch));
  }

  if (scoreFilter !== "all") {
    result = result.filter((deal) => deal.score === scoreFilter);
  }

  return result;
}

/**
 * Sort filtered deals by the selected sort option.
 * Uses spread_6mo as the primary scoring window.
 */
function sortDeals(dealList, sortBy) {
  const sorted = [...dealList];

  if (sortBy === "best_spread") {
    sorted.sort((a, b) => b.spread_6mo - a.spread_6mo);
  } else if (sortBy === "worst_spread") {
    sorted.sort((a, b) => a.spread_6mo - b.spread_6mo);
  } else if (sortBy === "lowest_price") {
    sorted.sort((a, b) => a.asking_price - b.asking_price);
  } else if (sortBy === "highest_price") {
    sorted.sort((a, b) => b.asking_price - a.asking_price);
  } else if (sortBy === "newest") {
    sorted.sort(
      (a, b) => new Date(b.date_scraped) - new Date(a.date_scraped)
    );
  }

  return sorted;
}

function Dashboard() {
  const [screenFilter, setScreenFilter] = useState(defaultFilters.screenFilter);
  const [zipFilter, setZipFilter] = useState(defaultFilters.zipFilter);
  const [scoreFilter, setScoreFilter] = useState(defaultFilters.scoreFilter);
  const [sortBy, setSortBy] = useState(defaultFilters.sortBy);

  // Restore filters from sessionStorage on first load
  useEffect(() => {
    const saved = loadSavedFilters();
    setScreenFilter(saved.screenFilter);
    setZipFilter(saved.zipFilter);
    setScoreFilter(saved.scoreFilter);
    setSortBy(saved.sortBy);
  }, []);

  const filteredDeals = useMemo(() => {
    const filtered = filterDeals(deals, screenFilter, zipFilter, scoreFilter);
    return sortDeals(filtered, sortBy);
  }, [screenFilter, zipFilter, scoreFilter, sortBy]);

  function persistFilters() {
    saveFilters({ screenFilter, zipFilter, scoreFilter, sortBy });
  }

  // Keep sessionStorage in sync as filters change
  useEffect(() => {
    persistFilters();
  }, [screenFilter, zipFilter, scoreFilter, sortBy]);

  // Build the results count label
  let dealWord = "deal";

  if (filteredDeals.length !== 1) {
    dealWord = "deals";
  }

  const resultsText = "Showing " + filteredDeals.length + " " + dealWord;

  return (
    <div className="dashboard">
      <StatsBar />

      <FilterBar
        screenFilter={screenFilter}
        onScreenChange={setScreenFilter}
        zipFilter={zipFilter}
        onZipChange={setZipFilter}
        scoreFilter={scoreFilter}
        onScoreChange={setScoreFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="results-meta">
        <span>{resultsText}</span>
      </div>

      <DealTable deals={filteredDeals} onDealClick={persistFilters} />
    </div>
  );
}

export default Dashboard;
