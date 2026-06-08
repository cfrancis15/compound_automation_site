import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getDealById,
  getScreenForDeal,
  generateComps,
} from "../data/mockData";
import { formatCurrency, formatPercent } from "../utils/formatters";
import ScoreBadge from "../components/ScoreBadge";
import CompTable from "../components/CompTable";
import "./DealDetail.css";

/** Build spread cell class for a unit breakdown row. */
function getUnitSpreadClass(spread, screen, dealScore) {
  let spreadClass = "spread-cell red";

  if (screen) {
    if (spread >= screen.green_threshold) {
      spreadClass = "spread-cell green";
    } else if (spread >= screen.yellow_threshold) {
      spreadClass = "spread-cell yellow";
    }
  } else if (dealScore === "green") {
    spreadClass = "spread-cell green";
  } else if (dealScore === "yellow") {
    spreadClass = "spread-cell yellow";
  }

  return spreadClass;
}

/**
 * Single score window card (3-month, 6-month, or 12-month).
 * The 6-month window is visually emphasized as the primary scoring period.
 */
function ScoreWindowCard({ label, median, spread, compCount, isPrimary, trend }) {
  let cardClass = "score-window-card";

  if (isPrimary) {
    cardClass = "score-window-card primary";
  }

  // Trend arrow shown on the 3-month card when medians are shifting
  let trendArrow = null;

  if (trend === "up") {
    trendArrow = <span className="trend-arrow up">▲</span>;
  } else if (trend === "down") {
    trendArrow = <span className="trend-arrow down">▼</span>;
  }

  const formattedMedian = formatCurrency(median);
  const formattedSpread = formatPercent(spread);
  const compLabel = compCount + " comps";

  return (
    <div className={cardClass}>
      <div className="score-window-header">
        <h3 className="score-window-label">{label}</h3>
        {trendArrow}
      </div>
      <div className="score-window-median">{formattedMedian}</div>
      <div className="score-window-spread">{formattedSpread}</div>
      <div className="score-window-comps">{compLabel}</div>
    </div>
  );
}

/** One row in the unit breakdown table. */
function UnitBreakdownRow({ unit, screen, dealScore }) {
  const spreadClass = getUnitSpreadClass(unit.spread, screen, dealScore);
  const bedroomLabel = unit.bedrooms + " BR";
  const countLabel = unit.count + " units";
  const perUnitCost = formatCurrency(unit.per_unit_cost);
  const compMedian = formatCurrency(unit.comp_median);
  const spread = formatPercent(unit.spread);

  return (
    <tr>
      <td>{bedroomLabel}</td>
      <td>{countLabel}</td>
      <td>{perUnitCost}</td>
      <td>{compMedian}</td>
      <td className={spreadClass}>{spread}</td>
    </tr>
  );
}

