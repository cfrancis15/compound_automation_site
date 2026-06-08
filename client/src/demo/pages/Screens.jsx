import { useState } from "react";
import { screens, getScreenStats } from "../data/mockData";
import "./Screens.css";

/**
 * Expandable detail panel for a single screen's configuration.
 * "Run Now" and "Re-score" are disabled — intentional demo tease.
 */
function ScreenDetailPanel({ screen }) {
  const greenPct = (screen.green_threshold * 100).toFixed(0);
  const yellowPct = (screen.yellow_threshold * 100).toFixed(0);

  const sourceZips = screen.source_zips.join(", ");
  const compZips = screen.comp_zips.join(", ");

  let comparisonMethod = "Direct";

  if (screen.comparison_method === "per_unit") {
    comparisonMethod = "Per Unit";
  }

  const greenThreshold = greenPct + "% spread";
  const yellowThreshold = yellowPct + "% spread";

  return (
    <div className="screen-detail">
      <div className="detail-grid">
        <div className="detail-field">
          <span className="field-label">Source Zips</span>
          <span className="field-value">{sourceZips}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Source Property Type</span>
          <span className="field-value">{screen.source_property_type}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Comp Property Type</span>
          <span className="field-value">{screen.comp_property_type}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Comp Zips</span>
          <span className="field-value">{compZips}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Bedroom Filter</span>
          <span className="field-value">{screen.bedroom_filter}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Green Threshold</span>
          <span className="field-value">{greenThreshold}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Yellow Threshold</span>
          <span className="field-value">{yellowThreshold}</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Comparison Method</span>
          <span className="field-value">{comparisonMethod}</span>
        </div>
      </div>

      <div className="detail-actions">
        <button
          type="button"
          className="action-btn disabled"
          disabled
          title="Available in production"
        >
          Run Now
        </button>
        <button
          type="button"
          className="action-btn disabled"
          disabled
          title="Available in production"
        >
          Re-score
        </button>
      </div>
    </div>
  );
}

/** One screen card in the screens list. */
function ScreenCard({ screen, isExpanded, onEditClick }) {
  const stats = getScreenStats(screen.name);

  let editButtonLabel = "Edit";

  if (isExpanded) {
    editButtonLabel = "Close";
  }

  const propertyTypes = screen.source_property_type + " vs " + screen.comp_property_type;
  const zipCount = screen.source_zips.length + " zips watched";
  const dealCount = stats.dealCount + " deals";
  const greenCount = stats.green + " green";
  const yellowCount = stats.yellow + " yellow";
  const redCount = stats.red + " red";

  let detailPanel = null;

  if (isExpanded) {
    detailPanel = <ScreenDetailPanel screen={screen} />;
  }

  function handleEditClick() {
    onEditClick(screen.id);
  }

  return (
    <div className="screen-card">
      <div className="card-main">
        <div>
          <h3 className="card-name">{screen.name}</h3>
          <p className="card-description">{screen.description}</p>

          <div className="card-meta">
            <span>{propertyTypes}</span>
            <span className="meta-divider">·</span>
            <span>{zipCount}</span>
            <span className="meta-divider">·</span>
            <span>{dealCount}</span>
            <span className="meta-divider">·</span>
            <span className="count-green">{greenCount}</span>
            <span className="count-yellow">{yellowCount}</span>
            <span className="count-red">{redCount}</span>
          </div>
        </div>

        <button type="button" className="edit-btn" onClick={handleEditClick}>
          {editButtonLabel}
        </button>
      </div>

      {detailPanel}
    </div>
  );
}

function Screens() {
  const [expandedId, setExpandedId] = useState(null);

  function handleEditClick(screenId) {
    // Toggle: clicking Edit again collapses the panel
    if (expandedId === screenId) {
      setExpandedId(null);
    } else {
      setExpandedId(screenId);
    }
  }

  const screenCards = screens.map((screen) => {
    const isExpanded = expandedId === screen.id;

    return (
      <ScreenCard
        key={screen.id}
        screen={screen}
        isExpanded={isExpanded}
        onEditClick={handleEditClick}
      />
    );
  });

  return (
    <div className="screens-page">
      <div className="page-header">
        <h2 className="page-title">Screening Configurations</h2>
        <p className="page-subtitle">
          Automated screens that scan listings and score deals against sold comps.
        </p>
      </div>

      <div className="screen-list">{screenCards}</div>
    </div>
  );
}

export default Screens;
