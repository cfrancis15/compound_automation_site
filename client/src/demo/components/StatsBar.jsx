import { dashboardStats } from "../data/mockData";
import "./StatsBar.css";

/**
 * Summary stats row shown on the dashboard header.
 * Numbers reflect aggregate production volume, not just the visible mock slice.
 */
function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-value">{dashboardStats.totalAnalyzed}</span>
        <span className="stat-label">Deals Analyzed</span>
      </div>

      <div className="stat-divider" />

      <div className="stat-item green">
        <span className="stat-value">{dashboardStats.green}</span>
        <span className="stat-label">Green</span>
      </div>

      <div className="stat-item yellow">
        <span className="stat-value">{dashboardStats.yellow}</span>
        <span className="stat-label">Yellow</span>
      </div>

      <div className="stat-item red">
        <span className="stat-value">{dashboardStats.red}</span>
        <span className="stat-label">Red</span>
      </div>

      <div className="stat-divider" />

      <div className="stat-item refresh">
        <span className="stat-label">Last Refreshed</span>
        <span className="stat-value small">{dashboardStats.lastRefreshed}</span>
      </div>
    </div>
  );
}

export default StatsBar;