function DealDetail() {
  const { id } = useParams();
  const deal = getDealById(id);
  const screen = deal ? getScreenForDeal(deal) : null;

  const comps = useMemo(() => {
    if (!deal) {
      return [];
    }

    return generateComps(deal, 12);
  }, [deal]);

  if (!deal) {
    return (
      <div className="deal-detail not-found">
        <Link to="/demo" className="back-link">
          ← Back to Dashboard
        </Link>
        <h2>Deal not found</h2>
        <p>No deal exists with id {id}.</p>
      </div>
    );
  }

  // Determine cost label based on screen comparison method
  let costLabel = "Direct Cost";
  let costValue = deal.direct_cost;

  if (deal.per_unit_cost) {
    costLabel = "Per-Unit Cost";
    costValue = deal.per_unit_cost;
  }

  let unitDisplay = "Single property";

  if (deal.unit_count > 1) {
    unitDisplay = deal.unit_count + " units";
  }

  // Trend arrow: compare 3-month median to 6-month median
  let trend = null;

  if (deal.comp_median_3mo > deal.comp_median_6mo) {
    trend = "up";
  } else if (deal.comp_median_3mo < deal.comp_median_6mo) {
    trend = "down";
  }

  let thresholdText = "";

  if (screen) {
    const greenPct = (screen.green_threshold * 100).toFixed(0);
    const yellowPct = (screen.yellow_threshold * 100).toFixed(0);
    thresholdText = "Green ≥ " + greenPct + "% · Yellow ≥ " + yellowPct + "%";
  }

  const isMultifamily = deal.unit_count > 1 && deal.unit_breakdown;

  const askingPrice = formatCurrency(deal.asking_price);
  const formattedCost = formatCurrency(costValue);
  const costLine = costLabel + ": ";

  let thresholdElement = null;

  if (thresholdText) {
    thresholdElement = <span className="thresholds">{thresholdText}</span>;
  }

  let unitBreakdownSection = null;

  if (isMultifamily) {
    const breakdownRows = deal.unit_breakdown.map((unit) => (
      <UnitBreakdownRow
        key={unit.bedrooms}
        unit={unit}
        screen={screen}
        dealScore={deal.score}
      />
    ));

    unitBreakdownSection = (
      <section className="detail-section">
        <h3 className="section-title">Unit Breakdown</h3>
        <div className="table-scroll-wrap unit-table-wrap">
          <table className="unit-table">
            <thead>
              <tr>
                <th>
                  <span className="header-long">Bedroom Type</span>
                  <span className="header-short">Type</span>
                </th>
                <th>Count</th>
                <th>
                  <span className="header-long">Per-Unit Cost</span>
                  <span className="header-short">Per-Unit</span>
                </th>
                <th>
                  <span className="header-long">Comp Median</span>
                  <span className="header-short">Median</span>
                </th>
                <th>Spread</th>
              </tr>
            </thead>
            <tbody>{breakdownRows}</tbody>
          </table>
        </div>
      </section>
    );
  }

  const compCountLabel = comps.length + " recent sales near " + deal.zip;

  return (
    <div className="deal-detail">
      <Link to="/demo" className="back-link">
        ← Back to Dashboard
      </Link>

      <div className="detail-header">
        <div className="title-row">
          <h2 className="deal-address">{deal.address}</h2>
          <ScoreBadge score={deal.score} size="large" />
        </div>

        <div className="deal-meta">
          <span>{askingPrice} asking</span>
          <span className="meta-divider">·</span>
          <span>{unitDisplay}</span>
          <span className="meta-divider">·</span>
          <span>{deal.property_type}</span>
          <span className="meta-divider">·</span>
          <span>{deal.zip}</span>
        </div>

        <div className="deal-links">
          <a href="#" className="redfin-link">
            View on Redfin ↗
          </a>
        </div>

        <div className="screen-info">
          <span className="screen-name">{deal.screen}</span>
          {thresholdElement}
        </div>
      </div>

      <section className="detail-section">
        <h3 className="section-title">Score Summary</h3>
        <div className="score-cards">
          <ScoreWindowCard
            label="3-Month"
            median={deal.comp_median_3mo}
            spread={deal.spread_3mo}
            compCount={deal.comp_count_3mo}
            isPrimary={false}
            trend={trend}
          />
          <ScoreWindowCard
            label="6-Month"
            median={deal.comp_median_6mo}
            spread={deal.spread_6mo}
            compCount={deal.comp_count_6mo}
            isPrimary={true}
            trend={null}
          />
          <ScoreWindowCard
            label="12-Month"
            median={deal.comp_median_12mo}
            spread={deal.spread_12mo}
            compCount={deal.comp_count_12mo}
            isPrimary={false}
            trend={null}
          />
        </div>
        <p className="cost-line">
          {costLine}
          <strong>{formattedCost}</strong>
        </p>
      </section>

      {unitBreakdownSection}

      <section className="detail-section">
        <h3 className="section-title">Comp Transactions</h3>
        <p className="section-subtitle">{compCountLabel}</p>
        <CompTable comps={comps} />
      </section>
    </div>
  );
}

export default DealDetail;
